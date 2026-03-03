import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#social-proof" },
  { label: "Concierge", href: "#concierge" },
];

const LuxuryNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-emerald-deep/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wide text-ivory">
            Tour De <span className="text-gold-shimmer">Wonder</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ivory/80 hover:text-gold text-sm font-sans tracking-widest uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#concierge"
            className="ml-4 px-6 py-2.5 border border-gold/40 text-gold text-sm font-sans tracking-widest uppercase hover:bg-gold hover:text-emerald-deep transition-all duration-300"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ivory"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-emerald-deep/98 backdrop-blur-lg border-t border-gold/10"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-ivory/80 hover:text-gold text-sm font-sans tracking-widest uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#concierge"
                onClick={() => setMobileOpen(false)}
                className="px-8 py-3 border border-gold/40 text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-emerald-deep transition-all"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default LuxuryNav;
