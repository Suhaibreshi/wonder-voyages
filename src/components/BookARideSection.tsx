import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car } from "lucide-react";

const vehicles = [
  { name: "Ertiga", seats: "7 Seater", price: "₹3,500/day", image: "/Car/Ertiga.jpg" },
  { name: "Desire", seats: "5 Seater", price: "₹2,500/day", image: "/Car/Desire.jpg" },
  { name: "Innova Crysta", seats: "7 Seater", price: "₹5,000/day", image: "/Car/Innova Crysta.jpg" },
];

const BookARideSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title">Top Rides</p>
          <h2 className="section-heading">Book a Ride</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="package-card text-center"
            >
              <img src={v.image} alt={v.name} className="w-full h-48 object-cover" />
              <div className="p-5 flex flex-col items-center">
                <h3 className="font-serif text-xl font-semibold mb-1">{v.name}</h3>
                <p className="text-muted-foreground font-sans text-sm mb-1">{v.seats}</p>
                <p className="text-accent font-sans font-bold text-lg mb-4">{v.price}</p>
                <Link to="/booking" className="btn-primary text-xs">Book Now</Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/booking" className="btn-outline-primary inline-block">View All Rides</Link>
        </div>
      </div>
    </section>
  );
};

export default BookARideSection;
