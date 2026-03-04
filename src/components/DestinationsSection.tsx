import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import imgSrinagar from "@/assets/kashmir-srinagar.jpg";
import imgPahalgam from "@/assets/kashmir-pahalgam.jpg";
import imgGulmarg from "@/assets/kashmir-gulmarg.jpg";
import imgSonamarg from "@/assets/kashmir-sonamarg.jpg";
import imgSunset from "@/assets/kashmir-sunset.jpg";
import imgTulips from "@/assets/kashmir-tulips.jpg";
import imgLadakh from "@/assets/ladakh.jpg";
import imgLeh from "@/assets/leh.jpg";
import imgKargil from "@/assets/kargil.jpg";

const tabs = ["Kashmir", "Jammu", "Ladakh", "Leh"];

const kashmirPackages = [
  { title: "Honeymoon To Paradise Kashmir", duration: "5N, 6D", location: "Kashmir", image: imgSrinagar },
  { title: "Budget Houseboats", duration: "3N, 4D", location: "Kashmir", image: imgSunset },
  { title: "Scenic Kashmir", duration: "6N, 7D", location: "Kashmir", image: imgPahalgam },
  { title: "Exotic Kashmir", duration: "5N, 6D", location: "Kashmir", image: imgGulmarg },
  { title: "Kashmir Odyssey", duration: "7N, 8D", location: "Kashmir", image: imgSonamarg },
  { title: "Delightful Kashmir", duration: "4N, 5D", location: "Kashmir", image: imgTulips },
  { title: "The Green Paradise", duration: "5N, 6D", location: "Kashmir", image: imgPahalgam },
  { title: "Paradise Kashmir", duration: "6N, 7D", location: "Kashmir", image: imgSrinagar },
  { title: "Magical Kashmir", duration: "4N, 5D", location: "Kashmir", image: imgGulmarg },
];

const otherPackages = [
  { title: "Ladakh Explorer", duration: "7N, 8D", location: "Ladakh", image: imgLadakh },
  { title: "Leh Monastery Tour", duration: "5N, 6D", location: "Leh", image: imgLeh },
  { title: "Kargil Adventure", duration: "6N, 7D", location: "Kargil", image: imgKargil },
];

const DestinationsSection = () => {
  const [activeTab, setActiveTab] = useState("Kashmir");

  const packages = activeTab === "Kashmir" ? kashmirPackages : otherPackages;

  return (
    <section id="destinations" className="section-padding bg-beige-warm">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title">Step Into Paradise with Tour De WONDER</p>
          <h2 className="section-heading">Discover Kashmir with Tour De WONDER</h2>
        </div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl font-sans text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="package-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-sans font-semibold px-3 py-1 rounded-lg">
                  {pkg.duration}
                </span>
                <span className="absolute top-3 right-3 bg-card/90 text-foreground text-xs font-sans px-3 py-1 rounded-lg">
                  {pkg.location}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">{pkg.title}</h3>
                <Link to="/booking" className="btn-primary text-xs w-full block text-center">
                  Book A Trip
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/booking" className="btn-outline-primary inline-block">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
