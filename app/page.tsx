import { redirect } from "next/navigation";
import { defaultLocale } from "./[lang]/dictionaries";

// Redirect root to default locale
// All content is now served from /[lang]/ routes
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
