import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  TrendingUp, 
  Globe, 
  Star, 
  MessageSquare,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Laptop,
  UserPlus,
  Clock,
  ShieldCheck,
  Users,
  Activity,
  UserCheck,
  PhoneOff
} from 'lucide-react';
import Button from './components/Button';
import Section from './components/Section';
import CookieBanner from './components/CookieBanner';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import { ServiceItem, TestimonialItem, NavItem } from './types';

// Types for View Management
type View = 'home' | 'impressum' | 'datenschutz';

// Data Definitions
const navItems: NavItem[] = [
  { label: 'Start', href: '#hero' },
  { label: 'Ihre Vorteile', href: '#about' },
  { label: 'Lösungen', href: '#services' },
  { label: 'Erfolge', href: '#testimonials' },
];

const services: ServiceItem[] = [
  {
    id: 'web',
    title: 'Website, die wirklich arbeitet',
    description: 'Wir bauen eine klare, moderne Website, auf der Patienten sofort alles finden: Preise, Leistungen, Anfahrt, Termine. Weniger Rückfragen – mehr Zeit für Behandlungen.',
    icon: Laptop
  },
  {
    id: 'seo',
    title: 'Bessere Sichtbarkeit auf Google',
    description: 'Wenn jemand „Physio + Ihre Stadt“ oder „Massage + Ihre Stadt“ sucht, sollten Sie auftauchen – nicht die Konkurrenz. Wir optimieren Ihren Auftritt so, dass Sie weit oben stehen und laufend neue Patienten gewinnen, ganz ohne Werbung.',
    icon: MapPin
  },
  {
    id: 'reviews',
    title: 'Mehr positive Google-Bewertungen',
    description: 'Menschen entscheiden nach Sternen. Wir geben Ihnen ein System an die Hand, mit dem zufriedene Patienten deutlich häufiger eine Bewertung abgeben – automatisch und ohne Zeitaufwand.',
    icon: Star
  },
  {
    id: 'growth',
    title: 'Rundum-Betreuung – alles für Sie erledigt',
    description: 'Sie sollen sich um Ihre Patienten kümmern, nicht um Technik. Wir übernehmen Updates, Änderungen, Sicherheit und Optimierungen. Einfach anrufen – wir erledigen es.',
    icon: Clock
  }
];

// HIER BITTE IHREN ECHTEN KUNDEN EINTRAGEN
const realTestimonial: TestimonialItem = {
  id: '1',
  name: 'Elena Öttl', // Name Ihres Kunden
  role: 'Inhaberin Physiotherapie Öttl', // Rolle/Firma
  quote: 'Endlich jemand, der unsere Branche wirklich versteht. Von der ersten Idee bis zum fertigen Auftritt hat Dani alles übernommen – die neue Website entlastet mich spürbar im Praxisalltag, und die Patienten, die darüber kommen, passen fachlich und menschlich perfekt zu mir.“',
  avatarUrl: 'https://www.physiotherapie-elenaoettl.at/images/hero-image.jpg' // Bild einer Therapeutin
};

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(false);

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check Cookie Consent on Mount
  useEffect(() => {
    const consent = localStorage.getItem('boostly-cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsCookieBannerOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Reset scroll position when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If we are not on home, switch to home first
    if (currentView !== 'home') {
      setCurrentView('home');
      // Use setTimeout to allow render to happen before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLegalClick = (e: React.MouseEvent<HTMLElement>, view: View) => {
    e.preventDefault();
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  // Helper to determine if we should show the "light" navbar (white background, dark text)
  const showLightNavbar = isScrolled || currentView !== 'home' || isMobileMenuOpen;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Navigation */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          showLightNavbar ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
              <span className={`text-2xl font-bold tracking-tight ${showLightNavbar ? 'text-primary-900' : 'text-white'}`}>
                Boostly<span className="text-accent-500">.</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors hover:text-accent-500 ${
                    showLightNavbar ? 'text-slate-700' : 'text-slate-100 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Button 
                variant={showLightNavbar ? 'primary' : 'secondary'} 
                className="py-2 px-4 text-sm"
                onClick={(e) => {
                    handleNavClick(e, '#contact');
                }}
              >
                Kontakt aufnehmen
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${showLightNavbar ? 'text-slate-900' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                 <Button fullWidth onClick={(e) => {
                    handleNavClick(e, '#contact');
                 }}>
                   Jetzt Anfragen
                 </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <div id="hero" className="relative bg-primary-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80" 
                  alt="Physiotherapie Behandlung Massage" 
                  className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900/80"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                <div className="lg:w-2/3">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                    Mehr Patienten.<br />
                    Mehr Umsatz.<br />
                    <span className="text-accent-400">Weniger Stress.</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl text-accent-400 font-medium mb-4">
                    Die Komplettlösung für Physios & Masseure.
                  </h2>
                  <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                    Wir kümmern uns um Ihre Website, Google-Sichtbarkeit, Bewertungen und laufende Optimierungen – damit Ihre Praxis kontinuierlich wächst und online zuverlässig gefunden wird.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button 
                      variant="secondary" 
                      className="text-lg px-8 py-4"
                      onClick={(e) => handleNavClick(e, '#contact')}
                    >
                      Kostenlos Erstgespräch
                    </Button>
                    <Button 
                      variant="primary" 
                      className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-sm"
                      onClick={(e) => handleNavClick(e, '#services')}
                    >
                      Zu den Lösungen
                    </Button>
                  </div>
                  
                  <div className="mt-10 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 md:gap-8 text-slate-300 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-accent-400" />
                      <span>Professionelle Website</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-accent-400" />
                      <span>Google-Sichtbarkeit & Bewertungen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-accent-400" />
                      <span>Marketing-Unterstützung für Ihre Praxis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About / Benefits Section */}
            <Section id="about" className="bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/image.jpg" 
                      alt="Physiotherapie Behandlung" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 hidden md:block">
                    <div className="flex items-center gap-3">
                      <div className="bg-accent-100 p-2 rounded-full">
                        <TrendingUp className="text-accent-600" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Ihr Ziel</p>
                        <p className="text-xl font-bold text-slate-900">Voller Terminkalender</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <h2 className="text-accent-600 font-semibold uppercase tracking-wider text-sm mb-2">Warum Boostly?</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Mehr neue Patienten.<br />
                    Bessere Google-Sichtbarkeit.<br />
                    Weniger Aufwand.
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Als Einzelpraxis bleibt oft keine Zeit, sich um Website, Google oder Bewertungen zu kümmern. Genau hier setzen wir an – mit Lösungen, die sofort etwas bringen und ohne komplizierte Technik funktionieren.
                  </p>
                  
                  <div className="space-y-6">
                    {/* Point 1 */}
                    <div className="flex gap-4">
                      <div className="bg-primary-50 p-3 h-fit rounded-lg text-primary-600 shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">1. Sie werden auf Google schneller gefunden</h4>
                        <p className="text-slate-600 text-sm mt-1">Wir verbessern Ihren Google-Auftritt so, dass Sie in Ihrer Umgebung weiter oben stehen. Ergebnis: Mehr Menschen sehen Ihre Praxis – und melden sich direkt bei Ihnen.</p>
                      </div>
                    </div>

                    {/* Point 2 */}
                    <div className="flex gap-4">
                      <div className="bg-primary-50 p-3 h-fit rounded-lg text-primary-600 shrink-0">
                        <UserPlus size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">2. Planbar neue Patienten</h4>
                        <p className="text-slate-600 text-sm mt-1">Eine klare, moderne Website erklärt sofort, was Sie anbieten, wie viel es kostet und wie man Termine bekommt. Weniger Rückfragen – mehr neue Patienten, die wirklich buchen wollen.</p>
                      </div>
                    </div>

                    {/* Point 3 */}
                    <div className="flex gap-4">
                      <div className="bg-primary-50 p-3 h-fit rounded-lg text-primary-600 shrink-0">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">3. Ein professioneller Auftritt, der Vertrauen schafft</h4>
                        <p className="text-slate-600 text-sm mt-1">Wir gestalten Ihre Praxis online so, wie Sie arbeiten: seriös, kompetent und persönlich. Das sorgt dafür, dass Patienten Sie als erste Wahl wahrnehmen – nicht als eine Praxis von vielen.</p>
                      </div>
                    </div>

                    {/* Point 4 */}
                    <div className="flex gap-4">
                      <div className="bg-primary-50 p-3 h-fit rounded-lg text-primary-600 shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">4. Sie müssen sich um nichts kümmern</h4>
                        <p className="text-slate-600 text-sm mt-1">Texte, Bilder, Umsetzung, Updates, Google-Profil, Bewertungen – wir übernehmen alles. Sie behandeln. Wir kümmern uns um den Rest.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Services Section */}
            <Section id="services" className="bg-slate-50">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-accent-600 font-semibold uppercase tracking-wider text-sm mb-2">Unsere Leistungen</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Ihr Auftritt. Ihr Wachstum. Ohne zusätzlichen Stress.
                </h3>
                <p className="text-lg text-slate-600">
                  Wir bieten kein technisches „Tool“, sondern eine komplette Lösung, die Ihre Praxis sichtbarer macht und Ihnen neue Patienten bringt.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                  <div 
                    key={service.id} 
                    className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                      <service.icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors mt-auto">
                      Kostenlos beraten lassen <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </Section>

            {/* Testimonials */}
            <Section id="testimonials" className="bg-white">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-accent-600 font-semibold uppercase tracking-wider text-sm mb-2">Erfolgsgeschichten</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Das sagen unsere Kunden
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Real Customer */}
                <div className="bg-slate-50 p-8 rounded-2xl relative shadow-sm border border-slate-100">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 relative z-10 text-lg">"{realTestimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={realTestimonial.avatarUrl} 
                      alt={realTestimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{realTestimonial.name}</p>
                      <p className="text-slate-500 text-xs">{realTestimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Call for next customer */}
                <div className="bg-primary-50 p-8 rounded-2xl relative border-2 border-dashed border-primary-200 flex flex-col justify-center items-center text-center">
                  <div className="bg-white p-3 rounded-full mb-4 shadow-sm">
                    <UserPlus className="text-primary-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Werden Sie unsere nächste Erfolgsgeschichte</h4>
                  <p className="text-slate-600 mb-6">
                    Wir würden uns freuen, bald auch Ihre Praxis hier präsentieren zu dürfen.
                  </p>
                  <Button variant="outline" onClick={(e) => handleNavClick(e, '#contact')}>
                    Jetzt anfragen
                  </Button>
                </div>
              </div>
              
              <div className="mt-16 bg-primary-900 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Bereit für den nächsten Schritt?</h4>
                  <p className="text-white text-lg mt-2 font-medium">Lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren.</p>
                </div>
                <Button 
                  variant="secondary" 
                  className="whitespace-nowrap px-8 py-4 text-lg"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Jetzt Erstgespräch sichern
                </Button>
              </div>
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="bg-slate-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-accent-600 font-semibold uppercase tracking-wider text-sm mb-2">Kontakt</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    Starten Sie Ihr Wachstum heute
                  </h3>
                  <p className="text-lg text-slate-600 mb-8">
                    Füllen Sie das Formular aus für ein unverbindliches Erstgespräch. Wir analysieren Ihre aktuelle Situation und zeigen Ihnen Potenziale auf – völlig kostenlos.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">E-Mail</p>
                        <a href="mailto:dani@boostly.at" className="text-slate-600 hover:text-primary-600 transition-colors">dani@boostly.at</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Telefon</p>
                        <a href="tel:+4367761674656" className="text-slate-600 hover:text-primary-600 transition-colors">+43 677 6167 4656</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                  <form 
                    className="space-y-6" 
                    action="https://formspree.io/f/xjknooew" 
                    method="POST"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefon</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder="Ihre Nummer"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-Mail Adresse</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="name@praxis.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">Aktuelle Website (optional)</label>
                      <input 
                        type="url" 
                        id="website" 
                        name="website"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="www.ihre-praxis.de"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Nachricht</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4} 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="Wie können wir Ihnen helfen?"
                      ></textarea>
                    </div>

                    <Button type="submit" fullWidth className="py-4 text-lg">
                      Kostenlos anfragen
                    </Button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                      Ihre Daten sind bei uns sicher. Wir melden uns innerhalb von 24h.
                    </p>
                  </form>
                </div>
              </div>
            </Section>
          </>
        )}
        
        {currentView === 'impressum' && <Impressum />}
        {currentView === 'datenschutz' && <Datenschutz />}

      </main>

      {/* Cookie Banner is now controlled by App state */}
      <CookieBanner 
        isOpen={isCookieBannerOpen} 
        onClose={() => setIsCookieBannerOpen(false)} 
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white tracking-tight mb-4 block" onClick={() => setCurrentView('home')} style={{cursor: 'pointer'}}>
                Boostly<span className="text-accent-500">.</span>
              </span>
              <p className="text-slate-400 max-w-sm mb-6">
                Wir helfen lokalen Dienstleistern dabei, ihre digitale Präsenz zu maximieren und nachhaltig zu wachsen.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                   <MessageSquare size={20} />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                   <Globe size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Lösungen</h4>
              <ul className="space-y-2">
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-400 transition-colors">Webdesign</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-400 transition-colors">Local SEO</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-400 transition-colors">Google Maps</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-accent-400 transition-colors">Reputation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => handleLegalClick(e, 'impressum')} className="hover:text-accent-400 transition-colors">Impressum</a></li>
                <li><a href="#" onClick={(e) => handleLegalClick(e, 'datenschutz')} className="hover:text-accent-400 transition-colors">Datenschutz</a></li>
                <li><button onClick={() => setIsCookieBannerOpen(true)} className="hover:text-accent-400 transition-colors text-left">Cookie-Einstellungen</button></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Boostly Digitalagentur. Alle Rechte vorbehalten.</p>
            <p className="mt-2 md:mt-0">Designed für Macher.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;