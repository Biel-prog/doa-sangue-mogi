import React, { useState } from 'react';
import { CheckSquare, Square, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  detail: string;
}

const ITEMS: ChecklistItem[] = [
  {
    id: 'doc',
    label: 'Documento oficial original com foto em mãos',
    detail: 'RG, CNH, Passaporte ou Carteira de Trabalho (física ou aplicativo digital oficial).',
  },
  {
    id: 'sono',
    label: 'Ter dormido no mínimo 6 horas nas últimas 24h',
    detail: 'Estar descansado previne sensação de fraqueza e tontura durante e após a coleta.',
  },
  {
    id: 'alimentacao',
    label: 'Estar alimentado (evitando gorduras pesadas)',
    detail: 'Nunca compareça em jejum. Evite frituras, queijos amarelos e carnes gordurosas 3h antes.',
  },
  {
    id: 'peso',
    label: 'Pesar pelo menos 50 kg',
    detail: 'Requisito estrito de segurança biológica para o volume retirado (450 ml).',
  },
  {
    id: 'saude',
    label: 'Sem sintomas de gripe, febre ou infecção nos últimos 7 a 14 dias',
    detail: 'O organismo deve estar em pleno estado de equilíbrio no momento da coleta.',
  },
  {
    id: 'alcool',
    label: 'Não ter ingerido bebidas alcoólicas nas últimas 12 horas',
    detail: 'O álcool afeta a viscosidade e o perfil plasmático do sangue.',
  },
];

export const PreparationChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [id: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / ITEMS.length) * 100);

  return (
    <section className="py-16 bg-white border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-offwhite to-brand-roseBg/40 rounded-3xl p-6 sm:p-10 border border-brand-border shadow-subtle">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-burgundy/10 text-brand-burgundy font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                <span>Autoavaliação de Preparo Pessoal</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-charcoal">
                Checklist Orientativo Antes de Sair de Casa
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                Marque os itens que você já conferiu para ter uma ida tranquila ao posto de coleta.
              </p>
            </div>

            {/* Progress circle / badge */}
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-brand-border shadow-sm shrink-0">
              <div className="text-right">
                <span className="block text-[11px] font-bold text-brand-muted uppercase">Progresso</span>
                <span className="text-lg font-black text-brand-burgundy font-display">{progressPercent}% Concluído</span>
              </div>
              <div className="w-10 h-10 rounded-full border-4 border-neutral-100 border-t-brand-red flex items-center justify-center font-bold text-xs text-brand-charcoal">
                {completedCount}/{ITEMS.length}
              </div>
            </div>
          </div>

          {/* Checklist items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {ITEMS.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                      : 'bg-white border-brand-border hover:border-brand-burgundy/30'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 shrink-0 text-emerald-700"
                    aria-label={item.label}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Square className="w-5 h-5 text-neutral-300" />
                    )}
                  </button>
                  <div>
                    <span className={`block text-xs sm:text-sm font-bold ${isChecked ? 'text-emerald-950' : 'text-brand-charcoal'}`}>
                      {item.label}
                    </span>
                    <span className="block text-[11px] text-brand-muted mt-0.5 leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress message and disclaimer */}
          <div className="p-4 rounded-2xl bg-white border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-brand-muted text-center sm:text-left">
              <AlertCircle className="w-4 h-4 text-brand-burgundy shrink-0" />
              <span>
                Este checklist é apenas uma ferramenta de apoio prático. A decisão final sobre a doação é prerrogativa exclusiva da equipe clínica do hemocentro.
              </span>
            </div>

            <a
              href="#onde-doar"
              className="px-5 py-2.5 rounded-full bg-brand-burgundy hover:bg-brand-red text-white text-xs font-bold transition-all shadow-sm shrink-0 flex items-center gap-1.5"
            >
              <span>Ver Unidades de Coleta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
