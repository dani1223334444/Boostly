import React from 'react';
import Section from './Section';

const Impressum: React.FC = () => {
  return (
    <Section className="bg-white min-h-[60vh] pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Impressum</h1>
        <p className="text-slate-500 mb-10 text-sm border-l-4 border-primary-500 pl-4 italic">
          Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
        </p>
        
        <div className="text-slate-600 space-y-6">
            
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
                <div className="font-semibold text-slate-900">Name</div>
                <div className="md:col-span-2">
                    Daniel Wimmer<br/>
                    <span className="text-slate-400 text-sm">(Inhaber)</span>
                </div>
            </div>

            {/* Standort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
                <div className="font-semibold text-slate-900">Standort der Gewerbeberechtigung</div>
                <div className="md:col-span-2">
                    Rottenbach 23<br/>
                    4681 Rottenbach<br/>
                    Österreich
                </div>
            </div>

            {/* Unternehmensgegenstand */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
                <div className="font-semibold text-slate-900">Unternehmensgegenstand</div>
                <div className="md:col-span-2">
                    IT Dienstleistungen
                </div>
            </div>

            {/* Kontakt */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
                <div className="font-semibold text-slate-900">Kontaktdaten</div>
                <div className="md:col-span-2">
                    Tel: +43 677 6167 4656<br/>
                    E-Mail: <a href="mailto:dani@boostly.at" className="text-primary-600 hover:underline">dani@boostly.at</a>
                </div>
            </div>

            {/* Mitgliedschaften */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
                <div className="font-semibold text-slate-900">Mitgliedschaften bei der Wirtschaftskammerorganisation</div>
                <div className="md:col-span-2">
                    Mitglied der WKO
                </div>
            </div>

            {/* Rechtsvorschriften */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
                <div className="font-semibold text-slate-900">Anwendbare Rechtsvorschriften und Zugang dazu</div>
                <div className="md:col-span-2">
                    Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.ris.bka.gv.at</a>
                </div>
            </div>

            {/* Behörde */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 border-b border-slate-100 pb-6">
                <div className="font-semibold text-slate-900">Aufsichtsbehörde / Gewerbebehörde</div>
                <div className="md:col-span-2">
                    Bezirkshauptmannschaft Grieskirchen
                </div>
            </div>

             {/* Streitbeilegung */}
            <div className="pt-6">
                <h2 className="text-lg font-semibold text-slate-800 mb-3">EU-Streitschlichtung</h2>
                <p className="text-sm leading-relaxed">
                    Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: 
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline"> https://ec.europa.eu/consumers/odr/</a>.<br />
                    Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Impressum;