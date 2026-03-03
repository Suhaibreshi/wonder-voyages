import { motion } from "framer-motion";
import {
  Compass,
  Palmtree,
  Landmark,
  TrainFront,
  Ship,
  UtensilsCrossed,
  Snowflake,
  Heart,
} from "lucide-react";

const categories = [
  { icon: Compass, label: "Private Safaris" },
  { icon: Palmtree, label: "Island Retreats" },
  { icon: Landmark, label: "Cultural Immersions" },
  { icon: TrainFront, label: "Luxury Rail Journeys" },
  { icon: Ship, label: "Yacht Charters" },
  { icon: UtensilsCrossed, label: "Culinary Tours" },
  { icon: Snowflake, label: "Winter Escapes" },
  { icon: Heart, label: "Romantic Honeymoons" },
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-24 md:py-32 emerald-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Curated Categories
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-4">
            Experiences Beyond Compare
          </h2>
          <p className="text-ivory/50 font-sans max-w-xl mx-auto">
            From sun-drenched shores to snow-capped peaks, discover the world through our lens of luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group cursor-pointer flex flex-col items-center gap-4 p-6 md:p-8 rounded-xl border border-ivory/10 bg-ivory/5 backdrop-blur-sm hover:border-gold/30 transition-all duration-300"
            >
              <cat.icon
                size={32}
                className="text-gold/70 group-hover:text-gold transition-colors duration-300"
              />
              <span className="text-ivory/70 group-hover:text-ivory font-sans text-sm text-center tracking-wide transition-colors duration-300">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
