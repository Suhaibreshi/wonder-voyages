import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Amazing experience with Tour De WONDER! The Kashmir trip was beautifully organized. Every detail was taken care of. Highly recommended!",
    name: "Raju",
    country: "India",
    date: "15 Jan 2025",
  },
  {
    text: "We booked the houseboat package and it was magical. The views from Dal Lake at sunset were breathtaking. Thank you Tour De WONDER!",
    name: "Rohit",
    country: "India",
    date: "22 Feb 2025",
  },
  {
    text: "The trek to Great Lakes was the best adventure of my life. Professional guides, great food, and unforgettable scenery. Will book again!",
    name: "Deepak",
    country: "India",
    date: "5 Mar 2025",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="section-title">Testimonial</p>
          <h2 className="section-heading">Regards From Travelers</h2>
          <div className="flex justify-center items-center gap-1 mt-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={18} className="fill-accent text-accent" />
            ))}
            <span className="text-muted-foreground font-sans text-sm ml-2">4.9 on Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-5">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-sans font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">{review.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{review.country} · {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
