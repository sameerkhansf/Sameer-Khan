import { redirect } from "next/navigation";
import { defaultLocale } from "../[lang]/dictionaries";

// Redirect to locale-specific blog page
// All content is now served from /[lang]/blog/ routes
export default function BlogPage() {
  redirect(`/${defaultLocale}/blog`);
}
