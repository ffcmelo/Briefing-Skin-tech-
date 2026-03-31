import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  {
    code: 'fr-CH',
    name: 'Français (Suisse)',
    flag: (
      <svg viewBox="0 0 32 32" className="w-5 h-5 rounded-sm shadow-sm">
        <rect width="32" height="32" fill="#e30a17"/>
        <path d="M7 13h18v6H7zM13 7h6v18h-6z" fill="#fff"/>
      </svg>
    )
  },
  {
    code: 'pt-PT',
    name: 'Português (PT)',
    flag: (
      <svg viewBox="0 0 600 400" className="w-5 h-5 rounded-sm shadow-sm">
        <rect width="240" height="400" fill="#006600"/>
        <rect x="240" width="360" height="400" fill="#FF0000"/>
        <circle cx="240" cy="200" r="80" fill="#FFFF00"/>
      </svg>
    )
  },
  {
    code: 'pt-BR',
    name: 'Português (BR)',
    flag: (
      <svg viewBox="0 0 720 504" className="w-5 h-5 rounded-sm shadow-sm">
        <rect width="720" height="504" fill="#009739"/>
        <path d="M360 54L666 252L360 450L54 252z" fill="#FEDD00"/>
        <circle cx="360" cy="252" r="117" fill="#012169"/>
      </svg>
    )
  }
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[2];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center md:justify-end mb-6 relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white shadow-sm hover:border-gold transition-all duration-300 group"
      >
        <Globe size={18} className="text-gold group-hover:rotate-12 transition-transform" />
        <div className="flex items-center gap-2 pr-1">
          {currentLanguage.flag}
          <span className="text-xs font-bold uppercase tracking-wider text-foreground hidden sm:inline">
            {currentLanguage.code}
          </span>
        </div>
        <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-56 bg-white border border-border rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-accent/5 transition-colors ${
                    i18n.language === lang.code ? 'bg-accent/5 font-semibold text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {lang.flag}
                    <span>{lang.name}</span>
                  </div>
                  {i18n.language === lang.code && (
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
