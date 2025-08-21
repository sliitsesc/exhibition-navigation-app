import React from 'react';

type ZoneCardData = {
  letter: string;
  label: string;
  color: string;
};

const zones: ZoneCardData[] = [
  { letter: 'A', label: 'ZONE A', color: '#8BC34A' },
  { letter: 'B', label: 'ZONE B', color: '#FF8A80' },
  { letter: 'C', label: 'ZONE C', color: '#80D8FF' },
  { letter: 'D', label: 'ZONE D', color: '#FFE57F' },
  { letter: 'E', label: 'ZONE E', color: '#EA80FC' },
  { letter: 'F', label: 'ZONE F', color: '#B9F6CA' },
  { letter: 'G', label: 'ZONE G', color: '#FFAB91' },
];

export default function ZoneScreen() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#008080', padding: 16, textAlign: 'center', color: 'white' }}>
        <h2>ALL ZONES</h2>
      </header>
      <main style={{ flex: 1, padding: 12 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}
        >
          {zones.map((zone) => (
            <ZoneCard key={zone.letter} data={zone} />
          ))}
        </div>
      </main>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          background: '#f5f5f5',
          padding: 8,
          borderTop: '1px solid #ddd',
        }}
      >
        <NavItem icon="📷" label="SCAN QR" selected />
        <NavItem icon="🧭" label="EXPLORE" />
        <NavItem icon="❓" label="HELP" />
      </nav>
    </div>
  );
}

function ZoneCard({ data }: { data: ZoneCardData }) {
  return (
    <div
      style={{
        background: data.color,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 'bold' }}>{data.letter}</div>
      <div style={{ height: 8 }} />
      <div style={{ fontSize: 16 }}>{data.label}</div>
    </div>
  );
}

type NavItemProps = {
  icon: string;
  label: string;
  selected?: boolean;
};

function NavItem({ icon, label, selected }: NavItemProps) {
  return (
    <div style={{
      color: selected ? '#008080' : '#333',
      fontWeight: selected ? 'bold' : 'normal',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 18,
    }}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}