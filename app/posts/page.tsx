const posts = [
  {
    title: "Lighting the Intimate Frame",
    date: "Jan 2025",
    tag: "Cinematography",
    excerpt:
      "How we use practicals and soft sources to keep performances natural while preserving the cinematic glow.",
  },
  {
    title: "From Script to Slate",
    date: "Dec 2024",
    tag: "Development",
    excerpt:
      "Our development process focuses on character clarity, director vision, and purposeful pacing.",
  },
  {
    title: "Sound That Breathes",
    date: "Nov 2024",
    tag: "Post",
    excerpt:
      "Designing immersive soundscapes that feel intimate without losing scale.",
  },
  {
    title: "Designing the World",
    date: "Oct 2024",
    tag: "Production Design",
    excerpt:
      "Crafting sets and textures that hold the emotional temperature of the story.",
  },
  {
    title: "A Producer's Toolkit",
    date: "Sep 2024",
    tag: "Production",
    excerpt:
      "Our production playbook for lean crews, precise scheduling, and creative agility.",
  },
  {
    title: "Color as Story",
    date: "Aug 2024",
    tag: "Finishing",
    excerpt:
      "How we build tonal palettes that evolve with the emotional arc.",
  },
];

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-[#f6f0e7] font-sans text-[#1d1917]">
      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a5f56]">
            Studio Journal
          </p>
          <h1 className="font-[var(--font-display)] text-4xl text-[#1d1917] sm:text-5xl">
            Behind the scenes of our productions.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#4c433c] sm:text-base">
            A collection of insights on filmmaking, production craft, and the
            creative choices that shape each project at Aarohan Studio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-[28px] border border-[#3c342f]/15 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(29,25,23,0.12)]"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-[#6a5f56]">
                <span>{post.tag}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="mt-4 font-[var(--font-display)] text-2xl text-[#1d1917]">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4c433c]">
                {post.excerpt}
              </p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#3c342f]">
                Read More
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
