import { redirect } from "next/navigation";
import { defaultLocale } from "../../[lang]/dictionaries";
import { getAllPostSlugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all slugs (for static export)
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Redirect to locale-specific blog post page
// All content is now served from /[lang]/blog/[slug]/ routes
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  redirect(`/${defaultLocale}/blog/${slug}`);
}
