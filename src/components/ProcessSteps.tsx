import React from 'react';
import { DONATION_STEPS } from '../data/content';
import { UserCheck, Activity, ClipboardCheck, HeartHandshake, Coffee, Clock, ShieldCheck } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  UserCheck,
  Activity,
  ClipboardCheck,
  HeartHandshake,
  Coffee,
};

export const ProcessSteps: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-offwhite relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-4 border border-brand-burgundy/15 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-brand-red" />
            <span>Passo a Passo Seguro</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Como funciona a doação?
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Se você nunca doou sangue, saiba que o procedimento é simples, rápido e totalmente monitorado por profissionais de saúde. Todo o processo leva aproximadamente 40 a 50 minutos.
          </p>
        </div>

        {/* 5 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {DONATION_STEPS.map((step) => {
            const IconComponent = iconMap[step.iconName] || HeartHandshake;
            return (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-6 border border-brand-border shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number badge and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-2xl bg-brand-roseBg border border-brand-burgundy/20 text-brand-burgundy font-display font-black text-base flex items-center justify-center">
                      0{step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-neutral-50 text-brand-burgundy group-hover:bg-brand-burgundy group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="font-display font-bold text-lg text-brand-charcoal mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-red mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Footer with tip and duration */}
                <div className="pt-3 border-t border-brand-border/70 text-[11px] text-brand-charcoal/80 bg-neutral-50/70 -mx-6 -mb-6 p-4 rounded-b-3xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-brand-burgundy">Dica prática:</span>
                    {step.duration && (
                      <span className="text-[10px] bg-white px-2 py-0.5 rounded-full border border-neutral-200 font-medium">
                        {step.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-brand-muted">{step.tips}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Post-Donation Care Highlight Banner */}
        <div className="bg-gradient-to-r from-brand-burgundy to-brand-red rounded-3xl p-6 sm:p-8 text-white shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8">
              <div className="flex items-center gap-2 text-rose-200 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-rose-300" />
                <span>Cuidados Essenciais no Restante do Dia</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                O que fazer depois de sair da unidade?
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                Mantenha o curativo por pelo menos 4 horas no braço. Beba bastante água e líquidos ao longo do dia. 
                Evite praticar atividades físicas extenuantes, esportes pesados ou carregar peso com o braço utilizado na coleta.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20 text-xs">
                <strong className="block text-white mb-0.5">Tempo estimado na unidade:</strong>
                <span className="text-white/80">Aprox. 40 a 50 minutos (sujeito à demanda do dia)</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/20 text-xs">
                <strong className="block text-white mb-0.5">Volume seguro:</strong>
                <span className="text-white/80">Até cerca de 450 ml, recuperados naturalmente pelo corpo</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
