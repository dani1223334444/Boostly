import React from 'react';
import Section from './Section';

const Datenschutz: React.FC = () => {
  return (
    <Section className="bg-white min-h-[60vh] pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          
          <div className="p-4 bg-primary-50 border border-primary-100 rounded-lg text-sm text-primary-800 mb-8">
            <strong>Hinweis:</strong> Der Schutz Ihrer persönlichen Daten ist uns wichtig. Im Folgenden informieren wir Sie, welche Daten wir auf unserer Website erheben, wofür wir sie nutzen und welche Rechte Sie haben.
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Verantwortlicher</h2>
            <p>
              Daniel Wimmer<br />
              Rottenbach 23<br />
              4681 Rottenbach<br />
              Österreich<br /><br />
              E-Mail: <a href="mailto:dani@boostly.at" className="text-primary-600 hover:underline">dani@boostly.at</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Erhobene Daten</h2>
            <p>Wir erfassen personenbezogene Daten nur, wenn Sie uns diese freiwillig übermitteln, z. B. über:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Kontaktformular (Name, E-Mail, Nachricht)</li>
                <li>E-Mail-Kontakt</li>
            </ul>
            <p className="mt-4">Zusätzlich werden beim Besuch unserer Website automatisch folgende Daten gespeichert:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>IP-Adresse (anonymisierte Nutzung)</li>
                <li>Datum & Uhrzeit des Zugriffs</li>
                <li>Browserinformationen</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Nutzung externer Dienste</h2>
            <p>Unsere Website verwendet Dienste von Dritten, die Daten verarbeiten:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Tailwind CSS CDN:</strong> Lädt Stylesheets für die korrekte Darstellung der Website.</li>
                <li><strong>Google Fonts:</strong> Lädt Schriftarten (werden erst nach Ihrer Zustimmung im Cookie-Banner geladen).</li>
                <li><strong>Stockfotos:</strong> Bilder von externen Anbietern (Unsplash), keine personenbezogenen Daten.</li>
            </ul>
            <p className="mt-2 text-sm">Durch diese Dienste können technisch notwendige Daten (z. B. IP-Adresse) an die Anbieter übertragen werden.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Zweck der Datenverarbeitung</h2>
            <ul className="list-disc pl-5 space-y-1">
                <li>Bearbeitung Ihrer Anfragen über das Kontaktformular</li>
                <li>Bereitstellung einer funktionsfähigen Website</li>
                <li>Verbesserung der Website-Funktionalität</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Cookies & Tracking</h2>
            <p>
              Unsere Website verwendet technisch notwendige Cookies (z.B. um Ihre Entscheidung im Banner zu speichern).
            </p>
            <p className="mt-2">
              <strong>Analyse & Marketing:</strong><br />
              Wir nutzen Tracking-Tools (Google Analytics, Meta Pixel) <u>ausschließlich</u> dann, wenn Sie im Cookie-Banner auf "Alle akzeptieren" klicken. Lehnen Sie dies ab, finden keinerlei Tracking statt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Rechte der Nutzer</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung oder Löschung</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen Verarbeitung</li>
            </ul>
            <p className="mt-4">Kontaktieren Sie uns dazu einfach unter: <a href="mailto:dani@boostly.at" className="text-primary-600 hover:underline">dani@boostly.at</a></p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">7. Dauer der Speicherung</h2>
            <p>
              Personenbezogene Daten aus dem Kontaktformular werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">8. Haftung für externe Inhalte</h2>
            <p>
              Externe Dienste wie Tailwind CDN oder Google Fonts liegen außerhalb unseres Einflussbereichs. Boostly übernimmt keine Haftung für die Datenverarbeitung dieser Drittanbieter.
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Datenschutz;