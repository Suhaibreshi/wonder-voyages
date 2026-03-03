import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Victoria Harrington",
    title: "Art Director, London",
    text: "Tour De Wonder transformed our anniversary into a story we'll tell for a lifetime. Every detail was poetry.",
    rating: 5,
  },
  {
    name: "James & Elena Park",
    title: "Entrepreneurs, Singapore",
    text: "The Maldives villa was beyond imagination. Their concierge anticipated our every desire before we even thought of it.",
    rating: 5,
  },
  {
    name: "Dr. Alessandro Rossi",
    title: "Surgeon, Milan",
    text: "The Tanzania safari was cinematic. Private camps, gourmet bush dining, and encounters with nature that felt sacred.",
    rating: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section id="social-proof" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Voices of Wonder
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-gold fill-gold" />
            ))}
            <span className="text-foreground font-serif text-xl ml-2 font-semibold">
              4.9
            </span>
            <span className="text-muted-foreground font-sans text-sm ml-1">
              Average Rating
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 rounded-xl border border-border bg-card luxury-shadow"
            >
              <Quote size={28} className="text-gold/30 mb-4" />
              <p className="text-foreground/80 font-sans leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-serif text-foreground font-semibold">{t.name}</p>
              <p className="text-muted-foreground font-sans text-sm">{t.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground font-sans text-xs tracking-[0.3em] uppercase mb-8">
            Trusted by leading luxury brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["Four Seasons", "Aman", "Belmond", "Ritz-Carlton", "Mandarin Oriental"].map((brand) => (
              <span key={brand} className="font-serif text-lg text-foreground tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
