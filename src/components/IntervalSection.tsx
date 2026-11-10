import React from 'react';
import { INTERVALS_INFO } from '../data/content';
import { Calendar, Repeat, ShieldCheck, Heart, AlertCircle } from 'lucide-react';

export const IntervalSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-offwhite relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-4 border border-brand-burgundy/15 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-brand-red" />
            <span>Periodicidade e Segurança Biológica</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Qual o intervalo entre as doações?
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            O corpo humano repõe o volume de líquidos em menos de 24 horas, mas as hemácias e o ferro necessitam de períodos específicos para atingirem níveis ótimos de segurança.
          </p>
        </div>

        {/* Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          
          {/* Card Homens */}
          <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Doador Masculino
                </span>
                <Repeat className="w-5 h-5 text-blue-600" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-brand-charcoal mb-4">
                Homens
              </h3>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-brand-muted">Intervalo Mínimo</span>
                    <strong className="text-2xl font-display font-black text-brand-charcoal">60 dias</strong>
                  </div>
                  <span className="text-xs text-brand-muted bg-white px-2.5 py-1 rounded-lg border">entre coletas</span>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-brand-muted">Limite Máximo Anual</span>
                    <strong className="text-2xl font-display font-black text-brand-burgundy">Até 4 vezes</strong>
                  </div>
                  <span className="text-xs text-brand-muted bg-white px-2.5 py-1 rounded-lg border">em 12 meses</span>
                </div>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed">
                {INTERVALS_INFO.men.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border flex items-center gap-2 text-xs text-blue-800 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Proteção integral das reservas hematológicas</span>
            </div>
          </div>

          {/* Card Mulheres */}
          <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 to-brand-red" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                  Doadora Feminina
                </span>
                <Heart className="w-5 h-5 text-brand-red" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-brand-charcoal mb-4">
                Mulheres
              </h3>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-brand-muted">Intervalo Mínimo</span>
                    <strong className="text-2xl font-display font-black text-brand-charcoal">90 dias</strong>
                  </div>
                  <span className="text-xs text-brand-muted bg-white px-2.5 py-1 rounded-lg border">entre coletas</span>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-brand-muted">Limite Máximo Anual</span>
                    <strong className="text-2xl font-display font-black text-brand-burgundy">Até 3 vezes</strong>
                  </div>
                  <span className="text-xs text-brand-muted bg-white px-2.5 py-1 rounded-lg border">em 12 meses</span>
                </div>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed">
                {INTERVALS_INFO.women.description} O intervalo ligeiramente maior preserva o estoque natural de ferro consumido pelo ciclo menstrual.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border flex items-center gap-2 text-xs text-brand-red font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Respeito ao ciclo fisiológico feminino</span>
            </div>
          </div>

        </div>

        {/* Observation note */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-brand-border text-xs text-brand-muted text-center flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-brand-burgundy shrink-0" />
          <span>
            {INTERVALS_INFO.notes} Em coletas especiais por aférese (ex: apenas plaquetas), os intervalos podem ser diferentes e serão informados pela equipe médica.
          </span>
        </div>

      </div>
    </section>
  );
};
