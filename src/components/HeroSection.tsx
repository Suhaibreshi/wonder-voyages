import { motion } from "framer-motion";
import { MapPin, Star, Users, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Globe, value: "40+", label: "Countries" },
  { icon: Star, value: "120", label: "Curated Experiences" },
  { icon: Star, value: "5-Star", label: "Rated Worldwide" },
  { icon: Users, value: "10,000+", label: "Elite Travelers" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury yacht on turquoise waters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-6">
            Exclusive Experiential Travel
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory leading-tight mb-6"
        >
          Travel, <em className="text-gold-shimmer">Reimagined.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-ivory/70 font-sans text-lg md:text-xl tracking-wide mb-12"
        >
          Private. Curated. Extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#destinations"
            className="px-10 py-4 gold-gradient text-emerald-deep font-sans text-sm tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Destinations
          </a>
          <a
            href="#concierge"
            className="px-10 py-4 border border-ivory/30 text-ivory font-sans text-sm tracking-widest uppercase hover:bg-ivory/10 transition-all"
          >
            Design My Journey
          </a>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-lg p-5 bg-ivory/5 backdrop-blur-md border border-ivory/10"
            >
              <p className="text-gold font-serif text-2xl md:text-3xl font-bold mb-1">
                {stat.value}
              </p>
              <p className="text-ivory/60 font-sans text-xs tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
