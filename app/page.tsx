import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "The Quiet Bloom",
      type: "Feature Film",
      year: "2024",
      note: "A coming-of-age story set against monsoon-soaked tea estates.",
    },
    {
      title: "Neon River",
      type: "Series",
      year: "2023",
      note: "A crime saga that floats between Lalitpur's docklands and myth.",
    },
    {
      title: "Fever Glass",
      type: "Short Film",
      year: "2024",
      note: "A lyrical thriller told through fractured reflections.",
    },
  ];

  const services = [
    {
      title: "Development",
      detail: "Script labs, story consulting, casting, and financing packages.",
    },
    {
      title: "Production",
      detail: "Boutique crews, premium equipment, and precise on-set workflows.",
    },
    {
      title: "Post",
      detail:
        "Editorial, color, sound, and VFX with a director-led finishing team.",
    },
  ];

  const stats = [
    { label: "Originals in development", value: "18" },
    { label: "Days on set last year", value: "142" },
    { label: "Awards & festival selections", value: "36" },
  ];

  const testimonials = [
    {
      quote:
        "They fuse indie sensitivity with studio-grade precision. Every frame is intentional.",
      name: "Meera Joshi",
      role: "Director, The Quiet Bloom",
    },
    {
      quote:
        "Our co-production felt intimate, fast, and fearless. They never lose the story.",
      name: "Kabir Alvi",
      role: "Showrunner, Neon River",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f0e7] font-sans text-[#1d1917]">
      <div className="relative overflow-hidden">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#d6c4b6]/70 blur-3xl animate-[pulse-soft_8s_ease-in-out_infinite]" />
        <div className="absolute left-0 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#f1d3a6]/80 blur-[120px] animate-[float-slow_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-[#c2b0a1]/70 blur-[140px]" />

        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#3c342f]/30 bg-white/80">
              <Image
                src="/logo.jpeg"
                alt="Aarohan Studio logo"
                width={44}
                height={44}
                className="h-10 w-10 object-cover"
                priority
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold uppercase tracking-[0.35em] text-[#3c342f]">
                Aarohan Studio
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#6a5f56]">
                Lalitpur • Nepal
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3c342f] md:flex">
            <a className="transition hover:text-black" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-black" href="#services">
              Services
            </a>
            <a className="transition hover:text-black" href="#process">
              Process
            </a>
            <a className="transition hover:text-black" href="#contact">
              Contact
            </a>
          </nav>
          <button className="rounded-full border border-[#3c342f]/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#3c342f] transition hover:border-[#3c342f]">
            Book a Call
          </button>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-14 md:pt-20">
          <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <div
                className="inline-flex items-center gap-3 rounded-full border border-[#3c342f]/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#3c342f] shadow-sm backdrop-blur animate-[fade-up_0.8s_ease-out_both]"
                style={{ animationDelay: "0.1s" }}
              >
                Lalitpur • Nepal
              </div>
              <h1
                className="font-[var(--font-display)] text-4xl font-semibold leading-tight tracking-tight text-[#1b1714] sm:text-5xl lg:text-6xl animate-[fade-up_0.9s_ease-out_both]"
                style={{ animationDelay: "0.2s" }}
              >
                Crafting cinematic worlds with bold stories, luminous frames, and
                fearless collaborators.
              </h1>
              <p
                className="max-w-xl text-base leading-relaxed text-[#4c433c] sm:text-lg animate-[fade-up_0.9s_ease-out_both]"
                style={{ animationDelay: "0.3s" }}
              >
                We are a production studio partnering with visionary directors
                and streaming leaders to deliver films, series, and branded
                narratives that linger long after the credits roll.
              </p>
              <div
                className="flex flex-wrap items-center gap-4 animate-[fade-up_0.9s_ease-out_both]"
                style={{ animationDelay: "0.4s" }}
              >
                <button className="rounded-full bg-[#1d1917] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f0e7] transition hover:-translate-y-0.5 hover:bg-black">
                  View Showreel
                </button>
                <button className="rounded-full border border-[#3c342f]/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#3c342f] transition hover:border-[#1d1917] hover:text-[#1d1917]">
                  Our Slate
                </button>
              </div>
              <div
                className="grid gap-6 sm:grid-cols-3 animate-[fade-up_0.9s_ease-out_both]"
                style={{ animationDelay: "0.5s" }}
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-[#1d1917]">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#6a5f56]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 -top-6 h-20 w-20 rounded-full border border-[#3c342f]/30" />
              <div className="absolute -bottom-6 right-6 h-24 w-24 rounded-full border border-[#3c342f]/20" />
              <div className="rounded-[32px] border border-[#3c342f]/20 bg-white/70 p-6 shadow-[0_30px_80px_rgba(29,25,23,0.18)] backdrop-blur">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-[#5f554c]">
                  <span>Showreel 2024</span>
                  <span>02:10</span>
                </div>
                <div className="mt-4 flex h-72 flex-col justify-between rounded-[24px] bg-[linear-gradient(140deg,#1d1917,#513f33,#8a6f52)] p-6 text-[#f6f0e7]">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#f6f0e7]/70">
                        Featured
                      </p>
                      <p className="font-[var(--font-display)] text-2xl">
                        A Season of Fireflies
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-lg">
                      ▶
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#f6f0e7]/70">
                    <span>Shot on Arricam</span>
                    <span>Dolby Atmos</span>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-[#3c342f]">
                  <div className="flex items-center justify-between">
                    <span>Director-led production</span>
                    <span className="text-xs uppercase tracking-[0.2em]">
                      On Call
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Global co-production partners</span>
                    <span className="text-xs uppercase tracking-[0.2em]">
                      14+
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
                About Us
              </p>
              <h2 className="font-[var(--font-display)] text-3xl text-[#1d1917] sm:text-4xl">
                We build stories with craft, calm, and cinematic intent.
              </h2>
              <p className="text-sm leading-relaxed text-[#4c433c] sm:text-base">
                Aarohan Studio partners with directors, brands, and streaming
                teams to create films and series that feel intimate, textured,
                and unforgettable. We combine deep story development with a
                precise production approach, so every frame serves the emotion.
              </p>
            </div>
            <div className="rounded-[28px] border border-[#3c342f]/15 bg-white/70 p-6 text-[#3c342f] shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
                हाम्रो कथा
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4c433c] sm:text-base">
                श्री आरोहण स्टुडियो प्रा. लि. ले निर्देशक, ब्रान्ड र
                स्ट्रिमिङ टोलीहरूसँग मिलेर भावनात्मक, आधुनिक र सम्झनलायक कथा
                सिर्जना गर्छ। हामी कथा विकासदेखि प्रोडक्शन र फिनिसिङसम्म
                स्पष्ट योजना र दक्ष कार्यप्रवाह अपनाउँछौं, ताकि प्रत्येक फ्रेमले
                कथाको मनोभाव बोलोस्।
              </p>
            </div>
          </section>

          <section id="projects" className="space-y-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
                  Selected Work
                </p>
                <h2 className="font-[var(--font-display)] text-3xl text-[#1d1917] sm:text-4xl">
                  Stories with an afterglow.
                </h2>
              </div>
              <button className="rounded-full border border-[#3c342f]/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#3c342f] transition hover:border-[#1d1917]">
                Full Portfolio
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-[28px] border border-[#3c342f]/15 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(29,25,23,0.14)]"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f0d7b8]/70 blur-3xl transition group-hover:opacity-80" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-[#6a5f56]">
                      <span>{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-[var(--font-display)] text-2xl text-[#1d1917]">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4c433c]">
                      {project.note}
                    </p>
                    <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#3c342f]">
                      View Case Study
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="services"
            className="grid gap-10 rounded-[36px] border border-[#3c342f]/15 bg-[#f9f4ed] p-10 shadow-[0_20px_60px_rgba(29,25,23,0.08)] md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
                Studio Services
              </p>
              <h2 className="font-[var(--font-display)] text-3xl text-[#1d1917] sm:text-4xl">
                From first draft to final grade, under one roof.
              </h2>
              <p className="text-sm leading-relaxed text-[#4c433c] sm:text-base">
                We tailor each collaboration with a mix of in-house talent and
                a trusted network of artisans across cinematography, design, and
                sound.
              </p>
              <button className="rounded-full bg-[#1d1917] px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f6f0e7]">
                Download Deck
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="rounded-[24px] border border-[#3c342f]/15 bg-white/70 p-6 text-[#3c342f] shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-[var(--font-display)] text-xl text-[#1d1917]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4c433c]">
                    {service.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="process" className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
                Our Process
              </p>
              <h2 className="font-[var(--font-display)] text-3xl text-[#1d1917] sm:text-4xl">
                A rhythm designed for storytellers.
              </h2>
              <p className="text-sm leading-relaxed text-[#4c433c] sm:text-base">
                Every project moves through a flexible three-act workflow that
                keeps the director at the center while our producers orchestrate
                the details.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Discovery",
                  detail:
                    "Immersion, story mapping, and crew pairing to establish the vision.",
                },
                {
                  title: "Production",
                  detail:
                    "Lean crews, cinematic capture, and a live post pipeline for speed.",
                },
                {
                  title: "Finishing",
                  detail:
                    "Color, mix, and delivery with festival-ready mastering.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-6 rounded-[24px] border border-[#3c342f]/15 bg-white/70 p-6 shadow-sm"
                >
                  <div className="text-2xl font-semibold text-[#1d1917]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-xl text-[#1d1917]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4c433c]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-[36px] border border-[#3c342f]/15 bg-[#1d1917] p-10 text-[#f6f0e7] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f6f0e7]/70">
                Collaborator Voices
              </p>
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl">
                Partners who speak cinema.
              </h2>
              <p className="text-sm leading-relaxed text-[#f6f0e7]/80 sm:text-base">
                We take on a small slate each year to give every story the focus
                and craft it deserves.
              </p>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="space-y-3">
                  <p className="text-sm leading-relaxed text-[#f6f0e7]/85">
                    “{testimonial.quote}”
                  </p>
                  <div className="text-xs uppercase tracking-[0.28em] text-[#f6f0e7]/70">
                    {testimonial.name} • {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-[#3c342f]/15 bg-white/70 p-8 backdrop-blur md:flex-row md:items-center"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
                Ready to create?
              </p>
              <h2 className="font-[var(--font-display)] text-3xl text-[#1d1917]">
                Let’s build your next world.
              </h2>
              <p className="text-sm text-[#4c433c]">
                श्री आरोहण स्टुडियो प्रा. लि. ललितपुर - २, ललितपुर
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.28em]">
              <button className="rounded-full bg-[#1d1917] px-6 py-3 text-[#f6f0e7]">
                Start a Project
              </button>
              <button className="rounded-full border border-[#3c342f]/30 px-6 py-3 text-[#3c342f]">
                hello@aarohanstudio.co
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
