"use client";
import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface IntroTranslations {
  heading: string;
  welcome: string;
  imageCaption: string;
  aboutMe: string;
  aboutMeText: string;
  technicalSkills: string;
  frontend: string;
  frontendSkills: string;
  backend: string;
  backendSkills: string;
  aiml: string;
  aimlSkills: string;
  cloudDevops: string;
  cloudDevopsSkills: string;
  whatIWrite: string;
  whatIWriteText: string;
  currentFocus: string;
  currentFocusText: string;
  letsConnect: string;
  letsConnectText: string;
}

interface IntroSectionProps {
  translations: IntroTranslations;
  lang: string;
}

export default function IntroSection({ translations, lang }: IntroSectionProps) {
  return (
    <section aria-label="About Sameer Khan" itemScope itemType="https://schema.org/Person">
      <div className="space-y-6 text-left">
        <h1 className="text-2xl font-semibold" itemProp="name">{translations.heading}</h1>
        <p className="text-base leading-relaxed">
          {translations.welcome}
        </p>

        <div className="space-y-2">
          <OptimizedImage
            src="/panel-event.jpg"
            alt="ASES x NFX Ventures dinner with Stanford entrepreneurs"
            width={600}
            height={400}
            className="w-full rounded-lg"
            priority
            sizes="(max-width: 640px) 100vw, 600px"
          />
          <p className="text-sm text-muted-foreground text-center">
            <Link
              href="https://ases.stanford.edu"
              target="_blank"
              className="hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              ASES
            </Link>{" "}
            x{" "}
            <Link
              target="_blank"
              href="https://www.nfx.com/team/anna-pinol"
              className="hover:text-blue-600 hover:decoration-wavy hover:underline"
            >
              NFX Ventures
            </Link>{" "}
            {translations.imageCaption}
          </p>
        </div>

        {/* About Me Section */}
        <h2 className="text-xl font-semibold pt-4">{translations.aboutMe}</h2>
        <p className="text-base leading-relaxed">
          {translations.aboutMeText}
        </p>

        {/* Technical Skills Section */}
        <h2 className="text-xl font-semibold pt-4">{translations.technicalSkills}</h2>
        <div className="text-base leading-relaxed space-y-2">
          <p>
            <strong>{translations.frontend}:</strong> {translations.frontendSkills}
          </p>
          <p>
            <strong>{translations.backend}:</strong> {translations.backendSkills}
          </p>
          <p>
            <strong>{translations.aiml}:</strong> {translations.aimlSkills}
          </p>
          <p>
            <strong>{translations.cloudDevops}:</strong> {translations.cloudDevopsSkills}
          </p>
        </div>

        {/* What I Write About Section */}
        <h2 className="text-xl font-semibold pt-4">{translations.whatIWrite}</h2>
        <p className="text-base leading-relaxed">
          {translations.whatIWriteText.split(/blog|博客|ブログ|Blog/i)[0]}
          <Link href={`/${lang}/blog`} className="text-blue-600 hover:underline">
            {lang === "zh" ? "博客" : lang === "ja" ? "ブログ" : "blog"}
          </Link>
          {translations.whatIWriteText.split(/blog|博客|ブログ|Blog/i)[1] || ""}
        </p>

        {/* Current Focus Section */}
        <h2 className="text-xl font-semibold pt-4">{translations.currentFocus}</h2>
        <p className="text-base leading-relaxed">
          {translations.currentFocusText}
        </p>

        {/* Connect Section */}
        <h2 className="text-xl font-semibold pt-4">{translations.letsConnect}</h2>
        <p className="text-base leading-relaxed">
          {translations.letsConnectText}
        </p>
      </div>
    </section>
  );
}
