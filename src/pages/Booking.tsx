import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Clock,
  ArrowLeft,
  ChevronDown
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Tour services options
const tourServices = [
  "Kashmir Premium Tour",
  "Ladakh Adventure",
  "Kashmir Houseboat Stay",
  "Gulmarg Skiing",
  "Pahalgam Betaab Valley",
  "Sonamarg Golden Peak",
  "Srinagar City Tour",
  "Shikara Ride",
  "Great Lakes Trek",
  "Kargil War Memorial",
  "Custom Tour Package"
];

// Form data types
interface FullBookingForm {
  firstName: string;
  phone: string;
  email: string;
  arrivalDate: string;
  persons: string;
  tourService: string;
  message: string;
}

interface QuickBookingForm {
  name: string;
  phone: string;
  message: string;
}

const Booking = () => {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState<"full" | "quick">("full");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Full booking form state
  const [fullForm, setFullForm] = useState<FullBookingForm>({
    firstName: "",
    phone: "",
    email: "",
    arrivalDate: "",
    persons: "1",
    tourService: "",
    message: ""
  });

  // Quick booking form state
  const [quickForm, setQuickForm] = useState<QuickBookingForm>({
    name: "",
    phone: "",
    message: ""
  });

  // Validate full form
  const validateFullForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!fullForm.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!fullForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(fullForm.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate quick form
  const validateQuickForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!quickForm.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!quickForm.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,}$/.test(quickForm.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit full form
  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFullForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store in localStorage (simulating database)
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push({
      type: "full",
      ...fullForm,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Simulate WhatsApp notification (in production, use actual API)
    console.log("Booking submitted:", fullForm);
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Submit quick form
  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateQuickForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store in localStorage (simulating database)
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    bookings.push({
      type: "quick",
      ...quickForm,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Simulate WhatsApp notification (in production, use actual API)
    console.log("Quick booking submitted:", quickForm);
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Success screen
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              Thank You!
            </h2>
            
            <p className="text-muted-foreground mb-2">
              {bookingType === "full" 
                ? "Your booking request has been submitted successfully."
                : "Our team will call you shortly to confirm your booking."}
            </p>
            
            <p className="text-sm text-muted-foreground mb-8">
              Reference: BOOK-{Date.now().toString().slice(-6)}
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFullForm({
                    firstName: "",
                    phone: "",
                    email: "",
                    arrivalDate: "",
                    persons: "1",
                    tourService: "",
                    message: ""
                  });
                  setQuickForm({
                    name: "",
                    phone: "",
                    message: ""
                  });
                }}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                Make Another Booking
              </button>
              
              <button
                onClick={() => navigate("/")}
                className="w-full border border-border text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Back to Home
              </button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative pt-20 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
        <div className="container mx-auto px-6 py-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={18} /> Back to Home
          </motion.button>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4"
          >
            Book Your Dream Tour
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Choose your preferred booking method and let us help you create 
            unforgettable memories in Kashmir.
          </motion.p>
        </div>
      </div>

      {/* Booking Options */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
          <button
            onClick={() => setBookingType("full")}
            className={`p-6 rounded-2xl border-2 transition-all text-left ${
              bookingType === "full"
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                bookingType === "full" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}>
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                  Full Booking Form
                </h3>
                <p className="text-sm text-muted-foreground">
                  Complete form with all details for a detailed tour plan
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setBookingType("quick")}
            className={`p-6 rounded-2xl border-2 transition-all text-left ${
              bookingType === "quick"
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                bookingType === "quick" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}>
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                  Quick Call Booking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Just leave your number, we'll call you shortly
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Forms */}
        <AnimatePresence mode="wait">
          {bookingType === "full" ? (
            <motion.div
              key="full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleFullSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullForm.firstName}
                      onChange={(e) => setFullForm({ ...fullForm, firstName: e.target.value })}
                      placeholder="Enter your first name"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.firstName ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        value={fullForm.phone}
                        onChange={(e) => setFullForm({ ...fullForm, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.phone ? "border-red-500" : "border-border"
                        } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={fullForm.email}
                        onChange={(e) => setFullForm({ ...fullForm, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Date of Arrival */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Date of Arrival
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="date"
                        value={fullForm.arrivalDate}
                        onChange={(e) => setFullForm({ ...fullForm, arrivalDate: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Number of Persons */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Number of Persons
                    </label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        value={fullForm.persons}
                        onChange={(e) => setFullForm({ ...fullForm, persons: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Persons'}</option>
                        ))}
                        <option value="11+">11+ Persons</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Tour Service */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Tour Service
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        value={fullForm.tourService}
                        onChange={(e) => setFullForm({ ...fullForm, tourService: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                      >
                        <option value="">Select a tour service</option>
                        {tourServices.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message / Special Requests
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      value={fullForm.message}
                      onChange={(e) => setFullForm({ ...fullForm, message: e.target.value })}
                      placeholder="Tell us about your travel plans, preferences, or any special requirements..."
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Query
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="quick"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-lg mx-auto"
            >
              {/* Quick Call Info */}
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Quick Call Booking</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leave your details and our team will call you within 10 minutes 
                  to confirm your booking. It's that simple!
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-border"
                    } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                        errors.phone ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      value={quickForm.message}
                      onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                      placeholder="Any specific tour or dates you're interested in..."
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      Request Call Back
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Booking;
