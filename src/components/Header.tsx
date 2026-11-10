import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenQuickModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre a Doação', href: '#sobre' },
    { label: 'Por Que Doar', href: '#impacto' },
    { label: 'Quem Pode Doar', href: '#requisitos' },
    { label: 'Onde Doar', href: '#onde-doar' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-brand-border py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-black/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand signature */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
            aria-label="Doe Sangue, Salve Vidas - Página Inicial"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-red to-brand-burgundy flex items-center justify-center text-white shadow-md shadow-brand-red/20 group-hover:shadow-brand-red/35 transition-all">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl text-brand-burgundy leading-none tracking-tight">
                Doe Sangue, Salve Vidas
              </span>
              <span className="text-xs font-semibold text-brand-muted tracking-wide mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-red inline" /> Mogi das Cruzes • SP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-brand-charcoal/80 hover:text-brand-burgundy transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-red hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:1147529999"
              className="p-2.5 rounded-full text-brand-burgundy hover:bg-brand-roseBg transition-colors"
              title="Ligue para informações de doação"
              aria-label="Ligue para informações de doação: (11) 4752-9999"
            >
              <Phone className="w-4 h-4 text-brand-burgundy" />
            </a>
            <a
              href="#onde-doar"
              className="px-5 py-2.5 rounded-full bg-brand-burgundy hover:bg-brand-red text-white text-sm font-bold tracking-wide shadow-md shadow-brand-burgundy/20 hover:shadow-brand-red/30 transition-all duration-200 flex items-center gap-2 transform active:scale-95"
            >
              <span>Quero Doar</span>
              <Heart className="w-4 h-4 fill-white" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#onde-doar"
              className="px-3.5 py-1.5 rounded-full bg-brand-burgundy text-white text-xs font-bold shadow-sm"
            >
              Doar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-brand-charcoal hover:bg-brand-roseBg focus:outline-none focus:ring-2 focus:ring-brand-burgundy transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-burgundy" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-brand-border shadow-xl px-6 py-6 transition-all duration-200 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-semibold text-brand-charcoal hover:text-brand-burgundy py-2 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-brand-muted text-xs">→</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#onde-doar"
                onClick={handleLinkClick}
                className="w-full py-3.5 rounded-2xl bg-brand-burgundy text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Ver Pontos de Coleta</span>
                <MapPin className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-brand-muted py-1">
                <span>Central Santa Casa:</span>
                <a href="tel:1147529999" className="font-bold text-brand-burgundy underline">
                  (11) 4752-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
