const TIERS = [
  {
    num: 1,
    label: 'Bronze',
    threshold: '£100+',
    color: '#4a7fc1',
    icon: '🏅',
    perks: [
      'Sponsor recognition on our team website blog',
      'Your name featured in our competition progress updates',
      'Recording of the team journey throughout the season',
    ],
  },
  {
    num: 2,
    label: 'Silver',
    threshold: '£500+',
    color: '#9dc928',
    icon: '🥈',
    perks: [
      'All Tier 1 benefits',
      'Your company logo on our team T-shirts',
      'Brand visibility at every regional and national event',
    ],
  },
  {
    num: 3,
    label: 'Gold',
    threshold: '£1,000+',
    color: '#e0a520',
    icon: '🥇',
    perks: [
      'All Tier 1 & 2 benefits',
      'Your logo on ALL team merchandise',
      'A live robot demonstration visit from our team',
      'Maximum exposure across every platform and event',
    ],
  },
] as const;

export default function Sponsor() {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Sponsor Us</h1>
        <p>
          Your support directly funds our robot, competition travel, and equipment.
          In return, we make sure your brand gets the recognition it deserves.
        </p>
      </section>

      {/* Tier cards */}
      <section className="section-wrap">
        <h2 className="section-title">Sponsorship Tiers</h2>
        <div className="tiers-grid">
          {TIERS.map(({ num, label, threshold, color, icon, perks }) => (
            <div
              className="tier-card"
              key={num}
              style={{ '--tc': color } as React.CSSProperties}
            >
              <div className="tier-head">
                <span className="tier-icon">{icon}</span>
                <div>
                  <p className="tier-label">{label}</p>
                  <p className="tier-amount">{threshold}</p>
                </div>
                <span className="tier-badge">Tier {num}</span>
              </div>
              <ul className="tier-perks">
                {perks.map(p => (
                  <li key={p}>
                    <span className="check">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Email CTA */}
      <section className="section-wrap">
        <div className="cta-card">
          <div className="cta-icon">&#x2709;&#xFE0F;</div>
          <h2>Ready to Partner With Us?</h2>
          <p>
            Email us to express your interest, choose your sponsorship tier, and start
            redeeming your benefits. We&rsquo;ll get back to you within 48 hours.
          </p>
          <a
            href="mailto:zbenitah199929@habselstree.org.uk"
            className="btn btn-primary"
          >
            Email Us to Sponsor
          </a>
          <p className="cta-email">zbenitah199929@habselstree.org.uk</p>
        </div>
      </section>
    </div>
  );
}
