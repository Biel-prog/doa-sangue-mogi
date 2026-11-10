import React from 'react';
import { Heart, MapPin, ShieldAlert, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-burgundy text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-brand-red">
      {/* Background ambient pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Identity & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-brand-red text-brand-red" />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight block leading-none">
                  Doe Sangue, Salve Vidas
                </span>
                <span className="text-xs text-rose-200/80 font-medium tracking-wide flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-brand-red inline" /> Mogi das Cruzes • São Paulo
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm mb-6">
              Plataforma pública informativa e independente dedicada à conscientização da população sobre a doação voluntária de sangue no município de Mogi das Cruzes e região do Alto Tietê.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white/70 max-w-md">
              <div className="font-bold text-white mb-1 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-rose-300" />
                <span>Nota de Responsabilidade e Saúde Pública</span>
              </div>
              <p className="leading-relaxed">
                Este portal tem finalidade puramente educativa e informativa. Ele não substitui consulta médica nem avaliação laboratorial. A decisão definitiva quanto à aptidão para doação cabe exclusivamente à equipe de triagem do serviço de hemoterapia.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-rose-200 mb-4">
              Navegação do Portal
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#hero" className="hover:text-white hover:underline transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white hover:underline transition-colors">
                  Sobre a Doação (5 Etapas)
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-white hover:underline transition-colors">
                  Por Que Doar (Até 4 Vidas)
                </a>
              </li>
              <li>
                <a href="#requisitos" className="hover:text-white hover:underline transition-colors">
                  Quem Pode Doar e Critérios
                </a>
              </li>
              <li>
                <a href="#onde-doar" className="hover:text-white hover:underline transition-colors font-semibold text-rose-200">
                  Onde Doar em Mogi das Cruzes
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white hover:underline transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Unidades & Telefones Rápidos */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-rose-200 mb-4">
              Pontos de Coleta Locais
            </h4>
            <div className="space-y-3.5 text-xs text-white/80">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <strong className="block text-white text-sm">Hemocentro Transfusão (Santa Casa)</strong>
                <span>Rua Barão de Jaceguai, 1.148 – Centro</span>
                <a href="tel:1147529999" className="block text-rose-200 font-bold mt-1 hover:underline">
                  Tel: (11) 4752-9999 (Agendamento prévio)
                </a>
              </div>

              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <strong className="block text-white text-sm">Centrho Hemoterapia</strong>
                <span>Rua Dona Afife Nassif Jafet, 223 – Vila Industrial</span>
                <a href="tel:1147992892" className="block text-rose-200 font-bold mt-1 hover:underline">
                  Tel: (11) 4799-2892 (Confirmar atendimento)
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-white/60">
                <span>Disque Saúde Nacional: <strong>136</strong></span>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="flex items-center gap-1 text-white hover:text-rose-200 transition-colors"
                  aria-label="Voltar ao topo da página"
                >
                  <span>Voltar ao topo</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Doe Sangue, Salve Vidas • Mogi das Cruzes/SP.</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>Última revisão do conteúdo: <strong>Novembro de 2026</strong></span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-right">
            <span>
              Projeto de Extensão Universitária — <strong>Universidade UMC</strong> (ADS)
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">
                Desenvolvido por Gabriel Rodrigues
              </span>
              <a
                href="https://wa.me/5511988423693?text=Ol%C3%A1%2C%20vi%20seu%20portal%20informativo%20sobre%20doa%C3%A7%C3%A3o%20de%20sangue%20em%20Mogi%20das%20Cruzes%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold shadow-sm transition-all duration-200 hover:scale-105"
                title="Contato no WhatsApp com Gabriel Rodrigues: +55 (11) 98842-3693"
                aria-label="Contato no WhatsApp com o desenvolvedor Gabriel Rodrigues: +55 (11) 98842-3693"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
