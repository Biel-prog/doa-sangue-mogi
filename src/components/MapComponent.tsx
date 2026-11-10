import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import type { BloodUnit } from '../types';

interface MapComponentProps {
  units: BloodUnit[];
  selectedUnitId: string;
  onSelectUnit: (id: string) => void;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  units,
  selectedUnitId,
  onSelectUnit,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Check if map already exists
    if (!mapInstanceRef.current) {
      // Center between Santa Casa (-23.52627) and Centrho (-23.51862)
      const centerLat = -23.5224;
      const centerLng = -46.1911;

      const map = L.map(mapContainerRef.current, {
        center: [centerLat, centerLng],
        zoom: 14,
        zoomControl: true,
        scrollWheelZoom: false, // Prevents unwanted scroll trapping
      });

      // CartoDB Positron clean map tiles (high contrast, non-distracting for health portals)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      mapInstanceRef.current = map;

      // Create custom SVG markers
      units.forEach((unit) => {
        const customIcon = L.divIcon({
          className: 'custom-blood-marker',
          html: `
            <div style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 44px;
              height: 44px;
              background: linear-gradient(135deg, #B3263A 0%, #7F1728 100%);
              border: 3px solid #FFFFFF;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 8px 24px rgba(127, 23, 40, 0.4);
              cursor: pointer;
              transition: transform 0.2s ease, box-shadow 0.2s ease;
            ">
              <svg style="transform: rotate(45deg); width: 22px; height: 22px; color: white;" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          `,
          iconSize: [44, 44],
          iconAnchor: [22, 44],
          popupAnchor: [0, -42],
        });

        const marker = L.marker(unit.coordinates, { icon: customIcon }).addTo(map);

        const popupContent = `
          <div style="min-width: 210px; padding: 4px;">
            <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #B3263A; letter-spacing: 0.05em; margin-bottom: 2px;">
              Ponto Oficial de Coleta
            </div>
            <div style="font-weight: 700; font-size: 15px; color: #1A1D20; margin-bottom: 4px; line-height: 1.2;">
              ${unit.name}
            </div>
            <div style="font-size: 12px; color: #62666D; margin-bottom: 8px;">
              ${unit.address} • ${unit.neighborhood}
            </div>
            <div style="font-size: 11px; font-weight: 600; color: #7F1728; background: #FDF2F4; padding: 4px 8px; border-radius: 6px; margin-bottom: 10px; display: inline-block;">
              ${unit.appointmentStatusText}
            </div>
            <div style="display: flex; gap: 6px;">
              <a href="${unit.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="flex: 1; text-align: center; background: #7F1728; color: white; padding: 6px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; text-decoration: none;">
                Rotas no Maps
              </a>
              <a href="tel:${unit.phoneClean}" style="background: #F3E8E8; color: #7F1728; padding: 6px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; text-decoration: none;">
                Ligar
              </a>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);

        marker.on('click', () => {
          onSelectUnit(unit.id);
        });

        markersRef.current[unit.id] = marker;
      });
    }

    return () => {
      // Cleanup on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersRef.current = {};
      }
    };
  }, [units, onSelectUnit]);

  // Pan to selected unit when selection changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const selected = units.find((u) => u.id === selectedUnitId);
    if (selected) {
      mapInstanceRef.current.setView(selected.coordinates, 15, {
        animate: true,
        duration: 0.8,
      });
      const marker = markersRef.current[selected.id];
      if (marker && !marker.isPopupOpen()) {
        marker.openPopup();
      }
    }
  }, [selectedUnitId, units]);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-brand-border shadow-elevated bg-white">
      <div ref={mapContainerRef} className="w-full h-full z-0" aria-label="Mapa das unidades de doação de sangue em Mogi das Cruzes" />
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-semibold text-brand-charcoal shadow-sm border border-brand-border flex items-center gap-2 pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse"></span>
        2 Unidades em Mogi das Cruzes
      </div>
    </div>
  );
};
