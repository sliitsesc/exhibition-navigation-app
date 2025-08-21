import React from 'react';

type Stall = {
  title: string;
  subtitle: string;
  zone: string;
  stallNumber: string;
};

const stalls: Stall[] = [
  {
    title: 'Faculty of Engineering',
    subtitle: 'University of Sri Jayawardenapura',
    zone: 'Zone A',
    stallNumber: '77',
  },
  {
    title: 'Faculty of Engineering and Sciences',
    subtitle: 'University of Sri Jayawardenapura',
    zone: 'Zone A',
    stallNumber: '08',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur ad...',
    subtitle: 'Lorem ipsum dolor sit amet, conse...',
    zone: 'Zone A',
    stallNumber: '01',
  },
  {
    title: 'Chess Club Stall',
    subtitle: 'Thurstan College',
    zone: 'Zone A',
    stallNumber: '77',
  },
  {
    title: 'Robotics Showcase and Competition',
    subtitle: 'University of Sri Jayawardenapura',
    zone: 'Zone A',
    stallNumber: '01',
  },
];

export default function ZoneAStalls() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#008080', padding: 16, textAlign: 'center', color: 'white' }}>
        <h2>Zone A Stalls</h2>
      </header>

      <main style={{ flex: 1, padding: 12 }}>
        {stalls.map((stall, index) => (
          <div
            key={index}
            style={{
              background: '#f9f9f9',
              padding: 12,
              marginBottom: 12,
              borderRadius: 8,
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h3 style={{ margin: '0 0 4px' }}>{stall.title}</h3>
            <p style={{ margin: '0 0 4px', color: '#555' }}>{stall.subtitle}</p>
            <p style={{ margin: 0, fontSize: 14, color: '#888' }}>
              {stall.zone}, Stall {stall.stallNumber}
            </p>
          </div>
        ))}
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

type NavItemProps = {
  icon: string;
  label: string;
  selected?: boolean;
};

function NavItem({ icon, label, selected }: NavItemProps) {
  return (
    <div
      style={{
        color: selected ? '#008080' : '#333',
        fontWeight: selected ? 'bold' : 'normal',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 18,
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}