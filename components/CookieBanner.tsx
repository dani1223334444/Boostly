import React, { useEffect } from 'react';
import Button from './Button';
import { X, Cookie } from 'lucide-react';

interface CookieBannerProps {
  isOpen: boolean;
  onClose: () => void;
}

// =====================================================================
// KONFIGURATION: Hier bitte deine eigenen IDs eintragen!
// =====================================================================
const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'; // Deine GA4 Measurement ID (z.B. G-A1B2C3D4E5)
const FACEBOOK_PIXEL_ID = '0000000000000000'; // Deine Facebook Pixel ID

// Helper function to inject Google Fonts
const injectGoogleFonts = () => {
  if (document.getElementById('google-fonts')) return;

  const link = document.createElement('link');
  link.id = 'google-fonts';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  console.log('Boostly: Google Fonts geladen.');
};

// Helper function to inject Google Analytics
const injectGoogleAnalytics = () => {
  if (GOOGLE_ANALYTICS_ID === 'G-XXXXXXXXXX') {
    console.warn('Boostly: Google Analytics ID noch nicht konfiguriert.');
    return;
  }

  // Check if script already exists to avoid duplicates
  if (document.getElementById('ga-script')) return;

  // 1. Load the script tag
  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // 2. Initialize the window.dataLayer and config
  const scriptConfig = document.createElement('script');
  scriptConfig.id = 'ga-config';
  scriptConfig.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GOOGLE_ANALYTICS_ID}', { 'anonymize_ip': true });
  `;
  document.head.appendChild(scriptConfig);
  console.log('Boostly: Google Analytics geladen.');
};

// Helper function to inject Facebook Pixel
const injectFacebookPixel = () => {
  if (FACEBOOK_PIXEL_ID === '0000000000000000') {
    console.warn('Boostly: Facebook Pixel ID noch nicht konfiguriert.');
    return;
  }

  if (document.getElementById('fb-script')) return;

  const script = document.createElement('script');
  script.id = 'fb-script';
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${FACEBOOK_PIXEL_ID}');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
  console.log('Boostly: Facebook Pixel geladen.');
};

const initAnalytics = () => {
  // @ts-ignore
  if (window.BOOSTLY_ANALYTICS_INITIALIZED) return;
  
  // Inject services (Fonts + Analytics)
  injectGoogleFonts();
  injectGoogleAnalytics();
  injectFacebookPixel();
  
  // @ts-ignore
  window.BOOSTLY_ANALYTICS_INITIALIZED = true;
};

const CookieBanner: React.FC<CookieBannerProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
    // If already accepted in the past, initialize scripts immediately without showing banner
    const consent = localStorage.getItem('boostly-cookie-consent');
    if (consent === 'accepted') {
      initAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('boostly-cookie-consent', 'accepted');
    initAnalytics(); // Initialize scripts now
    onClose();
  };

  const handleDecline = () => {
    // Check if the user previously accepted cookies
    const previouslyAccepted = localStorage.getItem('boostly-cookie-consent') === 'accepted';
    
    localStorage.setItem('boostly-cookie-consent', 'declined');
    console.log("Analytics Consent Declined. No scripts loaded.");
    onClose();

    // If they previously accepted and now decline, reload the page to ensure scripts are stopped/cleared
    if (previouslyAccepted) {
        window.location.reload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-slate-900/95 backdrop-blur shadow-2xl border-t border-slate-800 text-slate-300 transition-transform duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1 pr-8 md:pr-0">
          <div className="flex items-center gap-2 mb-2">
            <Cookie className="text-accent-400" size={20} />
            <h3 className="text-white font-bold text-lg">Cookie-Einstellungen</h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 max-w-3xl">
            Wir nutzen Cookies und Tracking-Technologien (Google Analytics, Meta Pixel, Google Fonts), um die Nutzererfahrung auf unserer Website zu verbessern.
            Ihre Daten werden dabei anonymisiert verarbeitet.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white text-sm py-2"
          >
            Nur Essenzielle
          </Button>
          <Button 
            variant="secondary" 
            onClick={handleAccept}
            className="text-sm py-2"
          >
            Alle akzeptieren
          </Button>
        </div>
        
        <button 
          onClick={handleDecline}
          className="absolute top-4 right-4 md:hidden text-slate-500 hover:text-white p-2"
          aria-label="Schließen und Ablehnen"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;