import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import destItaly from "@/assets/dest-italy.jpg";
import destKyoto from "@/assets/dest-kyoto.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destTanzania from "@/assets/dest-tanzania.jpg";
import destFrance from "@/assets/dest-france.jpg";
import destSwiss from "@/assets/dest-swiss.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destPeru from "@/assets/dest-peru.jpg";

const destinations = [
  {
    name: "Italian Riviera Escape",
    flag: "🇮🇹",
    image: destItaly,
    description: "Sun-kissed coastlines where la dolce vita meets timeless elegance.",
    price: "From $4,900",
    duration: "8 Days",
  },
  {
    name: "Kyoto Cultural Immersion",
    flag: "🇯🇵",
    image: destKyoto,
    description: "Ancient temples, whispered gardens, and the soul of Japan.",
    price: "From $5,200",
    duration: "10 Days",
  },
  {
    name: "Maldives Private Island",
    flag: "🇲🇻",
    image: destMaldives,
    description: "Your own slice of paradise, floating above crystalline waters.",
    price: "From $7,800",
    duration: "7 Days",
  },
  {
    name: "Tanzania Safari",
    flag: "🇹🇿",
    image: destTanzania,
    description: "Where the wild roams free beneath golden African skies.",
    price: "From $6,500",
    duration: "9 Days",
  },
  {
    name: "South of France Yacht",
    flag: "🇫🇷",
    image: destFrance,
    description: "Sapphire seas and champagne sunsets along the Côte d'Azur.",
    price: "From $8,900",
    duration: "7 Days",
  },
  {
    name: "Swiss Alps Chalet",
    flag: "🇨🇭",
    image: destSwiss,
    description: "Mountain grandeur wrapped in fireside warmth and silence.",
    price: "From $5,600",
    duration: "8 Days",
  },
  {
    name: "Dubai Desert Experience",
    flag: "🇦🇪",
    image: destDubai,
    description: "Golden dunes, starlit camps, and platinum luxury.",
    price: "From $4,900",
    duration: "7 Days",
  },
  {
    name: "Machu Picchu Expedition",
    flag: "🇵🇪",
    image: destPeru,
    description: "Walk with the ancients above the clouds of Peru.",
    price: "From $5,400",
    duration: "12 Days",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Signature Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Extraordinary Destinations
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Each journey is a masterpiece — meticulously curated, deeply personal, and utterly unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg luxury-shadow">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-gold/80 font-sans text-xs tracking-widest uppercase mb-1">
                    {dest.flag} {dest.duration}
                  </p>
                  <h3 className="text-ivory font-serif text-xl mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-ivory/60 font-sans text-sm mb-3 leading-relaxed">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-serif text-lg font-semibold">
                      {dest.price}
                    </span>
                    <span className="text-ivory/40 group-hover:text-gold transition-colors duration-300 flex items-center gap-1 text-xs font-sans tracking-wider uppercase">
                      View <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
