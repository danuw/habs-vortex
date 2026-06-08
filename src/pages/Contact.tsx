export default function Contact() {
  return (
    <div className="page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>
          Got a question, want to collaborate, or just want to know more about what we do?
          We&rsquo;d love to hear from you.
        </p>
      </section>

      <section className="section-wrap">
        <div className="contact-grid">

          {/* Primary contact */}
          <div className="contact-card contact-card--primary">
            <div className="contact-avatar" aria-hidden="true">
              <svg viewBox="0 0 80 80" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="28" r="19" fill="#9dc928" />
                <ellipse cx="40" cy="75" rx="29" ry="19" fill="#9dc928" />
              </svg>
            </div>
            <span className="contact-role-badge">Team Captain</span>
            <h3>Zekey Benitah</h3>
            <p>
              For all enquiries &mdash; sponsorships, competition invitations, media requests,
              or just to say hello &mdash; reach out to our Team Captain directly.
            </p>
            <a
              href="mailto:zbenitah199929@habselstree.org.uk"
              className="contact-email-link"
            >
              zbenitah199929@habselstree.org.uk
            </a>
            <a
              href="mailto:zbenitah199929@habselstree.org.uk"
              className="btn btn-primary contact-btn"
            >
              Send an Email
            </a>
          </div>

          {/* Info panel */}
          <div className="info-panel">
            <div className="info-block">
              <h3>&#x1F4CD; Based At</h3>
              <p>Haberdashers&rsquo; Elstree School<br />Elstree, Hertfordshire</p>
            </div>
            <div className="info-block">
              <h3>&#x1F3C6; Competing In</h3>
              <p>VEX IQ Robotics — Regional &amp; National Tournaments</p>
            </div>
            <div className="info-block">
              <h3>&#x23F1; Response Time</h3>
              <p>We aim to reply within <strong>48 hours</strong> during the school term.</p>
            </div>
            <div className="info-block">
              <h3>&#x1F4B0; Interested in Sponsoring?</h3>
              <p>
                Visit our <a href="/sponsor" className="text-link">Sponsor Us</a> page to
                explore our tier packages, then drop us an email &mdash; we&rsquo;ll handle the rest.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
