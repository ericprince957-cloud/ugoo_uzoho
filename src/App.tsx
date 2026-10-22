import { useState, useEffect } from 'react';

// ============ HEADER COMPONENT ============
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <a href="#" className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-wide text-charcoal">
            UGOO UZOHO <span className="hidden sm:inline">&</span><span className="sm:hidden">&</span> CO.
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-[13px] font-medium text-charcoal hover:text-muted transition-colors duration-300">
              Home
            </a>
            <a href="#practice-areas" className="text-[13px] font-medium text-charcoal hover:text-muted transition-colors duration-300">
              Practice Areas
            </a>
            <a href="#team" className="text-[13px] font-medium text-charcoal hover:text-muted transition-colors duration-300">
              Our Team
            </a>
            <a href="#contact" className="text-[13px] font-medium text-charcoal hover:text-muted transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-7 py-3 border border-charcoal text-[13px] font-medium text-charcoal hover:bg-charcoal hover:text-white transition-all duration-500"
          >
            Book Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[1.5px] bg-charcoal transition-all duration-500 origin-left ${isMenuOpen ? 'rotate-45 translate-y-[1px]' : ''}`}></span>
              <span className={`w-full h-[1.5px] bg-charcoal transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-[1.5px] bg-charcoal transition-all duration-500 origin-left ${isMenuOpen ? '-rotate-45 -translate-y-[1px]' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Smooth overlay */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-8 pt-2 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-[15px] font-light text-charcoal py-3 px-1 hover:pl-3 transition-all duration-300">Home</a>
              <a href="#practice-areas" onClick={() => setIsMenuOpen(false)} className="text-[15px] font-light text-charcoal py-3 px-1 hover:pl-3 transition-all duration-300">Practice Areas</a>
              <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-[15px] font-light text-charcoal py-3 px-1 hover:pl-3 transition-all duration-300">Our Team</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[15px] font-light text-charcoal py-3 px-1 hover:pl-3 transition-all duration-300">Contact</a>
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center px-7 py-3.5 border border-charcoal text-[13px] font-medium text-charcoal hover:bg-charcoal hover:text-white transition-all duration-500"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-serif text-[2rem] leading-[1.2] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold text-charcoal animate-fade-in-up">
            Excellence in Legal Representation.
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 sm:mt-7 text-[15px] sm:text-base lg:text-lg text-muted font-light leading-relaxed animate-fade-in-up animate-delay-200">
            Trusted counsel for individuals and businesses in Port Harcourt.
          </p>

          {/* Primary CTA */}
          <div className="mt-8 sm:mt-10 lg:mt-12 animate-fade-in-up animate-delay-400">
            <a
              href="#contact"
              className="inline-flex items-center px-7 sm:px-8 py-3.5 sm:py-4 bg-charcoal text-white text-[13px] sm:text-sm font-medium tracking-wide hover:bg-black transition-all duration-500 shadow-lg shadow-charcoal/5 hover:shadow-xl hover:shadow-charcoal/10"
            >
              Schedule a Meeting
              <svg className="ml-2.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="mt-12 sm:mt-16 lg:mt-24 animate-fade-in-up animate-delay-600">
          <div className="relative bg-light-grey border border-gray-200/80 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/8] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100/40"></div>
            <div className="relative text-center px-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 border border-gray-300/80 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-muted font-light tracking-wide">
                Professional Office / Team Photo Placeholder
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5">
                1920 × 730 recommended
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PRACTICE AREAS SECTION ============
function PracticeAreasSection() {
  const areas = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Corporate Law',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Property Litigation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Family Matters',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section id="practice-areas" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-muted mb-3 sm:mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal">
            Our Expertise
          </h2>
          <div className="w-10 h-px bg-charcoal/60 mx-auto mt-5 sm:mt-6"></div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 p-7 sm:p-8 lg:p-10 hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-1 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-gray-200 text-charcoal mb-5 sm:mb-6 group-hover:border-charcoal transition-colors duration-500">
                {area.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-charcoal mb-3 sm:mb-4">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] sm:text-sm text-muted leading-relaxed font-light">
                {area.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-[11px] sm:text-xs font-medium tracking-wide text-charcoal group-hover:gap-3 gap-2 transition-all duration-300">
                  Learn More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ WHY CHOOSE US SECTION ============
function WhyChooseUsSection() {
  const reasons = [
    {
      number: '01',
      title: 'Decades of Experience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
    {
      number: '02',
      title: 'Client-Centric Approach',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
    },
    {
      number: '03',
      title: 'Proven Track Record',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non.',
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div>
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-muted mb-3 sm:mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal mb-10 sm:mb-12 lg:mb-14">
              Built on Trust,<br className="hidden sm:block" /> Driven by Results.
            </h2>

            <div className="space-y-8 sm:space-y-10">
              {reasons.map((reason, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 group-hover:text-charcoal transition-colors duration-500 leading-none mt-1">
                      {reason.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-base sm:text-lg lg:text-xl font-semibold text-charcoal mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-[13px] sm:text-sm text-muted leading-relaxed font-light">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 sm:mt-14 pt-10 sm:pt-12 border-t border-gray-200/80 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal">25+</p>
                <p className="text-[10px] sm:text-xs text-muted mt-1 tracking-wide">Years of Practice</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal">500+</p>
                <p className="text-[10px] sm:text-xs text-muted mt-1 tracking-wide">Cases Won</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal">98%</p>
                <p className="text-[10px] sm:text-xs text-muted mt-1 tracking-wide">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative order-first lg:order-last">
            <div className="bg-light-grey border border-gray-200/80 aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent"></div>
              <div className="relative text-center px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 border border-gray-300/80 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-muted font-light tracking-wide">
                  Law Library / Books Placeholder
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5">
                  800 × 1000 recommended
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border border-gray-200/60 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-10">
          {/* Firm Name & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal tracking-wide mb-4">
              UGOO UZOHO & CO.
            </h3>
            <p className="text-[13px] sm:text-sm text-muted font-light leading-relaxed max-w-xs">
              A premier law firm providing exceptional legal services with integrity, dedication, and unwavering commitment to our clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-5 sm:mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a href="#" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Home</a>
              <a href="#practice-areas" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Practice Areas</a>
              <a href="#team" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Our Team</a>
              <a href="#contact" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Contact</a>
            </nav>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-5 sm:mb-6">
              Practice Areas
            </h4>
            <nav className="space-y-3">
              <a href="#" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Corporate Law</a>
              <a href="#" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Property Litigation</a>
              <a href="#" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Family Matters</a>
              <a href="#" className="block text-[13px] sm:text-sm text-muted font-light hover:text-charcoal transition-colors duration-300">Criminal Defence</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-5 sm:mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[13px] sm:text-sm text-muted font-light leading-relaxed">
                  12 Marina Road,<br />
                  Port Harcourt,<br />
                  Rivers State, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-[13px] sm:text-sm text-muted font-light">+234 (0) 800 000 0000</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-[13px] sm:text-sm text-muted font-light">info@ugoouzoho.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 sm:py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[11px] sm:text-xs text-muted font-light">
            © 2026 Ugoo Uzoho & Company. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6">
            <a href="#" className="text-[11px] sm:text-xs text-muted font-light hover:text-charcoal transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-[11px] sm:text-xs text-muted font-light hover:text-charcoal transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-white text-charcoal font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="h-px bg-gray-100"></div>
        </div>
        <PracticeAreasSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
}
