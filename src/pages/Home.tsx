import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-logo">
          <Logo size={210} />
        </div>
        <h1 className="hero-title">HABS Vortex</h1>
        <p className="hero-sub">VEX IQ Robotics Team</p>
        <p className="hero-tagline">Engineering the future &mdash; one robot at a time.</p>
        <div className="hero-cta">
          <Link to="/team" className="btn btn-primary">Meet the Team</Link>
          <Link to="/sponsor" className="btn btn-outline">Sponsor Us</Link>
        </div>
      </section>

      {/* ── About cards ── */}
      <section className="home-about">
        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">&#x1F916;</div>
            <h3>Who We Are</h3>
            <p>
              HABS Vortex is a competitive VEX IQ robotics team based at Haberdashers&rsquo; Boys' School.
              We design, build, code, and drive our robot to compete at regional competitions and, we hope, national and world competitions.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">&#x1F3C6;</div>
            <h3>Our Mission</h3>
            <p>
              We push the limits of student engineering &mdash; combining creative design, strategic
              programming, and relentless teamwork to perform on the Level Up field.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">&#x1F91D;</div>
            <h3>Partner With Us</h3>
            <p>
              Sponsoring HABS Vortex places your brand alongside a passionate, high-achieving team, who, depending on your Sponsorship Package, will publicise you at every chance we get.
              Explore our sponsorship tiers and help us build something amazing.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
