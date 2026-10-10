"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { stations, stationCities, type Station } from "@/lib/data/stations";

const toneByType: Record<Station["type"], string> = {
  "Recharge rapide": "#D99A3A",
  "Point de swap": "#1E8F6F",
  "Recharge + Swap": "#4B4FDB",
};

function markerIcon(station: Station) {
  const color = toneByType[station.type];
  const opacity = station.status === "En service" ? 1 : 0.45;
  return L.divIcon({
    className: "",
    html: `<span style="display:block;width:16px;height:16px;border-radius:50%;background:${color};opacity:${opacity};border:2px solid #F7F5F0;box-shadow:0 1px 4px rgba(0,0,0,.4)"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

export function StationMap() {
  const [cityFilter, setCityFilter] = useState<string>("Toutes");

  const filtered = cityFilter === "Toutes" ? stations : stations.filter((s) => s.city === cityFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {["Toutes", ...stationCities].map((c) => (
          <button
            key={c}
            onClick={() => setCityFilter(c)}
            className={`rounded-[3px] px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              cityFilter === c ? "bg-nuit text-ink-dark" : "bg-pierre-2 text-ink-light-muted border border-rule-light"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="rounded-md overflow-hidden border border-rule-light h-[480px]">
        <MapContainer
          center={[6.5, -4]}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filtered.map((s) => (
            <Marker key={s.id} position={[s.lat, s.lng]} icon={markerIcon(s)}>
              <Popup>
                <div className="font-sans">
                  <div className="font-bold">{s.name}</div>
                  <div className="text-xs mt-0.5">{s.address}</div>
                  <div className="text-xs mt-1">{s.type} · {s.slots} points · {s.hours}</div>
                  <div className="text-xs mt-1 font-semibold">{s.status}</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="flex flex-wrap gap-5 mt-4 text-xs text-ink-light-muted">
        {(Object.keys(toneByType) as Station["type"][]).map((t) => (
          <div key={t} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: toneByType[t] }} />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
