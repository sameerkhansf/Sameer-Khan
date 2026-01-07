import { redirect } from "next/navigation";
import { defaultLocale } from "../[lang]/dictionaries";

// Redirect to locale-specific resume page
// All content is now served from /[lang]/resume/ routes
export default function ResumePage() {
  redirect(`/${defaultLocale}/resume`);
}
