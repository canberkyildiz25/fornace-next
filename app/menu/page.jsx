export const metadata = {
  title: 'Menu — FORNACE | Pizze, Antipasti, Dolci & Vini',
  description: 'Explore the FORNACE menu. Wood-fired Neapolitan pizzas, seasonal antipasti, artisan dolci and a curated wine list.',
};

export default function MenuPage() {
  return (
    <main id="main-content">

      <div className="page-hero" style={{paddingTop:'120px'}}>
        <div>
          <span className="section-label" style={{marginBottom:'12px'}}>FORNACE</span>
          <h1 className="page-hero-title">The Menu</h1>
        </div>
        <div className="page-hero-label">MENU</div>
      </div>

      <nav className="menu-sticky-nav">
        <a href="#pizze" className="active">Pizze</a>
        <a href="#antipasti">Antipasti</a>
        <a href="#dolci">Dolci</a>
        <a href="#vini">Vini &amp; Cocktails</a>
      </nav>

      {/* PIZZE */}
      <section className="menu-section" id="pizze">
        <div className="menu-section-header reveal">
          <h2 className="menu-section-title">Pizze</h2>
          <span className="menu-section-script">dal forno</span>
        </div>
        <div className="menu-items-grid">

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1599588967784-e5449357dda3?w=200&h=200&fit=crop&q=80" alt="Margherita Antica" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Margherita Antica</div>
              <div className="menu-item-desc">San Marzano DOP, Fior di Latte, fresh basil, extra virgin olive oil from Puglia</div>
              <div className="menu-item-tags"><span className="tag">Vegetarian</span><span className="tag">Classic</span></div>
            </div>
            <div className="menu-item-price">€ 26</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1664309641932-0e03e0771b97?w=200&h=200&fit=crop&q=80" alt="Tartufo Nero" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Tartufo Nero</div>
              <div className="menu-item-desc">Black truffle, Stracciatella di Bufala, Parmigiano 36 months, rosemary honey</div>
              <div className="menu-item-tags"><span className="tag">Signature</span><span className="tag">Seasonal</span></div>
            </div>
            <div className="menu-item-price">€ 48</div>
          </div>

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?w=200&h=200&fit=crop&q=80" alt="Diavola Affumicata" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Diavola Affumicata</div>
              <div className="menu-item-desc">Smoked Calabrian 'nduja, Fiordilatte, caramelised red onion, cold-smoked olive oil</div>
              <div className="menu-item-tags"><span className="tag">Spicy</span></div>
            </div>
            <div className="menu-item-price">€ 32</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1649688423692-308d2fc1027d?w=200&h=200&fit=crop&q=80" alt="Bresaola e Rucola" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Bresaola e Rucola</div>
              <div className="menu-item-desc">Aged bresaola, wild rocket, Grana Padano shavings, lemon zest, olive oil</div>
              <div className="menu-item-tags"><span className="tag">Light</span></div>
            </div>
            <div className="menu-item-price">€ 34</div>
          </div>

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1517685645259-c6caddb7165d?w=200&h=200&fit=crop&q=80" alt="Burrata e Pomodorini" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Burrata e Pomodorini</div>
              <div className="menu-item-desc">Slow-roasted cherry tomatoes, fresh Burrata di Andria, basil oil, sea salt flakes</div>
              <div className="menu-item-tags"><span className="tag">Vegetarian</span><span className="tag">Signature</span></div>
            </div>
            <div className="menu-item-price">€ 36</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=200&h=200&fit=crop&q=80" alt="Quattro Stagioni" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Quattro Stagioni</div>
              <div className="menu-item-desc">Artichoke hearts, Prosciutto di Parma, black olives, Porcini mushrooms, Mozzarella</div>
              <div className="menu-item-tags"><span className="tag">Classic</span></div>
            </div>
            <div className="menu-item-price">€ 38</div>
          </div>

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1572862905000-c5b6244027a5?w=200&h=200&fit=crop&q=80" alt="Salmone Affumicato" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Salmone Affumicato</div>
              <div className="menu-item-desc">Norwegian smoked salmon, crème fraîche, capers, red onion, dill, lemon</div>
              <div className="menu-item-tags"><span className="tag">Fish</span></div>
            </div>
            <div className="menu-item-price">€ 42</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1716237388573-f33de65d8d0f?w=200&h=200&fit=crop&q=80" alt="Pizza Bianca al Pesto" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Pizza Bianca al Pesto</div>
              <div className="menu-item-desc">Genovese basil pesto, Mozzarella di Bufala, pine nuts, Pecorino Romano, cherry tomatoes</div>
              <div className="menu-item-tags"><span className="tag">Vegetarian</span></div>
            </div>
            <div className="menu-item-price">€ 30</div>
          </div>

        </div>
      </section>

      {/* ANTIPASTI */}
      <section className="menu-section" id="antipasti">
        <div className="menu-section-header reveal">
          <h2 className="menu-section-title">Antipasti</h2>
          <span className="menu-section-script">per iniziare</span>
        </div>
        <div className="menu-items-grid">

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1606850246029-dd00bd5eff97?w=200&h=200&fit=crop&q=80" alt="Burrata con Prosciutto" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Burrata con Prosciutto</div>
              <div className="menu-item-desc">Burrata di Andria, 24-month Prosciutto di Parma, truffle honey, toasted focaccia</div>
              <div className="menu-item-tags"><span className="tag">Signature</span></div>
            </div>
            <div className="menu-item-price">€ 22</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1508471349025-ca3e278cf5e2?w=200&h=200&fit=crop&q=80" alt="Carpaccio di Manzo" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Carpaccio di Manzo</div>
              <div className="menu-item-desc">Aged Fassona beef, Grana Padano, wild rocket, lemon vinaigrette, capers</div>
              <div className="menu-item-tags"><span className="tag">Raw</span></div>
            </div>
            <div className="menu-item-price">€ 28</div>
          </div>

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1548077447-17749375af3a?w=200&h=200&fit=crop&q=80" alt="Frittura di Calamari" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Frittura di Calamari</div>
              <div className="menu-item-desc">Adriatic calamari, light semolina batter, saffron aioli, grilled lemon</div>
              <div className="menu-item-tags"><span className="tag">Fish</span></div>
            </div>
            <div className="menu-item-price">€ 24</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1593629718617-bc1b024cf15a?w=200&h=200&fit=crop&q=80" alt="Focaccia al Rosmarino" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Focaccia al Rosmarino</div>
              <div className="menu-item-desc">House focaccia, rosemary, fleur de sel, extra virgin olive oil, olives</div>
              <div className="menu-item-tags"><span className="tag">Vegetarian</span><span className="tag">Sharing</span></div>
            </div>
            <div className="menu-item-price">€ 14</div>
          </div>

        </div>
      </section>

      {/* DOLCI */}
      <section className="menu-section" id="dolci">
        <div className="menu-section-header reveal">
          <h2 className="menu-section-title">Dolci</h2>
          <span className="menu-section-script">per finire</span>
        </div>
        <div className="menu-items-grid">

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://plus.unsplash.com/premium_photo-1695028378268-38e3432c5cf0?w=200&h=200&fit=crop&q=80" alt="Tiramisù della Casa" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Tiramisù della Casa</div>
              <div className="menu-item-desc">Mascarpone cream, Savoiardi soaked in Illy espresso, Valrhona cocoa, Marsala</div>
              <div className="menu-item-tags"><span className="tag">Classic</span></div>
            </div>
            <div className="menu-item-price">€ 16</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://plus.unsplash.com/premium_photo-1714115034655-5dba95d04360?w=200&h=200&fit=crop&q=80" alt="Panna Cotta al Tartufo" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Panna Cotta al Tartufo</div>
              <div className="menu-item-desc">Vanilla panna cotta, black truffle caramel, toasted hazelnuts, fleur de sel</div>
              <div className="menu-item-tags"><span className="tag">Signature</span></div>
            </div>
            <div className="menu-item-price">€ 20</div>
          </div>

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1651325982013-958f9e1ad468?w=200&h=200&fit=crop&q=80" alt="Gelato Artigianale" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Gelato Artigianale</div>
              <div className="menu-item-desc">Three scoops of house-made gelato — ask your server for today's flavours</div>
              <div className="menu-item-tags"><span className="tag">Daily Selection</span></div>
            </div>
            <div className="menu-item-price">€ 14</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1757519740947-eef07a74c4ab?w=200&h=200&fit=crop&q=80" alt="Cannolo Siciliano" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Cannolo Siciliano</div>
              <div className="menu-item-desc">Crisp pastry shell, sheep's ricotta, Bronte pistachio, candied orange peel</div>
              <div className="menu-item-tags"><span className="tag">Traditional</span></div>
            </div>
            <div className="menu-item-price">€ 14</div>
          </div>

        </div>
      </section>

      {/* VINI */}
      <section className="menu-section" id="vini">
        <div className="menu-section-header reveal">
          <h2 className="menu-section-title">Vini &amp; Cocktails</h2>
          <span className="menu-section-script">per brindare</span>
        </div>
        <div className="menu-items-grid">

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1568213214529-83ae6d045696?w=200&h=200&fit=crop&q=80" alt="Barolo DOCG 2018" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Barolo DOCG 2018</div>
              <div className="menu-item-desc">Marchesi di Barolo — Langhe, Piemonte. Deep ruby, dried roses, tar, dark cherry</div>
              <div className="menu-item-tags"><span className="tag">Red</span><span className="tag">Full Body</span></div>
            </div>
            <div className="menu-item-price">€ 68</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=200&h=200&fit=crop&q=80" alt="Franciacorta Brut DOCG" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Franciacorta Brut DOCG</div>
              <div className="menu-item-desc">Berlucchi — Lombardia. Fine bubbles, brioche, green apple, white peach</div>
              <div className="menu-item-tags"><span className="tag">Sparkling</span></div>
            </div>
            <div className="menu-item-price">€ 56</div>
          </div>

          <div className="menu-item reveal">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=200&h=200&fit=crop&q=80" alt="Negroni Fornace" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Negroni Fornace</div>
              <div className="menu-item-desc">Hendrick's Gin, Campari, Carpano Antica, rosemary smoke, orange</div>
              <div className="menu-item-tags"><span className="tag">Cocktail</span><span className="tag">Signature</span></div>
            </div>
            <div className="menu-item-price">€ 18</div>
          </div>

          <div className="menu-item reveal reveal-d1">
            <div className="menu-item-img">
              <img src="https://images.unsplash.com/photo-1609951651556-5334e2706168?w=200&h=200&fit=crop&q=80" alt="Truffle Spritz" />
            </div>
            <div className="menu-item-body">
              <div className="menu-item-name">Truffle Spritz</div>
              <div className="menu-item-desc">Prosecco, Aperol, black truffle tincture, soda, fresh thyme</div>
              <div className="menu-item-tags"><span className="tag">Cocktail</span></div>
            </div>
            <div className="menu-item-price">€ 16</div>
          </div>

        </div>
      </section>

    </main>
  );
}
