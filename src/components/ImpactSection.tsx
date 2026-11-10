import React, { useState } from 'react';
import { BLOOD_COMPONENTS } from '../data/content';
import { Users, Droplets, Info, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const [activeComponentId, setActiveComponentId] = useState<string>('hemacias');

  const activeComponent = BLOOD_COMPONENTS.find((c) => c.id === activeComponentId) || BLOOD_COMPONENTS[0];

  return (
    <section id="impacto" className="py-20 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-roseBg text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-4 border border-brand-burgundy/15">
            <Users className="w-3.5 h-3.5 text-brand-red" />
            <span>Impacto Humanitário Real</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Uma única doação pode beneficiar{' '}
            <span className="text-brand-burgundy underline decoration-brand-red decoration-wavy decoration-2">
              até quatro pessoas.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Após a coleta, uma bolsa de sangue total (cerca de 450 ml) passa por fracionamento laboratorial especializado. 
            Ela é separada em componentes essenciais, cada um destinado a tratar condições clínicas específicas.
          </p>

          {/* Legal / Scientific Accuracy Note */}
          <div className="mt-5 inline-flex items-start gap-2.5 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-200/80 text-xs text-brand-muted text-left max-w-2xl">
            <Info className="w-4 h-4 text-brand-burgundy shrink-0 mt-0.5" />
            <p>
              <strong className="text-brand-charcoal">Nota de precisão médica:</strong> O número de até quatro pessoas representa o <em>potencial biológico de fracionamento</em> da bolsa coletada, e não uma garantia matemática de que toda unidade será fracionada ou aplicada em quatro pacientes simultâneos.
            </p>
          </div>
        </div>

        {/* Component Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {BLOOD_COMPONENTS.map((comp) => {
            const isSelected = comp.id === activeComponentId;
            return (
              <button
                key={comp.id}
                type="button"
                onClick={() => setActiveComponentId(comp.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border relative ${
                  isSelected
                    ? 'bg-brand-burgundy text-white border-brand-burgundy shadow-elevated scale-[1.02]'
                    : 'bg-brand-offwhite text-brand-charcoal border-brand-border hover:bg-brand-roseBg/50 hover:border-brand-burgundy/30'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-brand-burgundy/10 text-brand-burgundy'
                    }`}
                  >
                    <Droplets className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-red text-white px-2 py-0.5 rounded-full">
                      Ativo
                    </span>
                  )}
                </div>
                <h3 className={`font-display font-bold text-lg sm:text-xl leading-snug mb-1 ${isSelected ? 'text-white' : 'text-brand-charcoal'}`}>
                  {comp.name}
                </h3>
                <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-brand-muted'} line-clamp-1`}>
                  {comp.scientificName}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detailed Component View Card */}
        <div className="bg-gradient-to-br from-brand-offwhite to-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-border shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Explanations and Clinical Uses */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2 text-brand-red text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Componente Sanguíneo em Destaque</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-charcoal mb-2">
                {activeComponent.name}{' '}
                <span className="text-base font-medium text-brand-muted block sm:inline">
                  ({activeComponent.scientificName})
                </span>
              </h3>

              <p className="text-base text-brand-charcoal/90 mb-6 leading-relaxed">
                {activeComponent.description}
              </p>

              <h4 className="text-xs font-bold text-brand-burgundy uppercase tracking-wider mb-3">
                Principais Indicações e Tratamentos:
              </h4>

              <ul className="space-y-2.5 mb-6">
                {activeComponent.usage.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-medium text-brand-muted">
                <ClockIcon className="w-3.5 h-3.5 text-brand-burgundy" />
                <span>{activeComponent.shelfLife}</span>
              </div>
            </div>

            {/* Right Col: Graphic Infographic Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-border shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-roseBg border border-brand-burgundy/20 flex items-center justify-center text-brand-burgundy mb-4">
                  <Droplets className="w-6 h-6 fill-brand-red text-brand-red" />
                </div>
                <h4 className="font-display font-bold text-lg text-brand-charcoal mb-2">
                  Por que não existe substituto sintético?
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                  Apesar de todos os avanços da medicina moderna e da biotecnologia, a ciência ainda não descobriu nenhum líquido ou composto artificial capaz de reproduzir as funções biológicas complexas do sangue humano.
                </p>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  Isso significa que, para pacientes de Mogi das Cruzes que enfrentam traumas, leucemias ou cirurgias de emergência, <strong>o único remédio disponível é a solidariedade de outro ser humano</strong>.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs text-brand-muted">Sua doação faz a diferença</span>
                <a
                  href="#onde-doar"
                  className="text-xs font-bold text-brand-burgundy hover:text-brand-red flex items-center gap-1 group"
                >
                  <span>Encontrar unidade</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
