import { useState, useRef } from "react";

const blogs = [
  {
    id: 1,
    tag: "BUYER'S GUIDE",
    title: "Sublimation vs Tackle Twill: Which Is Right for Your Team?",
    excerpt:
      "A complete breakdown of molecular dye-sublimation vs authentic collegiate tackle twill lettering, weights, wash durability, and costs per player.",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=600&q=80",
  },
  {
    id: 2,
    tag: "TEAM PRICING",
    title: "How Much Do Custom Team Uniforms Really Cost in 2026?",
    excerpt:
      "Understand factory-direct volume tier pricing, setup charges, hidden middleman markups, and how DDP shipping keeps team costs predictable.",
    date: "Feb 02, 2026",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
  },
  {
    id: 3,
    tag: "COACHES CORNER",
    title: "How to Measure Players & Avoid Costly Uniform Sizing Errors",
    excerpt:
      "Essential sizing tips for youth, high school varsity, and adult club rosters to ensure zero fit errors before factory production commences.",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
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
    <article className="group border border-[var(--secondary)]/10 overflow-hidden cursor-pointer hover:border-[var(--accent)]/50 transition-all duration-300 bg-white h-full flex flex-col justify-between shadow-xs rounded-[3px]">
      <div>
        <div className="w-full h-[200px] bg-gray-100 overflow-hidden relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div className="absolute top-2 left-2 bg-[var(--secondary)] text-white text-[8px] font-bold uppercase px-2 py-0.5 rounded-[3px]">
            {blog.tag}
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-[15px] font-black text-[var(--secondary)] group-hover:text-[var(--accent)] transition-colors leading-snug mb-2">
            {blog.title}
          </h3>
          <p className="text-[12px] text-[var(--secondary)]/70 leading-relaxed font-light line-clamp-3">
            {blog.excerpt}
          </p>
        </div>
      </div>
      <div className="p-4 pt-0 flex items-center gap-2 text-[11px] text-[var(--secondary)]/50 border-t border-[var(--secondary)]/10 mt-3 pt-3">
        <CalendarIcon />
        <span>{blog.date}</span>
      </div>
    </article>
  );
}

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);

  return (
    <section className="w-full bg-[var(--primary)] py-14 sm:py-20 border-b border-[var(--secondary)]/10">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            TEAM APPAREL GUIDES & INSIGHTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)] mt-1 tracking-tight">
            UNIFORM ADVICE FOR COACHES & CLUBS
          </h2>
          <p className="text-xs sm:text-sm text-[var(--secondary)]/60 max-w-lg mx-auto mt-2">
            Real production guidelines, fabric weights, NFHS regulations, and factory ordering tips from HAMLO SPORTS engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
