import Link from 'next/link';

export const metadata = {
  title: 'FORNACE — Artisan Wood-Fired Pizza, Milano',
};

export default function Home() {
  return (
    <main id="main-content">

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <video className="hero-video-bg" autoPlay muted loop playsInline>
          <source src="/assets/videos/pizza.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg"></div>
        <canvas id="particles-canvas"></canvas>
        <div className="hero-content">
          <h1 className="hero-title">Fornace</h1>
          <p className="hero-script">Autentica</p>
          <p className="hero-subtitle">Wood-Fired Artisan Pizza &nbsp;·&nbsp; Milano &nbsp;·&nbsp; Est. 2009</p>
          <div className="hero-line"></div>
          <div className="hero-btns">
            <Link href="/menu" className="btn-primary">Explore the Menu</Link>
            <Link href="/reservations" className="btn-outline">Reserve a Table</Link>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-bar"></div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="signature">
        <div className="section-header reveal">
          <span className="section-label">Signature Creations</span>
          <h2 className="section-title">Born from <em>fire</em> and<br />two centuries of tradition</h2>
        </div>
        <div className="dishes-grid">

          <div className="dish-card reveal">
            <div className="dish-img-wrap">
              <img src="/assets/images/aldward-castillo-gWRDfQcDArE-unsplash.jpg" alt="Margherita Antica" />
            </div>
            <div className="dish-overlay">
              <span className="dish-num">01</span>
              <h3 className="dish-name">Margherita Antica</h3>
              <p className="dish-desc">San Marzano DOP, Fior di Latte, fresh basil harvested at dawn, extra virgin olive oil from Puglia</p>
              <span className="dish-price">€ 26</span>
              <div className="dish-line"></div>
            </div>
          </div>

          <div className="dish-card reveal reveal-d1">
            <div className="dish-img-wrap">
              <img src="/assets/images/serjan-midili--9LB0GKPF0o-unsplash.jpg" alt="Tartufo Nero" />
            </div>
            <div className="dish-overlay">
              <span className="dish-num">02</span>
              <h3 className="dish-name">Tartufo Nero</h3>
              <p className="dish-desc">Black truffle shavings, Stracciatella di Bufala, Parmigiano Reggiano 36 months, rosemary honey</p>
              <span className="dish-price">€ 48</span>
              <div className="dish-line"></div>
            </div>
          </div>

          <div className="dish-card reveal reveal-d2">
            <div className="dish-img-wrap">
              <img src="/assets/images/pablo-pacheco-D3Mag4BKqns-unsplash.jpg" alt="Diavola Affumicata" />
            </div>
            <div className="dish-overlay">
              <span className="dish-num">03</span>
              <h3 className="dish-name">Diavola Affumicata</h3>
              <p className="dish-desc">Smoked Calabrian 'nduja, Fiordilatte, caramelised red onion, cold-smoked olive oil</p>
              <span className="dish-price">€ 32</span>
              <div className="dish-line"></div>
            </div>
          </div>

        </div>
      </section>

      {/* THE CRAFT */}
      <div className="craft-section">
        <div className="craft-inner">
          <div className="craft-text-side">
            <span className="section-label reveal">The Craft</span>
            <h2 className="reveal reveal-d1">Fire is our<br />only <em style={{fontStyle:'italic', color:'var(--gold)'}}>ingredient</em></h2>
            <p className="reveal reveal-d1">Every pizza at Fornace is shaped by hand and baked in a wood-fired dome oven that has been burning continuously since the day we opened our doors in 2009. The temperature never drops below 480°C.</p>
            <p className="reveal reveal-d2">Our dough ferments for 72 hours using a mother yeast strain we have kept alive since our founding. It cannot be replicated and it cannot be rushed.</p>
            <div className="craft-stats reveal reveal-d2">
              <div className="stat">
                <div className="stat-num" data-target="480" data-suffix="°">0°</div>
                <span className="stat-lbl">Oven Temp</span>
              </div>
              <div className="stat">
                <div className="stat-num" data-target="72" data-suffix="h">0h</div>
                <span className="stat-lbl">Fermentation</span>
              </div>
              <div className="stat">
                <div className="stat-num" data-target="15" data-suffix="y">0y</div>
                <span className="stat-lbl">Mother Yeast</span>
              </div>
            </div>
            <Link href="/story" className="btn-outline reveal reveal-d3" style={{marginTop:'48px', display:'inline-block'}}>Our Story</Link>
          </div>
          <div className="craft-visual reveal">
            <img src="/assets/images/nadya-filatova-frTrM7Gdkho-unsplash.jpg" alt="Wood Fired Oven" style={{width:'100%', height:'100%', minHeight:'680px', objectFit:'cover', filter:'brightness(0.75) saturate(0.7)'}} />
            <div className="craft-badge">
              <span className="craft-badge-num">★★</span>
              <span className="craft-badge-lbl">Michelin Bib Gourmand</span>
            </div>
          </div>
        </div>
      </div>

      {/* MENU PREVIEW */}
      <section className="menu-preview">
        <div className="section-header reveal">
          <span className="section-label">The Menu</span>
          <h2 className="section-title">Every course, <em>composed</em></h2>
        </div>
        <div className="menu-cats">
          <Link href="/menu#pizze" className="cat-card reveal">
            <div className="cat-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1599588967784-e5449357dda3?w=600&q=80&fit=crop')"}}></div>
            <div className="cat-num">I</div>
            <div className="cat-name">Pizze</div>
            <div className="cat-count">18 selections</div>
            <div className="cat-arrow">→</div>
          </Link>
          <Link href="/menu#antipasti" className="cat-card reveal reveal-d1">
            <div className="cat-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?w=600&q=80&fit=crop')"}}></div>
            <div className="cat-num">II</div>
            <div className="cat-name">Antipasti</div>
            <div className="cat-count">8 selections</div>
            <div className="cat-arrow">→</div>
          </Link>
          <Link href="/menu#dolci" className="cat-card reveal reveal-d2">
            <div className="cat-card-bg" style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1695028378268-38e3432c5cf0?w=600&q=80&fit=crop')"}}></div>
            <div className="cat-num">III</div>
            <div className="cat-name">Dolci</div>
            <div className="cat-count">6 selections</div>
            <div className="cat-arrow">→</div>
          </Link>
          <Link href="/menu#vini" className="cat-card reveal reveal-d3">
            <div className="cat-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1700893417465-fd14dbc27ffb?w=600&q=80&fit=crop')"}}></div>
            <div className="cat-num">IV</div>
            <div className="cat-name">Vini &amp; Cocktails</div>
            <div className="cat-count">40+ labels</div>
            <div className="cat-arrow">→</div>
          </Link>
        </div>
      </section>

      {/* AWARDS */}
      <div className="awards">
        <div className="awards-inner">
          <div className="award-item reveal">
            <div className="award-icon">★</div>
            <div className="award-name">Michelin Bib Gourmand</div>
            <div className="award-year">2023</div>
          </div>
          <div className="award-item reveal reveal-d1">
            <div className="award-icon">◆</div>
            <div className="award-name">50 Top Pizza Italy</div>
            <div className="award-year">2022 · 2023 · 2024</div>
          </div>
          <div className="award-item reveal reveal-d2">
            <div className="award-icon">◯</div>
            <div className="award-name">World's Best Pizza — Naples</div>
            <div className="award-year">2021</div>
          </div>
          <div className="award-item reveal reveal-d3">
            <div className="award-icon">▲</div>
            <div className="award-name">La Repubblica — Eccellenze</div>
            <div className="award-year">2020 · 2024</div>
          </div>
        </div>
      </div>

      {/* RESERVATION CTA */}
      <section className="res-cta">
        <div className="res-cta-bg">FORNACE</div>
        <h2 className="reveal">An evening worth<br /><em style={{fontStyle:'italic', color:'var(--gold)'}}>remembering</em></h2>
        <p className="reveal reveal-d1">We accept reservations for lunch and dinner, Tuesday through Sunday. Private dining rooms available for groups of eight or more.</p>
        <div className="hero-line reveal reveal-d1"></div>
        <Link href="/reservations" className="btn-primary reveal reveal-d2">Reserve Your Table</Link>
      </section>

    </main>
  );
}
