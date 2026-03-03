const LuxuryFooter = () => {
  return (
    <footer className="bg-emerald-dark py-16 border-t border-ivory/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="font-serif text-xl text-ivory tracking-wide">
              Tour De <span className="text-gold-shimmer">Wonder</span>
            </span>
            <p className="text-ivory/40 font-sans text-sm mt-4 leading-relaxed">
              Crafting extraordinary journeys for the world's most discerning travelers since 2015.
            </p>
          </div>
          <div>
            <h4 className="text-ivory font-sans text-xs tracking-[0.3em] uppercase mb-4">Destinations</h4>
            <ul className="space-y-2">
              {["Europe", "Asia", "Africa", "Americas", "Middle East"].map((item) => (
                <li key={item}>
                  <a href="#destinations" className="text-ivory/40 hover:text-gold font-sans text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-ivory font-sans text-xs tracking-[0.3em] uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ivory/40 hover:text-gold font-sans text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-ivory font-sans text-xs tracking-[0.3em] uppercase mb-4">Connect</h4>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ivory/40 hover:text-gold font-sans text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/30 font-sans text-xs tracking-wider">
            © 2025 Tour De Wonder. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-ivory/30 hover:text-ivory/60 font-sans text-xs tracking-wider transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;
