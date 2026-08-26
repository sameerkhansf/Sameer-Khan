import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(process.cwd(), "content/blog");

function toDateString(value: unknown): string | undefined {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && value) return value;
  return undefined;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  category: string;
  image?: string;
  imageAlt?: string;
  readingTime: string;
  wordCount: number;
  published: boolean;
  featured?: boolean;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  category: string;
  image?: string;
  imageAlt?: string;
  readingTime: string;
  published: boolean;
  featured?: boolean;
}

// Get all MDX files from content/blog
function getMDXFiles(): string[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }
  return fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".mdx"));
}

// Read and parse a single MDX file
function readMDXFile(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    // YAML parses unquoted dates into Date objects; normalize to YYYY-MM-DD
    // strings so every consumer can treat dates as text.
    date: toDateString(data.date) || new Date().toISOString(),
    updated: toDateString(data.updated),
    author: data.author || "Sameer Khan",
    tags: data.tags || [],
    category: data.category || "General",
    image: data.image,
    imageAlt: data.imageAlt,
    readingTime: stats.text,
    wordCount: stats.words,
    published: data.published !== false,
    featured: data.featured || false,
    content,
  };
}

// Get all blog posts (metadata only, for listing)
export function getAllPosts(): BlogPostMeta[] {
  const files = getMDXFiles();

  const posts = files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const post = readMDXFile(slug);

      if (!post || !post.published) {
        return null;
      }

      // Get file modification time for secondary sorting
      const filePath = path.join(POSTS_PATH, file);
      const stats = fs.statSync(filePath);
      const mtime = stats.mtime.getTime();

      // Return metadata with modification time
      const { content, wordCount, ...meta } = post;
      return { ...meta, _mtime: mtime };
    })
    .filter((post): post is BlogPostMeta & { _mtime: number } => post !== null)
    .sort((a, b) => {
      // Primary sort: by date (newest first)
      const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateDiff !== 0) return dateDiff;
      
      // Secondary sort: by file modification time (newest first) for same date
      return b._mtime - a._mtime;
    })
    .map(({ _mtime, ...meta }) => meta); // Remove _mtime before returning

  return posts;
}

// Get a single blog post by slug
export function getPostBySlug(slug: string): BlogPost | null {
  const post = readMDXFile(slug);

  if (!post || !post.published) {
    return null;
  }

  return post;
}

// Get all post slugs (for static generation)
export function getAllPostSlugs(): string[] {
  const files = getMDXFiles();
  return files.map((file) => file.replace(".mdx", ""));
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    categories.add(post.category);
  });

  return Array.from(categories).sort();
}

// Get featured posts
export function getFeaturedPosts(): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured);
}

// Get popular posts (featured posts or most recent comprehensive reviews)
export function getPopularPosts(limit: number = 5): BlogPostMeta[] {
  const posts = getAllPosts();
  
  // Prioritize: 1) Featured posts, 2) AI reviews, 3) Tutorials/Guides
  const scored = posts.map((post) => {
    let score = 0;
    
    // Featured posts get highest priority
    if (post.featured) score += 100;
    
    // AI model reviews are popular
    if (post.title.toLowerCase().includes("review")) score += 50;
    if (post.category === "AI") score += 30;
    
    // Tutorials and guides
    if (post.title.toLowerCase().includes("guide")) score += 40;
    if (post.title.toLowerCase().includes("how")) score += 20;
    
    // Comparison posts
    if (post.title.toLowerCase().includes("vs")) score += 35;
    
    return { post, score };
  });
  
  // Sort by score, then by date
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });
  
  return scored.slice(0, limit).map((item) => item.post);
}

// Get related posts (by matching tags)
export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPostMeta[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts().filter((post) => post.slug !== currentSlug);

  // Score posts by number of matching tags
  const scored = allPosts.map((post) => {
    const matchingTags = post.tags.filter((tag) =>
      currentPost.tags.includes(tag)
    ).length;
    return { post, score: matchingTags };
  });

  // Sort by score, then by date
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  return scored.slice(0, limit).map((item) => item.post);
}
