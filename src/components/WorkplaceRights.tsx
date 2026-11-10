import React from 'react';
import { WORKPLACE_RIGHTS_INFO } from '../data/content';
import { Briefcase, FileCheck, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

export const WorkplaceRights: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-roseBg text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-4 border border-brand-burgundy/15">
            <Briefcase className="w-3.5 h-3.5 text-brand-red" />
            <span>Legislação Trabalhista Brasileira</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Direito à ausência remunerada no trabalho
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            A legislação federal reconhece o valor inestimável da doação de sangue e garante proteção salarial para o trabalhador registrado sob a CLT.
          </p>
        </div>

        {/* Feature Box with CLT Highlight */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-offwhite via-white to-brand-roseBg/30 rounded-3xl p-6 sm:p-10 border border-brand-border shadow-elevated">
          
          {/* Main Legal Quote */}
          <div className="border-l-4 border-brand-red pl-5 sm:pl-6 py-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red block mb-1">
              {WORKPLACE_RIGHTS_INFO.article}
            </span>
            <blockquote className="font-display text-xl sm:text-2xl font-bold text-brand-charcoal leading-snug">
              “{WORKPLACE_RIGHTS_INFO.summary}”
            </blockquote>
          </div>

          {/* 4 Practical Steps */}
          <h3 className="text-xs font-bold text-brand-burgundy uppercase tracking-wider mb-4 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-brand-red" />
            <span>Como exercer esse direito na prática:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {WORKPLACE_RIGHTS_INFO.rules.map((rule, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-brand-border shadow-sm">
                <h4 className="font-display font-bold text-sm text-brand-charcoal mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-burgundy shrink-0" />
                  <span>{rule.step}</span>
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted pl-6 leading-relaxed">
                  {rule.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Important Clarification Alert */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 mb-8 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-amber-950 font-bold mb-1">
                Atenção ao detalhe crucial: Não é uma folga a cada doação.
              </strong>
              <span>
                A Consolidação das Leis do Trabalho estabelece a dispensa remunerada para <strong>um dia por período de 12 meses de trabalho</strong>. Caso você doe 3 ou 4 vezes no mesmo ano, as doações excedentes são voluntárias e deverão ser alinhadas previamente com a sua empresa ou realizadas em horários fora da sua escala de trabalho.
              </span>
            </div>
          </div>

          {/* Planalto Direct Official Link Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border">
            <span className="text-xs text-brand-muted text-center sm:text-left">
              Consulte o Decreto-Lei nº 5.452/1943 atualizado no site da Presidência da República.
            </span>
            <a
              href={WORKPLACE_RIGHTS_INFO.legislationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-charcoal hover:bg-black text-white text-xs font-bold transition-all shadow-sm shrink-0"
            >
              <span>Consultar Artigo 473 no Planalto</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
