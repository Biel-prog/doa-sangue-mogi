import React from 'react';
import { GraduationCap, CheckCircle, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const CampaignBanner: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-roseBg via-white to-brand-offwhite rounded-3xl p-6 sm:p-10 border border-brand-burgundy/20 shadow-elevated">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-burgundy text-white text-xs font-bold uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4" />
              <span>Projeto de Extensão Universitária</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-charcoal mb-3 leading-tight">
              Iniciativa Acadêmica e Cidadania em Prol de Mogi das Cruzes
            </h3>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
              Este portal informativo foi concebido no âmbito do <strong>Projeto de Extensão Universitária da Universidade UMC</strong>, pelo curso de <strong>Análise e Desenvolvimento de Sistemas</strong>, com autoria e desenvolvimento de <strong>Gabriel Rodrigues</strong>. O objetivo central é unir tecnologia, design editorial e compromisso social para conscientizar a população e apoiar a manutenção dos estoques de sangue em nossa cidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2.5 text-xs text-brand-charcoal font-semibold bg-white p-3 rounded-xl border border-brand-border">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Universidade de Mogi das Cruzes (UMC)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-charcoal font-semibold bg-white p-3 rounded-xl border border-brand-border">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Análise e Desenvolvimento de Sistemas</span>
              </div>
              <div className="flex items-center justify-between gap-2 text-xs text-brand-charcoal font-semibold bg-white p-3 rounded-xl border border-brand-border">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Desenvolvido por Gabriel Rodrigues</span>
                </div>
                <a
                  href="https://wa.me/5511988423693?text=Ol%C3%A1%2C%20vi%20seu%20portal%20informativo%20sobre%20doa%C3%A7%C3%A3o%20de%20sangue%20em%20Mogi%20das%20Cruzes%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-all shadow-sm shrink-0"
                  title="Conversar com Gabriel Rodrigues no WhatsApp"
                >
                  <WhatsAppIcon className="w-3 h-3 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-brand-charcoal font-semibold bg-white p-3 rounded-xl border border-brand-border">
                <Heart className="w-4 h-4 text-brand-red shrink-0" />
                <span>100% Voluntário e Educativo</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/5511988423693?text=Ol%C3%A1%2C%20vi%20seu%20portal%20informativo%20sobre%20doa%C3%A7%C3%A3o%20de%20sangue%20em%20Mogi%20das%20Cruzes%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm hover:scale-105"
                title="Conversar com o desenvolvedor no WhatsApp: +55 (11) 98842-3693"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Falar com o Desenvolvedor no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
