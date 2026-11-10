import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { HelpCircle, ChevronDown, Search, MessageCircleQuestion } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="duvidas" className="py-20 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-roseBg text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-4 border border-brand-burgundy/15">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-brand-red" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Perguntas Frequentes
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Respostas diretas e acolhedoras para as dúvidas mais comuns de quem deseja doar sangue pela primeira vez em Mogi das Cruzes.
          </p>

          {/* Quick Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar dúvida (ex: tatuagem, jejum, agendar...)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-brand-offwhite border border-brand-border focus:bg-white focus:border-brand-burgundy focus:ring-2 focus:ring-brand-burgundy/10 text-sm text-brand-charcoal placeholder-neutral-400 outline-none transition-all shadow-sm"
              aria-label="Buscar pergunta frequente"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-brand-burgundy font-semibold p-1"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* FAQs list using semantic <details> and <summary> */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-brand-offwhite rounded-3xl border border-brand-border p-8">
            <HelpCircle className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
            <p className="text-brand-charcoal font-bold text-base mb-1">
              Nenhuma dúvida encontrada para "{searchQuery}"
            </p>
            <p className="text-xs text-brand-muted mb-4">
              Tente buscar por termos como "jejum", "trabalho", "tatuagem", "dor" ou "agendamento".
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-brand-burgundy hover:underline"
            >
              Ver todas as 11 perguntas frequentes
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, index) => (
              <details
                key={index}
                name="faq-accordion"
                className="group bg-brand-offwhite rounded-2xl border border-brand-border hover:border-brand-burgundy/30 transition-all duration-200 open:bg-white open:shadow-subtle open:border-brand-burgundy/40"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between p-5 sm:p-6 text-left font-display font-bold text-base sm:text-lg text-brand-charcoal group-open:text-brand-burgundy select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy rounded-2xl">
                  <span className="flex items-center gap-3 pr-4">
                    <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 group-open:scale-125 transition-transform" />
                    <span>{faq.question}</span>
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white border border-brand-border flex items-center justify-center shrink-0 group-open:rotate-180 group-open:bg-brand-burgundy group-open:text-white transition-all duration-200">
                    <ChevronDown className="w-4 h-4 text-brand-charcoal group-open:text-white" />
                  </div>
                </summary>

                <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed sm:pl-10 pr-6 border-t border-neutral-100 mt-1">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        )}

        {/* Bottom Direct Question Notice */}
        <div className="mt-12 text-center p-6 bg-brand-roseBg rounded-3xl border border-brand-burgundy/15">
          <p className="text-xs sm:text-sm text-brand-charcoal font-semibold mb-2">
            Não encontrou a resposta para a sua dúvida específica?
          </p>
          <p className="text-xs text-brand-muted mb-4 max-w-lg mx-auto">
            A equipe do Hemocentro Transfusão (Santa Casa de Mogi das Cruzes) atende pelo telefone para esclarecer casos particulares de saúde e medicações.
          </p>
          <a
            href="tel:1147529999"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-burgundy hover:bg-brand-red text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Ligue para (11) 4752-9999</span>
          </a>
        </div>

      </div>
    </section>
  );
};
