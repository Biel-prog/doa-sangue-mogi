import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactSection } from './components/ImpactSection';
import { ProcessSteps } from './components/ProcessSteps';
import { EligibilitySection } from './components/EligibilitySection';
import { IntervalSection } from './components/IntervalSection';
import { WorkplaceRights } from './components/WorkplaceRights';
import { PreparationChecklist } from './components/PreparationChecklist';
import { LocationsSection } from './components/LocationsSection';
import { FaqSection } from './components/FaqSection';
import { OfficialSources } from './components/OfficialSources';
import { CampaignBanner } from './components/CampaignBanner';
import { Footer } from './components/Footer';
import { DeveloperContactBadge } from './components/DeveloperContactBadge';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-offwhite text-brand-charcoal selection:bg-brand-red selection:text-white font-sans antialiased">
      {/* Dynamic Header */}
      <Header />

      {/* Main Semantic Landmark */}
      <main id="conteudo-principal" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Impact Section: Até 4 vidas & Componentes */}
        <ImpactSection />

        {/* 3. Process Steps: As 5 etapas da doação */}
        <ProcessSteps />

        {/* 4. Eligibility Section: Quem pode doar & Impedimentos */}
        <EligibilitySection />

        {/* 5. Interval Section: Homens (60d/4x) vs Mulheres (90d/3x) */}
        <IntervalSection />

        {/* 6. Workplace Rights: CLT Artigo 473, IV */}
        <WorkplaceRights />

        {/* 7. Checklist Orientativo Pré-Doação */}
        <PreparationChecklist />

        {/* 8. Central Section: Onde Doar em Mogi das Cruzes (Mapa + Unidades) */}
        <LocationsSection />

        {/* 9. FAQ: 11 Perguntas Frequentes */}
        <FaqSection />

        {/* 10. Official Sources: Links governamentais e hospitalares */}
        <OfficialSources />

        {/* 11. University Extension Campaign Banner (UMC & Cartaz Oficial) */}
        <CampaignBanner />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Floating Developer WhatsApp Contact Badge */}
      <DeveloperContactBadge />
    </div>
  );
};

export default App;
