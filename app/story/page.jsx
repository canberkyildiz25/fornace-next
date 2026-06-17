import Link from 'next/link';

export const metadata = {
  title: 'Our Story — FORNACE | Born from Fire',
  description: 'The story of FORNACE — a wood-fired oven burning since 2009, a 15-year-old mother yeast, and an obsession with Neapolitan tradition carried into modern Milano.',
};

export default function StoryPage() {
  return (
    <main id="main-content">

      {/* STORY HERO */}
      <section className="story-hero">
        <div className="story-hero-text">
          <span className="section-label" style={{marginBottom:'20px'}}>Our Story</span>
          <h1>The fire that<br />never <em>goes out</em></h1>
          <p style={{marginTop:'28px'}}>Fornace was born from a single obsession: to make the most honest pizza in Milan. Not the loudest, not the most decorated — the most honest. Fifteen years later, the oven still burns.</p>
          <Link href="/reservations" className="btn-outline" style={{marginTop:'48px', display:'inline-block'}}>Reserve a Table</Link>
        </div>
        <div className="story-hero-visual">
          <img src="/assets/images/chad-montano-MqT0asuoIcU-unsplash.jpg" alt="Restaurant Interior" style={{width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.6) saturate(0.7)'}} />
        </div>
        <div className="story-year">Est. Milano, 2009</div>
      </section>

      {/* STORY BODY */}
      <section className="story-body">
        <div className="story-body-inner">

          <div className="story-chapter reveal">
            <div className="story-chapter-text">
              <span className="section-label">The Beginning</span>
              <h3>A letter from Naples,<br />a one-way train ticket</h3>
              <p style={{marginTop:'20px'}}>In 2008, Marco Ferretti received a letter from his grandfather — a pizzaiolo who had worked in Naples for forty years. Inside was a single page of handwritten notes: the family's dough recipe, kept secret for three generations.</p>
              <p style={{marginTop:'16px'}}>Marco quit his job in finance the following Monday. He spent a year in Naples learning under his grandfather, then took a train to Milan with nothing but a suitcase and a mother yeast culture wrapped in a damp cloth.</p>
            </div>
            <div className="story-chapter-img">
              <img src="/assets/images/james-hardman-F2rMgRhjJpg-unsplash.jpg" alt="Founding Story" style={{width:'100%', height:'100%', minHeight:'480px', objectFit:'cover', filter:'brightness(0.7) saturate(0.7)'}} />
            </div>
          </div>

          <div className="story-chapter reverse reveal">
            <div className="story-chapter-text">
              <span className="section-label">The Oven</span>
              <h3>Built by hand,<br />never extinguished</h3>
              <p style={{marginTop:'20px'}}>The dome oven at Fornace was constructed in 2009 by a third-generation fornaciaio from Sorrento. It took eleven days to build and three weeks to cure before the first fire was lit.</p>
              <p style={{marginTop:'16px'}}>That fire has never been fully extinguished. Between services, the oven is banked down to around 200°C and rebuilt each morning. The accumulated heat of fifteen years is baked into its walls.</p>
            </div>
            <div className="story-chapter-img">
              <img src="/assets/images/nadya-filatova-frTrM7Gdkho-unsplash.jpg" alt="Wood Oven" style={{width:'100%', height:'100%', minHeight:'480px', objectFit:'cover', filter:'brightness(0.7) saturate(0.7)'}} />
            </div>
          </div>

          <div className="story-chapter reveal">
            <div className="story-chapter-text">
              <span className="section-label">The Ingredients</span>
              <h3>Nothing that cannot<br />be named and found</h3>
              <p style={{marginTop:'20px'}}>We source every ingredient directly from producers we visit in person, at least once a year. Our San Marzano tomatoes come from a single farm in the Agro Sarnese-Nocerino valley. Our olive oil from a cooperative in Bitonto, Puglia.</p>
              <p style={{marginTop:'16px'}}>We do not use ingredient blends, stabilisers, or premixed doughs. If we cannot trace it to a person and a place, it does not enter our kitchen.</p>
            </div>
            <div className="story-chapter-img">
              <img src="/assets/images/klara-kulikova-jvWZYnxBDlQ-unsplash.jpg" alt="Ingredients" style={{width:'100%', height:'100%', minHeight:'480px', objectFit:'cover', filter:'brightness(0.7) saturate(0.7)'}} />
            </div>
          </div>

        </div>
      </section>

      {/* CHEF FEATURE */}
      <section className="chef-feature">
        <div className="chef-inner">
          <div className="chef-img reveal">
            <img src="/assets/images/likemeat-CbNAuxSZTFo-unsplash.jpg" alt="Chef Marco Ferretti" style={{width:'100%', height:'100%', minHeight:'600px', objectFit:'cover', filter:'brightness(0.75) saturate(0.6) sepia(0.1)'}} />
            <div className="chef-img-border"></div>
          </div>
          <div className="chef-text reveal reveal-d1">
            <span className="section-label">Head Chef</span>
            <h2>Marco Ferretti</h2>
            <span className="chef-title">Founder &amp; Head Pizzaiolo</span>
            <p>Marco trained for a year under his grandfather in Naples before opening Fornace at the age of 29. He has since been named one of Italy's top 10 pizzaioli by La Repubblica and 50 Top Pizza for three consecutive years.</p>
            <p>He still shapes every dough personally during the evening service. "The moment you stop touching it," he says, "you stop understanding it."</p>
            <blockquote className="chef-quote">
              "A great pizza is not a recipe.<br />It is a conversation with fire."
            </blockquote>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="res-cta">
        <div className="res-cta-bg">STORIA</div>
        <h2 className="reveal">Come taste<br /><em style={{fontStyle:'italic', color:'var(--gold)'}}>the story</em></h2>
        <p className="reveal reveal-d1">Every table at Fornace carries fifteen years of obsession in a single bite. We would be honoured to share it with you.</p>
        <div className="hero-line reveal reveal-d1"></div>
        <Link href="/reservations" className="btn-primary reveal reveal-d2">Reserve Your Table</Link>
      </section>

    </main>
  );
}
