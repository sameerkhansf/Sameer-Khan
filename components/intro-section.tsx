"use client";
import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function IntroSection() {
  return (
    <section aria-label="About Sameer Khan" itemScope itemType="https://schema.org/Person">
      <div className="space-y-6 text-left">
        <h1 className="text-2xl font-semibold" itemProp="name">Sameer Khan - Full-Stack Software Engineer</h1>
        <p className="text-base leading-relaxed">
          Welcome to my little piece of the internet. I'm a Full-Stack Software Engineer
          based in San Francisco with a passion for building innovative web applications
          and AI-powered solutions. I specialize in React, Next.js, TypeScript, and 
          machine learning integration.
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
            dinner with Stanford's next generation of entrepreneurs!
          </p>
        </div>

        {/* About Me Section */}
        <h2 className="text-xl font-semibold pt-4">About Me</h2>
        <p className="text-base leading-relaxed">
          I'm a recent Computer Science graduate from Sonoma State University with hands-on 
          experience building production applications. My journey spans from research in 
          explainable AI for cancer diagnosis to building AI-powered bookkeeping platforms 
          at <span className="text-muted-foreground">PomJuice</span>, where I architected 
          systems that reduced manual effort by 80% and achieved 95%+ classification accuracy.
        </p>

        {/* Technical Skills Section */}
        <h2 className="text-xl font-semibold pt-4">Technical Skills</h2>
        <div className="text-base leading-relaxed space-y-2">
          <p>
            <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, HTML/CSS
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Python, Java, Django, Express.js
          </p>
          <p>
            <strong>AI/ML:</strong> TensorFlow, PyTorch, LLM Integration, Prompt Engineering
          </p>
          <p>
            <strong>Cloud & DevOps:</strong> AWS (Certified), Docker, CI/CD, MongoDB
          </p>
        </div>

        {/* What I Write About Section */}
        <h2 className="text-xl font-semibold pt-4">What I Write About</h2>
        <p className="text-base leading-relaxed">
          On my{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
            technical blog
          </Link>
          , I share comprehensive reviews of frontier AI models like GPT-5, Claude Opus, 
          and DeepSeek, along with React tutorials, TypeScript guides, and developer tools 
          comparisons. I believe in learning in public and sharing knowledge with the 
          developer community.
        </p>

        {/* Current Focus Section */}
        <h2 className="text-xl font-semibold pt-4">Current Focus</h2>
        <p className="text-base leading-relaxed">
          I'm currently exploring the intersection of AI and software engineering, 
          particularly how large language models can enhance developer productivity. 
          When I'm not coding, you can find me exploring the beautiful Bay Area, 
          working on side projects, or diving deep into the latest tech trends.
        </p>

        {/* Connect Section */}
        <h2 className="text-xl font-semibold pt-4">Let's Connect</h2>
        <p className="text-base leading-relaxed">
          I'm always interested in connecting with fellow developers, discussing new 
          technologies, or exploring collaboration opportunities. Feel free to reach 
          out on{" "}
          <Link 
            href="https://linkedin.com/in/sameerkhansf" 
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </Link>
          {" "}or check out my work on{" "}
          <Link 
            href="https://github.com/sameerkhansf" 
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
