import "server-only";

// Define supported locales
const dictionaries = {
  "en-US": () =>
    import("./dictionaries/en-US.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
};

// Export type for supported locales
export type Locale = keyof typeof dictionaries;

// List of all supported locales for static generation
export const locales: Locale[] = ["en-US", "es", "de", "fr", "ja", "zh"];

// Default locale
export const defaultLocale: Locale = "en-US";

// Type guard to check if a string is a valid locale
export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

// Get dictionary for a specific locale
export const getDictionary = async (locale: Locale) => dictionaries[locale]();

// Dictionary type (inferred from the JSON structure)
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
