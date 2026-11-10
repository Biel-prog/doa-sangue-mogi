import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const DeveloperContactBadge: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/5511988423693?text=Ol%C3%A1%2C%20vi%20seu%20portal%20informativo%20sobre%20doa%C3%A7%C3%A3o%20de%20sangue%20em%20Mogi%20das%20Cruzes%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho';

  return (
    <aside aria-label="Contato do desenvolvedor" className="fixed bottom-4 right-4 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
        title="WhatsApp Gabriel Rodrigues: +55 (11) 98842-3693"
        aria-label="Falar com o desenvolvedor Gabriel Rodrigues pelo WhatsApp"
      >
        <div className="relative">
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </div>
        <span className="text-[11px] font-bold tracking-tight hidden sm:inline">
          Contato Dev
        </span>
      </a>
    </aside>
  );
};
