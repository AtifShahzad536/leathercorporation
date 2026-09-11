import { useState, useRef } from "react";

const blogs = [
  {
    id: 1,
    tag: "HERITAGE",
    title: "Full-Grain vs Top-Grain: The Leather Jacket Buyer's Master Guide",
    excerpt:
      "Discover why premium grain selection dictates how your leather jacket breaks in, breathes, and develops a rich vintage patina over decades.",
    date: "May 14, 2025",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
  },
  {
    id: 2,
    tag: "INNOVATION",
    title: "Eco-Friendly Vegetable Tanning in Modern Outerwear Production",
    excerpt:
      "How Leader Corporation is advancing sustainable leathercraft with zero-chrome vegetable tanning, organic oils, and circular water recycling.",
    date: "Apr 28, 2025",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80",
  },
  {
    id: 3,
    tag: "CRAFTSMANSHIP",
    title: "Engineering Biker Jackets with CE-Armor Impact Protection",
    excerpt:
      "An insider look into our custom atelier where motorcycle passion meets rigorous road safety standards and hand-stitched luxury.",
    date: "Mar 10, 2025",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
  },
];

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 flex-shrink-0">
      <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BlogCard({ blog }) {
  return (
    <article className="group border-b border-[var(--secondary)]/10 overflow-hidden cursor-pointer hover:bg-[var(--secondary)]/5 transition-colors duration-200 bg-white h-full">
      <div className="w-full h-[200px] bg-gray-100 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
      <div className="p-4 md:p-5">
        <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
          {blog.tag}
        </span>
        <h3 className="text-[15px] font-bold text-[var(--secondary)] leading-snug mb-3">
          {blog.title}
        </h3>
        <p className="text-[13px] text-[var(--secondary)]/60 leading-relaxed mb-4">
          {blog.excerpt}
        </p>
        <div className="flex items-center gap-1.5 text-[12px] text-[var(--secondary)]/50">
          <CalendarIcon />
          <span>{blog.date}</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setCurrent((c) => (c === 0 ? blogs.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === blogs.length - 1 ? 0 : c + 1));

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-[var(--primary)] py-[5%] px-[5%]">
      <div className="w-full">

       

        {/* MOBILE: 1-card swipeable slider */}
        <div className="block md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {blogs.map((blog) => (
                <div key={blog.id} className="w-full flex-shrink-0">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrows + dots */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prev}
              className="w-8 h-8 rounded-full border border-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)]/60 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-2">
              {blogs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${i === current ? "w-4 h-2 bg-[var(--accent)]" : "w-2 h-2 bg-[var(--secondary)]/20"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-8 h-8 rounded-full border border-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)]/60 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* DESKTOP: 3-col grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[2.5%]">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
}