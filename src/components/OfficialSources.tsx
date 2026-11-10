import React from 'react';
import { OFFICIAL_SOURCES } from '../data/content';
import { ShieldCheck, ExternalLink, Building2 } from 'lucide-react';

export const OfficialSources: React.FC = () => {
  return (
    <section className="py-20 bg-brand-offwhite relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-4 border border-brand-burgundy/15 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
            <span>Transparência e Credibilidade Pública</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Fontes Oficiais e Instituições
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Todas as diretrizes, recomendações clínicas, dados de contato e referências legislativas reunidas neste portal baseiam-se nos canais governamentais e hospitalares oficiais.
          </p>
        </div>

        {/* Sources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_SOURCES.map((source, idx) => (
            <a
              key={idx}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-6 border border-brand-border hover:border-brand-burgundy/40 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-roseBg text-brand-burgundy border border-brand-burgundy/15">
                    {source.badge}
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div className="text-xs font-semibold text-brand-muted mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand-red" />
                  <span>{source.institution}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-brand-charcoal mb-2 group-hover:text-brand-burgundy transition-colors">
                  {source.title}
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  {source.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-bold text-brand-burgundy">
                <span>Acessar portal oficial</span>
                <span className="text-brand-red">↗</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
