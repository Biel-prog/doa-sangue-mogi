import React, { useState } from 'react';
import { GraduationCap, Eye, Download, CheckCircle, Heart, X } from 'lucide-react';

export const CampaignBanner: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white relative overflow-hidden border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-roseBg via-white to-brand-offwhite rounded-3xl p-6 sm:p-10 border border-brand-burgundy/20 shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Extension context */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-burgundy text-white text-xs font-bold uppercase tracking-wider mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>Projeto de Extensão Universitária</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-charcoal mb-3 leading-tight">
                  Iniciativa Acadêmica e Cidadania em Prol de Mogi das Cruzes
                </h3>

                <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                  Este portal informativo foi concebido no âmbito do <strong>Projeto de Extensão Universitária da Universidade UMC</strong>, pelo curso de <strong>Análise e Desenvolvimento de Sistemas</strong>, com autoria e desenvolvimento de <strong>Gabriel Rodrigues</strong>. O objetivo central é unir tecnologia, design editorial e compromisso social para suprir a demanda contínua de sangue em nossa cidade.
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
                  <div className="flex items-center gap-2.5 text-xs text-brand-charcoal font-semibold bg-white p-3 rounded-xl border border-brand-border">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Desenvolvido por Gabriel Rodrigues</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-brand-charcoal font-semibold bg-white p-3 rounded-xl border border-brand-border">
                    <Heart className="w-4 h-4 text-brand-red shrink-0" />
                    <span>100% Voluntário e Educativo</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-burgundy hover:bg-brand-red text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Visualizar Cartaz Oficial da Campanha</span>
                  </button>
                  <a
                    href="/images/cartaz-campanha.jpg"
                    download="cartaz-campanha-doacao-mogi.jpg"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-brand-charcoal text-xs font-bold border border-brand-border transition-all"
                  >
                    <Download className="w-4 h-4 text-brand-muted" />
                    <span>Baixar Imagem</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Poster Preview Thumbnail */}
              <div className="lg:col-span-4 flex justify-center">
                <div
                  onClick={() => setModalOpen(true)}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-elevated border-4 border-white max-w-[220px] transition-transform duration-300 hover:scale-105"
                  title="Clique para ampliar o cartaz"
                >
                  <img
                    src="/images/cartaz-campanha.jpg"
                    alt="Cartaz oficial da campanha Doe Sangue Salve Vidas - UMC Mogi das Cruzes"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5 backdrop-blur-[2px]">
                    <Eye className="w-4 h-4" />
                    <span>Ampliar</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Modal for viewing the poster */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-neutral-100">
              <span className="font-display font-bold text-sm text-brand-charcoal">
                Cartaz da Campanha • UMC Mogi das Cruzes
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full text-neutral-400 hover:text-brand-charcoal hover:bg-neutral-100 transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto rounded-xl flex justify-center bg-neutral-900">
              <img
                src="/images/cartaz-campanha.jpg"
                alt="Cartaz da Campanha Doe Sangue Salve Vidas"
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-brand-muted">
              <span>Curso de Análise e Desenvolvimento de Sistemas</span>
              <a
                href="/images/cartaz-campanha.jpg"
                download="cartaz-campanha-doacao-mogi.jpg"
                className="font-bold text-brand-burgundy hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Salvar Arquivo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
