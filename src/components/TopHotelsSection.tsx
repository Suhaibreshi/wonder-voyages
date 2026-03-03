import { motion } from "framer-motion";
import img1 from "@/assets/kashmir-srinagar.jpg";
import img2 from "@/assets/kashmir-pahalgam.jpg";
import img3 from "@/assets/kashmir-gulmarg.jpg";
import img4 from "@/assets/kashmir-sonamarg.jpg";
import img5 from "@/assets/kashmir-sunset.jpg";
import img6 from "@/assets/kashmir-tulips.jpg";

const hotels = [
  { name: "Hotel Royal Hillton", image: img1 },
  { name: "Hotel Asian Park", image: img2 },
  { name: "Hotel Pine and Peak", image: img3 },
  { name: "The Khyber Himalayan Resort", image: img4 },
  { name: "Hotel Fortune Resort", image: img5 },
  { name: "Hotel Glacier Heights", image: img6 },
];

const TopHotelsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading">Kashmir's Top Hotels</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="package-card"
            >
              <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold mb-3">{hotel.name}</h3>
                <a href="#" className="btn-primary text-xs w-full block text-center">Book Now</a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-outline-primary inline-block">View All Hotels</a>
        </div>
      </div>
    </section>
  );
};

export default TopHotelsSection;
