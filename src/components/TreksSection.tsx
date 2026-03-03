import { motion } from "framer-motion";
import imgTrek from "@/assets/trek-great-lakes.jpg";
import imgPahalgam from "@/assets/kashmir-pahalgam.jpg";
import imgSonamarg from "@/assets/kashmir-sonamarg.jpg";

const treks = [
  { title: "KASHMIR GREAT LAKES TREK", duration: "6N, 7D", image: imgTrek },
  { title: "GANGABAL NUNDKOL TREK", duration: "3N, 4D", image: imgPahalgam },
  { title: "VISHENSAR KISHENSAR LAKES TREK", duration: "4N, 5D", image: imgSonamarg },
  { title: "MT MAHADEV TREK", duration: "2N, 3D", image: imgTrek },
  { title: "Tulian Lake Trek", duration: "3N, 4D", image: imgPahalgam },
  { title: "LIDDERWATH TREK", duration: "2N, 3D", image: imgSonamarg },
];

const TreksSection = () => {
  return (
    <section id="treks" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title">Unveiling the Wonders with Our Expertly Crafted Trekking Packages</p>
          <h2 className="section-heading">Treks in Kashmir</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treks.map((trek, i) => (
            <motion.div
              key={trek.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="package-card"
            >
              <div className="relative overflow-hidden">
                <img src={trek.image} alt={trek.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-lg">
                  {trek.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold mb-4">{trek.title}</h3>
                <a href="#" className="btn-primary text-xs w-full block text-center">Book A Trip</a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-outline-primary inline-block">View All Treks »</a>
        </div>
      </div>
    </section>
  );
};

export default TreksSection;
