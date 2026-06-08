const MEMBERS = [
  { name: 'Zach Benitah',   role: 'Team Captain',              photo: null },
  { name: 'Alex Morgan',    role: 'Builder',                    photo: null },
  { name: 'Jamie Ellis',    role: 'Builder',                    photo: null },
  { name: 'Sam Patel',      role: 'Coder',                     photo: null },
  { name: 'Chris Nakamura', role: 'Sponsorships / Notebooker', photo: null },
  { name: 'Jordan Clarke',  role: 'Driver / Notebooker',       photo: null },
] as const;

const ROLE_COLORS: Record<string, string> = {
  'Team Captain':              '#9dc928',
  'Builder':                   '#4a7fc1',
  'Coder':                     '#7b6de0',
  'Sponsorships / Notebooker': '#e07b3a',
  'Driver / Notebooker':       '#3ab8e0',
};

function PhotoPlaceholder() {
  return (
    <div className="photo-placeholder">
      <svg viewBox="0 0 80 80" width="52" height="52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="40" cy="28" r="19" fill="#2a4a7a" />
        <ellipse cx="40" cy="75" rx="29" ry="19" fill="#2a4a7a" />
      </svg>
      <span>Photo coming soon</span>
    </div>
  );
}

export default function Team() {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Meet the Team</h1>
        <p>The people powering HABS Vortex &mdash; builders, coders, and competitors.</p>
      </section>

      <section className="section-wrap">
        <div className="team-grid">
          {MEMBERS.map(({ name, role, photo }) => (
            <div className="team-card" key={name}>
              <div className="team-photo-wrap">
                {photo
                  ? <img src={photo} alt={name} className="team-photo" />
                  : <PhotoPlaceholder />
                }
              </div>
              <div className="team-info">
                <h3 className="team-name">{name}</h3>
                <span
                  className="role-badge"
                  style={{ background: ROLE_COLORS[role] ?? '#4a7fc1' }}
                >
                  {role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
