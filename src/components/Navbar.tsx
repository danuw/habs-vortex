import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Meet the Team' },
  { to: '/sponsor', label: 'Sponsor Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Logo size={46} />
        <span className="navbar-title">HABS Vortex</span>
      </div>

      <button
        className={`burger${open ? ' burger--open' : ''}`}
        aria-label="Toggle navigation"
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links${open ? ' nav-links--open' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
