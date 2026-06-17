'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="nav-left">
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/story">Our Story</Link></li>
      </ul>
      <Link href="/" className="nav-logo">Fornace</Link>
      <ul className="nav-right">
        <li><Link href="/reservations">Reservations</Link></li>
        <li><Link href="/reservations" className="nav-cta">Book a Table</Link></li>
      </ul>
      <div className="nav-burger">
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
