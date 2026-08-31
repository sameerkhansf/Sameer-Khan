import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { identity, summary, experience, education } from "@/lib/resume";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="mx-auto max-w-2xl px-6 py-10 sm:py-14">
      <nav className="mb-14 flex items-baseline justify-between">
        <span className="meta">samkhan.net</span>
        <div className="flex items-center gap-5">
          <Link href="/blog/" className="meta link-quiet">
            Blog
          </Link>
          <Link href="/resume/" className="meta link-quiet">
            Résumé
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{identity.name}</h1>
        <p className="mt-1 text-lg italic text-muted-foreground">
          {identity.title}
        </p>
        <p className="meta mt-4">
          {identity.location}
          <span className="mx-2 select-none">|</span>
          <a href={`mailto:${identity.email}`} className="link-quiet">
            {identity.email}
          </a>
          <span className="mx-2 select-none">|</span>
          <a href={identity.linkedin} className="link-quiet">
            LinkedIn
          </a>
          <span className="mx-2 select-none">|</span>
          <a href={identity.github} className="link-quiet">
            GitHub
          </a>
        </p>
      </header>

      <main id="main-content" className="space-y-10">
        <p className="leading-relaxed">{summary}</p>

        <section aria-labelledby="experience">
          <h2 id="experience" className="section-title">
            Experience
          </h2>
          <ul className="space-y-2.5">
            {experience.map((job) => (
              <li key={job.org} className="entry-row">
                <span>
                  <span className="font-bold">{job.title}</span>, {job.org}
                </span>
                <span className="meta shrink-0">{job.period}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/resume/" className="meta link-quiet">
              Full résumé →
            </Link>
          </p>
        </section>

        <section aria-labelledby="education">
          <h2 id="education" className="section-title">
            Education
          </h2>
          <ul className="space-y-2.5">
            {education.map((e) => (
              <li key={e.school} className="entry-row">
                <span>
                  <span className="font-bold">{e.degree}</span>, {e.school}
                </span>
                <span className="meta shrink-0">{e.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="writing">
          <h2 id="writing" className="section-title">
            Writing
          </h2>
          <ul className="space-y-2.5">
            {posts.map((post) => (
              <li key={post.slug} className="entry-row">
                <Link href={`/blog/${post.slug}/`} className="link-quiet">
                  {post.title}
                </Link>
                <time dateTime={post.date} className="meta shrink-0">
                  {post.date}
                </time>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href="/blog/" className="meta link-quiet">
              All posts →
            </Link>
          </p>
        </section>
      </main>

      <footer className="mt-14 border-t pt-6">
        <p className="meta">
          © {new Date().getFullYear()} {identity.name}
          <span className="mx-2 select-none">|</span>
          <a href={identity.twitter} className="link-quiet">
            @sameerkhan_sf
          </a>
        </p>
      </footer>
    </div>
  );
}
