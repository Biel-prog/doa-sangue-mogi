import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Clock, Users, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-roseBg/70 via-brand-offwhite to-white">
      {/* Subtle organic background mesh lights */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-burgundy/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Context Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-burgundy/15 shadow-sm text-xs font-bold text-brand-burgundy mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-red animate-ping" />
              <span>Conscientização Comunitária • Mogi das Cruzes / SP</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-charcoal tracking-tight leading-[1.08] mb-6">
              Uma doação pode{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-burgundy via-brand-red to-rose-600">
                mudar histórias.
              </span>
              <br />
              E salvar vidas.
            </h1>

            {/* Complementary Text */}
            <p className="text-base sm:text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl mb-8">
              Um gesto simples de solidariedade pode fazer a diferença para quem mais precisa. Descubra como doar sangue com segurança, conheça os critérios e encontre exatamente onde doar em Mogi das Cruzes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#onde-doar"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-burgundy hover:bg-brand-red text-white font-bold text-base shadow-elevated shadow-brand-burgundy/25 hover:shadow-brand-red/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Quero ser doador</span>
                <Heart className="w-5 h-5 fill-white" />
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-neutral-50 text-brand-burgundy font-bold text-base border border-brand-border hover:border-brand-burgundy/30 shadow-sm transition-all duration-200"
              >
                <span>Entenda como funciona</span>
                <ArrowRight className="w-4 h-4 text-brand-burgundy" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border/80 w-full text-brand-charcoal">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-tight">Até 4 Vidas</span>
                  <span className="text-[11px] text-brand-muted">por bolsa coletada</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-tight">100% Descartável</span>
                  <span className="text-[11px] text-brand-muted">segurança absoluta</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-xl bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-tight">Aprox. 40 min</span>
                  <span className="text-[11px] text-brand-muted">permanência total</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Showcase with Real Image and Contextual Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-burgundy/20 to-brand-red/10 rounded-3xl transform rotate-2 scale-[1.02] filter blur-sm -z-10" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=900&q=80"
                  alt="Profissional de saúde acolhendo doador de sangue com respeito e segurança"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center filter saturate-[1.05]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Dark gradient overlay for bottom text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 inset-x-5 text-white">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                    <span>Solidariedade em Ação</span>
                  </div>
                  <p className="font-display text-lg font-bold leading-snug">
                    "O sangue não pode ser fabricado. Cada gota doada vem do coração de alguém."
                  </p>
                  <p className="text-xs text-white/80 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-brand-red" />
                    Atendimento nos pontos de coleta de Mogi das Cruzes
                  </p>
                </div>
              </div>

              {/* Floating Pill Accent: Santa Casa & Centrho */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-elevated border border-brand-border flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-10 h-10 rounded-xl bg-brand-roseBg border border-brand-burgundy/20 flex items-center justify-center text-brand-burgundy font-bold text-sm">
                  SP
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-brand-muted uppercase">Locais Oficiais</span>
                  <span className="block text-xs font-bold text-brand-charcoal">Santa Casa & Centrho</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
