import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${dark ? 'bg-slate-900 text-white' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;