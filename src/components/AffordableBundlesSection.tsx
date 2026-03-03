import { motion } from "framer-motion";
import img1 from "@/assets/kashmir-pahalgam.jpg";
import img2 from "@/assets/kashmir-srinagar.jpg";
import img3 from "@/assets/kashmir-gulmarg.jpg";

const bundles = [
  { title: "The Green Paradise", duration: "5N, 6D", location: "Kashmir", image: img1 },
  { title: "Paradise Kashmir", duration: "6N, 7D", location: "Kashmir", image: img2 },
  { title: "Glimpses of Kashmir", duration: "5N, 6D", location: "Kashmir", image: img3 },
];

const AffordableBundlesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title">Tour Package</p>
          <h2 className="section-heading">Affordable Vacation Bundles</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="package-card"
            >
              <div className="relative overflow-hidden">
                <img src={b.image} alt={b.title} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-lg">
                  {b.duration}
                </span>
                <span className="absolute top-3 right-3 bg-card/90 text-foreground text-xs px-3 py-1 rounded-lg">
                  {b.location}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold mb-4">{b.title}</h3>
                <a href="#" className="btn-primary text-xs w-full block text-center">Book A Trip</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffordableBundlesSection;
