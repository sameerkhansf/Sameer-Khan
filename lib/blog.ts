import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_PATH = path.join(process.cwd(), "content/blog");

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
    date: data.date || new Date().toISOString(),
    updated: data.updated,
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

      // Return only metadata (not content)
      const { content, wordCount, ...meta } = post;
      return meta;
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
