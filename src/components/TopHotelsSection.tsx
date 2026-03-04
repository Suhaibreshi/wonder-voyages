import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const hotels = [
  { name: "Hotel Royal Hillton", image: "/hotels/Hotel Royal Hillton.png" },
  { name: "Hotel Pine and Peak", image: "/hotels/Hotel Pine and Peak.png" },
  { name: "The Khyber Himalayan Resort", image: "/hotels/The Khyber Himalayan Resort.jpg" },
  { name: "Hotel Fortune Resort", image: "/hotels/Hotel Fortune Resort.jpg" },
  { name: "Hotel Glacier Heights", image: "/hotels/Hotel Glacier Heights.jpg" },
  { name: "Hotel Asian Park", image: "/hotels/front-facade.jpg" },
];

const TopHotelsSection = () => {
  return (
    <section id="hotels" className="section-padding bg-background">
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
                <Link to="/booking" className="btn-primary text-xs w-full block text-center">Book Now</Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/booking" className="btn-outline-primary inline-block">View All Hotels</Link>
        </div>
      </div>
    </section>
  );
};

export default TopHotelsSection;
