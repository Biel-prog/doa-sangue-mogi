import React, { useState } from 'react';
import { BLOOD_UNITS, USEFUL_PHONES } from '../data/content';
import { MapComponent } from './MapComponent';
import { MapPin, Phone, Calendar, ExternalLink, Navigation, Clock, Info } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(BLOOD_UNITS[0].id);

  return (
    <section id="onde-doar" className="py-20 bg-brand-offwhite relative overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-burgundy text-white font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 fill-white" />
            <span>Guia Local Oficial • Mogi das Cruzes</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-charcoal tracking-tight mb-5">
            Onde doar em Mogi das Cruzes?
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Consulte abaixo as duas instituições identificadas em Mogi das Cruzes habilitadas com estrutura para coleta de sangue. 
            Verifique as instruções de agendamento e faça contato antes do deslocamento.
          </p>

          {/* Verification Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border text-xs text-brand-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Dados checados em: <strong>Novembro de 2026</strong></span>
          </div>
        </div>

        {/* Essential Responsibility Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3.5 text-xs sm:text-sm text-brand-muted max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-brand-burgundy shrink-0 mt-0.5" />
          <div>
            <strong className="block text-brand-charcoal font-bold mb-1">
              Orientações sobre as unidades de atendimento:
            </strong>
            <span>
              Apenas os estabelecimentos abaixo foram verificados como pontos de coleta de doadores voluntários em Mogi das Cruzes. 
              Outros hospitais da cidade utilizam sangue para transfusão de pacientes internados, mas <strong>não possuem posto de coleta aberta ao público</strong>. Sempre ligue antes de comparecer para confirmar horários vigentes.
            </span>
          </div>
        </div>

        {/* Interactive Layout: Map + Unit Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Interactive Leaflet Map */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-semibold text-brand-muted px-1">
              <span>Mapa interativo de localização (OpenStreetMap)</span>
              <span>Clique no marcador ou selecione a unidade</span>
            </div>
            <MapComponent
              units={BLOOD_UNITS}
              selectedUnitId={selectedUnitId}
              onSelectUnit={(id) => setSelectedUnitId(id)}
            />
          </div>

          {/* Right Column: Detailed Cards for each Unit */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {BLOOD_UNITS.map((unit) => {
              const isSelected = unit.id === selectedUnitId;
              return (
                <div
                  key={unit.id}
                  onClick={() => setSelectedUnitId(unit.id)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-brand-burgundy shadow-elevated ring-2 ring-brand-burgundy/10'
                      : 'bg-white/80 border-brand-border hover:bg-white hover:border-brand-burgundy/40 shadow-sm'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-red mb-1">
                        {unit.subname}
                      </div>
                      <h3 className="font-display font-black text-xl text-brand-charcoal leading-snug">
                        {unit.name}
                      </h3>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${
                        unit.appointmentRequired
                          ? 'bg-brand-roseBg text-brand-burgundy border border-brand-burgundy/20'
                          : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
                      }`}
                    >
                      {unit.appointmentStatusText}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-muted mb-3">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>
                      {unit.address} — {unit.neighborhood}, {unit.city}/{unit.state}
                      <span className="block text-[11px] text-neutral-400">CEP {unit.cep}</span>
                    </span>
                  </div>

                  {/* Telephone clickable */}
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-brand-burgundy mb-3">
                    <Phone className="w-4 h-4 text-brand-red shrink-0" />
                    <a
                      href={`tel:${unit.phoneClean}`}
                      className="hover:underline flex items-center gap-1.5"
                      title="Ligar para esta unidade"
                    >
                      <span>{unit.phone}</span>
                      <span className="text-[10px] font-semibold text-brand-muted bg-neutral-100 px-2 py-0.5 rounded-md">
                        Toque para ligar
                      </span>
                    </a>
                  </div>

                  {/* Hours & Schedule info */}
                  <div className="bg-neutral-50 rounded-2xl p-3.5 border border-neutral-200/70 text-xs text-brand-muted mb-4 space-y-1.5">
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-burgundy shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-brand-charcoal">Horário de funcionamento:</strong>{' '}
                        {unit.verifiedHours}
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-burgundy shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-brand-charcoal">Agendamento:</strong>{' '}
                        {unit.scheduleNotes}
                      </div>
                    </div>
                  </div>

                  {/* Operational Action Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={unit.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-brand-burgundy hover:bg-brand-red text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Rotas</span>
                    </a>

                    <a
                      href={`tel:${unit.phoneClean}`}
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-neutral-50 text-brand-burgundy text-xs font-bold text-center border border-brand-border flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-red" />
                      <span>Ligar</span>
                    </a>

                    <a
                      href={unit.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-neutral-50 text-brand-charcoal text-xs font-bold text-center border border-brand-border flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-muted" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Additional Useful Contacts in Mogi das Cruzes */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="font-display font-bold text-xl text-brand-charcoal mb-1">
              Canais diretos de informação e ouvidoria
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted">
              Telefones institucionais do município de Mogi das Cruzes e do Ministério da Saúde para esclarecimento de dúvidas e encaminhamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {USEFUL_PHONES.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-brand-offwhite border border-brand-border hover:border-brand-burgundy/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-brand-charcoal block mb-0.5">
                    {item.entity}
                  </span>
                  <span className="text-[11px] text-brand-muted block mb-3">
                    {item.purpose}
                  </span>
                </div>
                <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between">
                  <a
                    href={item.tel}
                    className="text-sm font-bold text-brand-burgundy hover:text-brand-red flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{item.phone}</span>
                  </a>
                  <span className="text-[10px] text-neutral-400">Ligação direta</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
