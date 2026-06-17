import Link from 'next/link';

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">Fornace</Link>
          <p>Artisan wood-fired pizza, crafted with two centuries of Italian tradition and an obsessive attention to the quality of every ingredient.</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/story">Our Story</Link></li>
            <li><Link href="/reservations">Reservations</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          <ul>
            <li><a href="#">Tue – Fri &nbsp; 12:00 – 15:00</a></li>
            <li><a href="#">Tue – Sun &nbsp; 19:00 – 23:30</a></li>
            <li><a href="#">Monday Closed</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <address>
            <ul>
              <li><a href="mailto:info@fornace.it">info@fornace.it</a></li>
              <li><a href="tel:+390212345678">+39 02 1234 5678</a></li>
              <li><a href="https://maps.google.com/?q=Via+della+Fornace+12+Milano">Via della Fornace 12,<br />20121 Milano</a></li>
            </ul>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Fornace S.r.l. &nbsp;·&nbsp; P.IVA 12345678901</p>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TripAdvisor</a>
        </div>
      </div>
    </footer>
  );
}
