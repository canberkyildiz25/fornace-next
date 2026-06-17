'use client';
import Link from 'next/link';

export default function ReservationsPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('.form-submit');
    btn.textContent = 'Reservation Confirmed';
    btn.style.background = '#4A7A4A';
    setTimeout(() => {
      btn.textContent = 'Request a Table';
      btn.style.background = '';
      e.currentTarget.reset();
    }, 4000);
  };

  return (
    <main id="main-content">

      {/* PAGE HERO */}
      <div className="page-hero" style={{paddingTop:'120px'}}>
        <div>
          <span className="section-label" style={{marginBottom:'12px'}}>FORNACE</span>
          <h1 className="page-hero-title">Reservations</h1>
        </div>
        <div className="page-hero-label">TAVOLA</div>
      </div>

      {/* RESERVATION LAYOUT */}
      <section className="res-page">
        <div className="res-page-inner">
          <div className="res-layout">

            {/* INFO SIDE */}
            <div className="res-info reveal">
              <span className="section-label">Book a Table</span>
              <h2>We look forward<br />to welcoming you</h2>
              <p style={{marginTop:'24px'}}>Reservations are recommended, particularly for Friday and Saturday evenings. We hold each table for fifteen minutes past the booking time.</p>
              <p>For parties of eight or more, please contact us directly by telephone or email to discuss our private dining options.</p>

              <div className="res-details">
                <div className="res-detail-item">
                  <div className="res-detail-icon">◷</div>
                  <div className="res-detail-text">
                    <h4>Opening Hours</h4>
                    <p>Tue – Fri: Lunch 12:00 – 15:00 &nbsp;|&nbsp; Dinner 19:00 – 23:30<br />
                       Sat – Sun: Dinner only 19:00 – 23:30<br />
                       Monday: Closed</p>
                  </div>
                </div>
                <div className="res-detail-item">
                  <div className="res-detail-icon">◉</div>
                  <div className="res-detail-text">
                    <h4>Address</h4>
                    <p>Via della Fornace 12<br />20121 Milano, Italy<br />
                    <a href="#" style={{color:'var(--gold)', textDecoration:'none'}}>View on Map →</a></p>
                  </div>
                </div>
                <div className="res-detail-item">
                  <div className="res-detail-icon">✦</div>
                  <div className="res-detail-text">
                    <h4>Contact</h4>
                    <p><a href="tel:+390212345678" style={{color:'var(--muted)', textDecoration:'none'}}>+39 02 1234 5678</a><br />
                       <a href="mailto:reservations@fornace.it" style={{color:'var(--muted)', textDecoration:'none'}}>reservations@fornace.it</a></p>
                  </div>
                </div>
                <div className="res-detail-item">
                  <div className="res-detail-icon">◈</div>
                  <div className="res-detail-text">
                    <h4>Dress Code</h4>
                    <p>Smart casual. We ask that guests refrain from sportswear during dinner service.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM SIDE */}
            <div className="res-form-wrap reveal reveal-d1">
              <h3>Request a Table</h3>
              <form id="res-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Marco" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Ferretti" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="marco@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="+39 02 000 0000" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" required />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <select required>
                      <option value="" disabled defaultValue="">Select time</option>
                      <optgroup label="Lunch">
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                        <option>13:30</option>
                        <option>14:00</option>
                      </optgroup>
                      <optgroup label="Dinner">
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                        <option>21:30</option>
                        <option>22:00</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Number of Guests</label>
                  <select required>
                    <option value="" disabled defaultValue="">Select guests</option>
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                    <option>5 guests</option>
                    <option>6 guests</option>
                    <option>7 guests</option>
                    <option>8+ guests — we will contact you</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea placeholder="Allergies, dietary requirements, special occasions…"></textarea>
                </div>
                <button type="submit" className="form-submit">Request a Table</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* PRIVATE DINING */}
      <section className="private-dining">
        <div className="private-inner">
          <div className="section-header reveal" style={{textAlign:'left', padding:'0'}}>
            <span className="section-label">Exclusive Experiences</span>
            <h2 className="section-title">Private <em>dining</em></h2>
          </div>
          <div className="private-grid" style={{marginTop:'64px'}}>

            <div className="private-card reveal">
              <div className="private-card-num">I</div>
              <h3>The Cellar Room</h3>
              <p>An intimate space for up to 10 guests, set within our original wine cellar. Exposed brick, candlelight, and a dedicated sommelier for the evening.</p>
            </div>

            <div className="private-card reveal reveal-d1">
              <div className="private-card-num">II</div>
              <h3>The Chef's Table</h3>
              <p>Six seats at the pass, looking directly into the kitchen. A tasting menu designed personally by Marco Ferretti for your party. Available Thursday evenings only.</p>
            </div>

            <div className="private-card reveal reveal-d2">
              <div className="private-card-num">III</div>
              <h3>Full Venue Hire</h3>
              <p>Exclusive use of Fornace for up to 80 guests. Available Sunday evenings and select Mondays. Includes a bespoke menu and welcome cocktail reception.</p>
            </div>

          </div>
          <div style={{textAlign:'center', marginTop:'64px'}} className="reveal">
            <p style={{fontSize:'14px', color:'var(--muted)', marginBottom:'28px'}}>For private dining enquiries, contact our events team directly.</p>
            <a href="mailto:events@fornace.it" className="btn-outline">events@fornace.it</a>
          </div>
        </div>
      </section>

    </main>
  );
}
