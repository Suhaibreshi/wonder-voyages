import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ConciergeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Thank you! A Travel Curator will contact you shortly.");
    setFormData({ name: "", email: "", destination: "" });
  };

  return (
    <section id="concierge" className="py-24 md:py-32 emerald-gradient relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Personal Concierge
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-ivory mb-4">
            Let Us Design Something{" "}
            <em className="text-gold-shimmer">Extraordinary</em>
          </h2>
          <p className="text-ivory/50 font-sans mb-12">
            Share your vision and our dedicated Travel Curators will craft a bespoke journey, tailored exclusively for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 bg-ivory/5 border border-ivory/15 text-ivory placeholder:text-ivory/30 font-sans text-sm tracking-wide rounded-lg focus:outline-none focus:border-gold/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 bg-ivory/5 border border-ivory/15 text-ivory placeholder:text-ivory/30 font-sans text-sm tracking-wide rounded-lg focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Dream Destination or Experience"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full px-5 py-4 bg-ivory/5 border border-ivory/15 text-ivory placeholder:text-ivory/30 font-sans text-sm tracking-wide rounded-lg focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 gold-gradient text-emerald-deep font-sans text-sm tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3 mx-auto rounded-lg"
            >
              Speak to a Travel Curator
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConciergeSection;
