import {
  identity,
  summary,
  experience,
  research,
  education,
  skills,
} from "@/lib/resume";

// The résumé itself — identity through skills. Rendered by the homepage
// (with nav/writing around it) and by /resume (print view).
export default function ResumeBody() {
  return (
    <>
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

      <div className="space-y-10">
        <p className="leading-relaxed">{summary}</p>

        <section aria-labelledby="experience">
          <h2 id="experience" className="section-title">
            Experience
          </h2>
          <div className="space-y-7">
            {experience.map((job) => (
              <article key={job.org}>
                <div className="entry-row">
                  <h3 className="font-bold">
                    {job.title}, <span className="font-normal">{job.org}</span>
                  </h3>
                  <p className="meta shrink-0">{job.period}</p>
                </div>
                <p className="meta">{job.location}</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="research">
          <h2 id="research" className="section-title">
            Selected Research
          </h2>
          {research.map((r) => (
            <article key={r.title}>
              <h3 className="font-bold">
                {r.title}
                <span className="font-normal">, {r.org}</span>
              </h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed">
                {r.bullets.map((b) => (
                  <li key={b.slice(0, 40)}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="education">
          <h2 id="education" className="section-title">
            Education
          </h2>
          <div className="space-y-5">
            {education.map((e) => (
              <article key={e.school}>
                <div className="entry-row">
                  <h3 className="font-bold">
                    {e.school}, <span className="font-normal">{e.degree}</span>
                  </h3>
                  <p className="meta shrink-0">{e.period}</p>
                </div>
                {e.notes.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.95rem] leading-relaxed">
                    {e.notes.map((n) => (
                      <li key={n.slice(0, 40)}>{n}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills">
          <h2 id="skills" className="section-title">
            Technical Skills
          </h2>
          <dl className="space-y-2 text-[0.95rem] leading-relaxed">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="inline font-bold">{s.group}: </dt>
                <dd className="inline">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </>
  );
}
