import React, { useState } from 'react';
import { ELIGIBILITY_RULES } from '../data/content';
import { CheckCircle2, AlertTriangle, XCircle, FileText, Scale, HeartPulse, Moon, Utensils, IdCard } from 'lucide-react';

export const EligibilitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requisitos' | 'temporarios' | 'definitivos'>('requisitos');

  return (
    <section id="requisitos" className="py-20 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-roseBg text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-4 border border-brand-burgundy/15">
            <HeartPulse className="w-3.5 h-3.5 text-brand-red" />
            <span>Critérios Oficiais do Ministério da Saúde</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Quem pode doar sangue?
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Para garantir a segurança tanto do doador quanto do receptor da transfusão, existem parâmetros de saúde, peso e descanso rigorosamente avaliados.
          </p>

          {/* Critical Ethical Banner */}
          <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-900 text-left flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-amber-950 font-bold mb-0.5">
                Aviso importante sobre a aptidão final:
              </strong>
              <span>
                As orientações abaixo são informativas. A decisão definitiva sobre a sua aptidão para doar pertence exclusivamente à <strong>equipe de triagem clínica do serviço de hemoterapia</strong> no dia do comparecimento. Em caso de dúvidas médicas específicas, consulte a unidade antes de se deslocar.
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl border border-neutral-200/80 gap-1.5 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('requisitos')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'requisitos'
                  ? 'bg-brand-burgundy text-white shadow-md'
                  : 'text-brand-charcoal hover:text-brand-burgundy hover:bg-white/60'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Requisitos Básicos</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('temporarios')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'temporarios'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-brand-charcoal hover:text-amber-700 hover:bg-white/60'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Impedimentos Temporários</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('definitivos')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'definitivos'
                  ? 'bg-rose-900 text-white shadow-md'
                  : 'text-brand-charcoal hover:text-rose-900 hover:bg-white/60'
              }`}
            >
              <XCircle className="w-4 h-4" />
              <span>Impedimentos Definitivos</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Requisitos Básicos */}
        {activeTab === 'requisitos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {ELIGIBILITY_RULES.requirements.map((req, idx) => {
              const icons = [HeartPulse, Scale, HeartPulse, Moon, Utensils, IdCard];
              const IconComp = icons[idx] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="bg-brand-offwhite rounded-3xl p-6 border border-brand-border hover:border-brand-burgundy/30 transition-all shadow-subtle hover:shadow-elevated flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-charcoal mb-2">
                      {req.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {req.text}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Critério obrigatório de triagem</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Impedimentos Temporários */}
        {activeTab === 'temporarios' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-900 mb-6">
              Situações passageiras em que você deve aguardar um período determinado antes de realizar a doação. O prazo visa resguardar a sua saúde e a qualidade dos hemocomponentes.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ELIGIBILITY_RULES.temporaryBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-charcoal mb-1">
                      {block.cause}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {block.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Impedimentos Definitivos */}
        {activeTab === 'definitivos' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200 text-xs sm:text-sm text-rose-900 mb-6">
              Condições clínicas específicas que, segundo as diretrizes de segurança transfusional do Ministério da Saúde e da OMS, impedem permanentemente a doação para garantir o risco zero ao receptor.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ELIGIBILITY_RULES.permanentBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-rose-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-charcoal mb-1">
                      {block.cause}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Self-check reminder card */}
        <div className="mt-12 p-6 sm:p-8 bg-brand-roseBg rounded-3xl border border-brand-burgundy/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-burgundy text-white flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-brand-charcoal mb-1">
                Está em dúvida se o seu caso permite a doação?
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted">
                Antes de sair de casa, você pode entrar em contato com a equipe da Santa Casa pelo telefone <strong>(11) 4752-9999</strong> ou consultar a página oficial do Ministério da Saúde.
              </p>
            </div>
          </div>

          <a
            href="https://www.gov.br/saude/pt-br/composicao/saes/doacao-de-sangue"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-brand-burgundy hover:bg-brand-red text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap"
          >
            Página do Ministério da Saúde ↗
          </a>
        </div>

      </div>
    </section>
  );
};
