import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/kashmir-srinagar.jpg";
import img2 from "@/assets/kashmir-gulmarg.jpg";
import img3 from "@/assets/kashmir-sonamarg.jpg";

const tourPackages = [
  { title: "Amazing Kashmir", duration: "4N, 5D", location: "Kashmir", image: img1 },
  { title: "Glimpses of Kashmir", duration: "5N, 6D", location: "Kashmir", image: img2 },
  { title: "Himalayan Odyssey", duration: "9N, 10D", location: "Kashmir", image: img3 },
];

const hotels = [
  { title: "Hotel Royal Hillton", location: "Srinagar", image: img1 },
  { title: "Hotel Asian Park", location: "Pahalgam", image: img2 },
  { title: "The Khyber Resort", location: "Gulmarg", image: img3 },
];

const FeaturedExperiences = () => {
  const [activeTab, setActiveTab] = useState("Tour Package");

  const items = activeTab === "Tour Package" ? tourPackages : hotels;

  return (
    <section className="section-padding bg-beige-warm">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title">Featured Experiences</p>
          <h2 className="section-heading">Tours & Stays Made Easy</h2>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          {["Tour Package", "Hotel"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl font-sans text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="package-card"
            >
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                {"duration" in item && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-lg">
                    {(item as typeof tourPackages[number]).duration}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-card/90 text-foreground text-xs px-3 py-1 rounded-lg">
                  {item.location}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold mb-4">{item.title}</h3>
                <a href="#" className="btn-primary text-xs w-full block text-center">
                  {"duration" in item ? "Book A Trip" : "Book Now"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
