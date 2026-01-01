#!/usr/bin/env node
/**
 * Image Optimization Script for Next.js Static Export
 * 
 * Optimizes images in /public directory by:
 * - Converting to WebP format (85% quality)
 * - Generating responsive sizes (400w, 800w, 1200w, 1600w)
 * - Preserving original images as fallbacks
 * 
 * Usage: npm run optimize-images
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const WEBP_QUALITY = 85;
const RESPONSIVE_SIZES = [400, 800, 1200, 1600];

interface ImageStats {
  original: string;
  originalSize: number;
  optimized: string;
  optimizedSize: number;
  savings: number;
  savingsPercent: number;
}

const stats: ImageStats[] = [];

/**
 * Check if file is an image
 */
function isImageFile(file: string): boolean {
  const ext = path.extname(file).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Get relative path from public directory
 */
function getRelativePath(filePath: string): string {
  return path.relative(PUBLIC_DIR, filePath);
}

/**
 * Check if WebP version already exists and is newer than original
 */
function isAlreadyOptimized(filePath: string): boolean {
  const dir = path.dirname(filePath);
  const filename = path.basename(filePath, path.extname(filePath));
  const webpPath = path.join(dir, `${filename}.webp`);
  
  if (!fs.existsSync(webpPath)) {
    return false;
  }
  
  // Check if WebP is newer than original
  const originalMtime = fs.statSync(filePath).mtime.getTime();
  const webpMtime = fs.statSync(webpPath).mtime.getTime();
  
  return webpMtime >= originalMtime;
}

/**
 * Optimize a single image
 */
async function optimizeImage(filePath: string): Promise<void> {
  const relativePath = getOriginalRelativePath(filePath);
  const dir = path.dirname(filePath);
  const filename = path.basename(filePath, path.extname(filePath));
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip if already optimized
  if (filename.endsWith('.webp') || filename.includes('-optimized')) {
    return;
  }

  // Skip if WebP version already exists and is newer
  if (isAlreadyOptimized(filePath)) {
    console.log(`⏭️  Skipped: ${relativePath} (already optimized)`);
    return;
  }

  try {
    const originalStats = fs.statSync(filePath);
    const originalSize = originalStats.size;

    // Generate WebP version
    const webpPath = path.join(dir, `${filename}.webp`);
    await sharp(filePath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSize = webpStats.size;
    const savings = originalSize - webpSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    stats.push({
      original: relativePath,
      originalSize,
      optimized: getRelativePath(webpPath),
      optimizedSize: webpSize,
      savings,
      savingsPercent: parseFloat(savingsPercent),
    });

    // Generate responsive sizes for larger images (> 50KB)
    if (originalSize > 50 * 1024) {
      for (const size of RESPONSIVE_SIZES) {
        const responsivePath = path.join(dir, `${filename}-${size}w.webp`);
        
        // Skip responsive size if it already exists
        if (fs.existsSync(responsivePath)) {
          const responsiveMtime = fs.statSync(responsivePath).mtime.getTime();
          const originalMtime = originalStats.mtime.getTime();
          if (responsiveMtime >= originalMtime) {
            continue; // Skip this size
          }
        }
        
        await sharp(filePath)
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .webp({ quality: WEBP_QUALITY })
          .toFile(responsivePath);
      }
    }

    console.log(`✅ Optimized: ${relativePath} (${formatBytes(originalSize)} → ${formatBytes(webpSize)}, ${savingsPercent}% smaller)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error);
  }
}

/**
 * Get original relative path (for stats)
 */
function getOriginalRelativePath(filePath: string): string {
  return path.relative(PUBLIC_DIR, filePath);
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Recursively find all images in directory
 */
function findImages(dir: string): string[] {
  const images: string[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file.startsWith('.') || file === 'node_modules') {
        continue;
      }
      images.push(...findImages(filePath));
    } else if (stat.isFile() && isImageFile(file)) {
      images.push(filePath);
    }
  }

  return images;
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Starting image optimization...\n');

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`❌ Public directory not found: ${PUBLIC_DIR}`);
    process.exit(1);
  }

  const images = findImages(PUBLIC_DIR);
  
  if (images.length === 0) {
    console.log('ℹ️  No images found to optimize.');
    return;
  }

  console.log(`Found ${images.length} image(s) to optimize:\n`);

  // Optimize all images
  for (const image of images) {
    await optimizeImage(image);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Optimization Summary');
  console.log('='.repeat(60));

  if (stats.length > 0) {
    const totalOriginal = stats.reduce((sum, s) => sum + s.originalSize, 0);
    const totalOptimized = stats.reduce((sum, s) => sum + s.optimizedSize, 0);
    const totalSavings = totalOriginal - totalOptimized;
    const totalSavingsPercent = ((totalSavings / totalOriginal) * 100).toFixed(1);

    console.log(`\nTotal images optimized: ${stats.length}`);
    console.log(`Total original size: ${formatBytes(totalOriginal)}`);
    console.log(`Total optimized size: ${formatBytes(totalOptimized)}`);
    console.log(`Total savings: ${formatBytes(totalSavings)} (${totalSavingsPercent}%)\n`);

    // Top 5 savings
    const topSavings = [...stats]
      .sort((a, b) => b.savings - a.savings)
      .slice(0, 5);

    if (topSavings.length > 0) {
      console.log('Top 5 savings:');
      topSavings.forEach((stat, index) => {
        console.log(
          `  ${index + 1}. ${stat.original}: ${formatBytes(stat.originalSize)} → ${formatBytes(stat.optimizedSize)} (${stat.savingsPercent}% smaller)`
        );
      });
    }
  }

  console.log('\n✅ Image optimization complete!');
  
  if (stats.length === 0) {
    console.log('ℹ️  All images were already optimized. No changes needed.\n');
  } else {
    console.log('\n💡 Note: Already-optimized images are automatically skipped.');
    console.log('   To force re-optimization, delete the .webp files and run again.\n');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { optimizeImage, findImages };
