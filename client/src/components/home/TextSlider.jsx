import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCMS } from '../../context/CMSContext';

const defaultSlides = [
  {
    quote: "UNIFORMS ENGINEERED FOR SPEED, STRENGTH, AND CHAMPIONSHIP RESILIENCE ON EVERY DIAMOND, COURT, AND PITCH",
    author: "HEAD OF ATHLETIC ENGINEERING, HAMLO SPORTS"
  },
  {
    quote: "MOLECULAR DYE-SUBLIMATION ENSURES NUMBERS, CRESTS, AND TEAM COLORS NEVER CRACK, PEEL, OR FADE OVER YEARS OF WASHING",
    author: "PRINT ATELIER DIRECTOR, HAMLO SPORTS"
  },
  {
    quote: "SIALKOT EXPORT CRAFTSMANSHIP DIRECT TO COACHES ACROSS THE USA AND WORLDWIDE — ELIMINATING MIDDLEMAN MARKUPS",
    author: "GLOBAL LOGISTICS DESK, HAMLO SPORTS"
  }
];

export default function TextSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { homeContent } = useCMS();

  const slides = (homeContent?.textSlider?.slides && homeContent.textSlider.slides.length > 0)
    ? homeContent.textSlider.slides
    : defaultSlides;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-[var(--primary)] py-16 sm:py-20 border-b border-[var(--secondary)]/10">
      <div className="w-[96%] max-w-[1800px] mx-auto">
        <div className="relative text-center">
          <div className="relative overflow-hidden h-48 flex items-center justify-center">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center px-4">
                  <p className="relative text-[var(--secondary)] font-black text-2xl md:text-3xl mb-4 px-6 md:px-24 text-center whitespace-normal leading-tight">
                    <span className="text-[var(--accent)]/20 text-5xl md:text-8xl font-serif absolute -top-6 md:-top-8 left-2 md:left-12 opacity-75">"</span>
                    <span className="text-base sm:text-xl md:text-2xl">{slide.quote}</span>
                    <span className="text-[var(--accent)]/20 text-5xl md:text-8xl font-serif absolute -bottom-10 right-2 md:right-12 opacity-75">"</span>
                  </p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                    {slide.author}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-[var(--secondary)]/20 text-[var(--secondary)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <FaChevronLeft size={12} />
            </button>

            <div className="flex items-center gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="p-2.5 flex items-center justify-center cursor-pointer min-w-[36px] min-h-[36px]"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all ${
                      currentSlide === index ? 'bg-[var(--accent)] w-6' : 'bg-[var(--secondary)]/35 w-2.5 hover:bg-[var(--secondary)]/60'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-[var(--secondary)]/20 text-[var(--secondary)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
