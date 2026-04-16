export default function WyldsResumeSite() {
  const skills = [
    "AWS",
    "CI/CD",
    "Python",
    "PowerShell",
    "Bash",
    "TypeScript",
    "Networking",
    "IAM",
    "EC2",
    "Lambda",
    "S3",
    "VPC",
    "Git",
  ];

  const experience = [
    {
      role: "Cloud / DevOps Engineer",
      company: "Cloud Environment",
      period: "Present",
      points: [
        "Identifies and resolves long-standing system issues impacting reliability and performance.",
        "Builds and improves CI/CD pipelines and deployment workflows.",
        "Owns multiple concurrent efforts and drives them to completion.",
      ],
    },
    {
      role: "Technical Lead / Instructor",
      company: "Training Environment",
      period: "Previous",
      points: [
        "Built and delivered technical training across systems, networking, and scripting.",
        "Developed hands-on labs focused on real-world infrastructure concepts.",
        "Mentored teams through complex technical problems.",
      ],
    },
    {
      role: "Cyber / Systems Engineer",
      company: "Research Environment",
      period: "Previous",
      points: [
        "Worked on system configuration, automation, and secure infrastructure setups.",
        "Built and supported isolated lab environments for testing and validation.",
      ],
    },
  ];

  const projects = [
    {
      name: "SSO SAML Inspector",
      problem: "Debugging SAML is opaque and error-prone, especially when issuer, audience, attributes, or time-based conditions do not match expected values.",
      built: "A Tampermonkey userscript that captures SAML responses in the browser, decodes and parses them, and surfaces the fields that matter most during troubleshooting.",
      impact: "Makes it faster to diagnose SSO issues and validate assertions without bouncing between browser tools and manual decoding steps.",
      tech: ["JavaScript", "Tampermonkey", "Request interception", "Base64 decoding", "XML parsing"],
      linkLabel: "View Code",
      link: "https://github.com/nwylds",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-16">
        <header className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">wylds.dev</p>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Nick</h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
                  Cloud Engineer II at AWS working on reliability and CI/CD for production systems.
                </p>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-zinc-300 md:text-right">
              <a href="mailto:nick@wylds.dev" className="transition hover:text-white">nick@wylds.dev</a>
              <a href="https://www.linkedin.com/in/nickwylds/" className="transition hover:text-white">LinkedIn</a>
              <a href="https://github.com/nwylds" className="transition hover:text-white">GitHub</a>
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-3xl border border-white/10 bg-zinc-900/70 p-7 shadow-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">What I Do</p>
          <ul className="space-y-3 text-zinc-300">
            <li><span className="font-medium text-white">Solve:</span> long-standing system and reliability issues</li>
            <li><span className="font-medium text-white">Build:</span> CI/CD pipelines and deployment workflows</li>
            <li><span className="font-medium text-white">Automate:</span> repetitive operational work</li>
            <li><span className="font-medium text-white">Own:</span> projects end-to-end and push them to completion</li>
            <li><span className="font-medium text-white">Span:</span> infrastructure, scripting, and deployment systems</li>
          </ul>
        </section>

        <section className="mb-8 rounded-3xl border border-white/10 bg-zinc-900/70 p-7 shadow-xl">
          <div className="mb-5">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Experience</p>
            <h2 className="text-2xl font-semibold tracking-tight">Work</h2>
          </div>

          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20">
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-white">{item.role}</h3>
                    <p className="text-zinc-400">{item.company}</p>
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">{item.period}</p>
                </div>
                <ul className="space-y-3 text-zinc-300">
                  {item.points.map((point) => (
                    <li key={point} className="leading-7">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-7 shadow-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">Technologies</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-white/20" 
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-7 shadow-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">Projects</p>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-medium text-white">{project.name}</h3>
                    <a href={project.link} className="text-sm text-zinc-300 transition hover:text-white">
                      {project.linkLabel}
                    </a>
                  </div>

                  <div className="space-y-4 text-zinc-300">
                    <div>
                      <div className="mb-1 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Problem</div>
                      <p className="leading-7">{project.problem}</p>
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">What I built</div>
                      <p className="leading-7">{project.built}</p>
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Why it matters</div>
                      <p className="leading-7">{project.impact}</p>
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Tech</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs text-zinc-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-8 border-t border-white/10 pt-6 text-sm text-zinc-400 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>nick@wylds.dev</div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/nickwylds/" className="hover:text-white">LinkedIn</a>
            <a href="https://github.com/nwylds" className="hover:text-white">GitHub</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
