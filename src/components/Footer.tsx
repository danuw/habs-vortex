import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <Logo size={60} />
          <div className="footer-brand-text">
            <p className="footer-name">HABS Vortex</p>
            <p className="footer-sub">VEX IQ Robotics Team</p>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Pages</p>
          <Link to="/">Home</Link>
          <Link to="/team">Meet the Team</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/sponsor">Sponsor Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Contact</p>
          <p className="footer-role">Team Captain</p>
          <a
            href="mailto:zbenitah199929@habselstree.org.uk"
            className="footer-email"
          >
            zbenitah199929@habselstree.org.uk
          </a>
        </div>

      </div>
      <div className="footer-bar">
        <p>&copy; {new Date().getFullYear()} HABS Vortex &mdash; Haberdashers&rsquo; Elstree School</p>
      </div>
    </footer>
  );
}
