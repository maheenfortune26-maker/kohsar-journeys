import { useState } from "react";
import { Menu, X, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Compass, ShieldCheck, Backpack, CalendarRange, Star, Award, Users, Shield } from "lucide-react";

const MENU_ITEMS = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Service", id: "service" },
  { title: "Contact", id: "contact" },
];

const DESTINATIONS = [
  {
    id: "hunza",
    title: "Hunza Valley",
    text: "Terraced orchards, glacial peaks, and villages irrigated by 2,000-year-old channels carved straight into the mountainside. Hunza is the valley every other itinerary is measured against.",
    mainImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
    raisedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNgSle7KSvQlrZGMPIOXLXNSCK4FWhXR_GBzZVBA42Q&s=10",
    reverse: false,
  },
  {
    id: "fairy-meadows",
    title: "Fairy Meadows",
    text: "A pine-forest plateau facing Nanga Parbat's sheer north wall — the ninth-highest mountain on earth, close enough that you can hear the seracs shift at night.",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kk0XzZHU1hhNbN7FeQ9MeWgB42nFwoAjkuvsXfYAOw&s=10",
    raisedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBbVb7ZqhV6gPpUvWsZAoYGh-fTmH-aubIE9hTyZHdQ&s=10",
    reverse: true,
  },
  {
    id: "deosai",
    title: "Deosai Plains",
    text: "The second-highest plateau on earth: 4,100 square kilometers of wildflowers, brown bears, and a night sky with no light pollution for fifty kilometers in any direction.",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS9a7bkhTBthAP6Jy5Lu0_w70i0ikOb1PXOhvnCi9Mg&s=10",
    raisedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMAXD1MfIAecK25V-bZ3roBsi3Temmq59ezUbyKNk8w&s=10",
    reverse: false,
  },
];

const TRIPS = [
  { id: "hunza-trek", name: "Hunza Valley Trek", days: 6, price: "PKR 45,000", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700&q=80", text: "Village-to-village walking beneath Rakaposhi's north face." },
  { id: "fairy-meadows", name: "Fairy Meadows Base Camp", days: 4, price: "PKR 38,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kk0XzZHU1hhNbN7FeQ9MeWgB42nFwoAjkuvsXfYAOw&s=10", text: "A jeep track, a pine forest, and Nanga Parbat rising straight ahead." },
  { id: "swat-valley", name: "Swat Valley Discovery", days: 3, price: "PKR 22,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNgSle7KSvQlrZGMPIOXLXNSCK4FWhXR_GBzZVBA42Q&s=10", text: "Terraced fields and Buddhist ruins in the Switzerland of Pakistan." },
  { id: "k2-basecamp", name: "K2 Base Camp Expedition", days: 14, price: "PKR 165,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBbVb7ZqhV6gPpUvWsZAoYGh-fTmH-aubIE9hTyZHdQ&s=10", text: "The Baltoro glacier and four 8,000m peaks in one sightline." },
  { id: "deosai", name: "Deosai Plains Camping", days: 3, price: "PKR 28,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS9a7bkhTBthAP6Jy5Lu0_w70i0ikOb1PXOhvnCi9Mg&s=10", text: "Wildflowers, brown bears, and the darkest skies in the north." },
  { id: "chitral", name: "Chitral & Kalash Valleys", days: 7, price: "PKR 52,000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMAXD1MfIAecK25V-bZ3roBsi3Temmq59ezUbyKNk8w&s=10", text: "Cross the Lowari Pass into a centuries-old distinct culture." },
];

const SERVICES = [
  { id: "guiding", icon: Compass, title: "Guided Trekking", text: "Local guides who grew up on these trails lead every route, at a pace set by the group." },
  { id: "permits", icon: ShieldCheck, title: "Permits & Documentation", text: "We handle trekking permits, national park fees, and any required local registrations." },
  { id: "gear", icon: Backpack, title: "Gear Rental", text: "Tents, sleeping bags, and cold-weather gear available to rent so you can pack light." },
  { id: "planning", icon: CalendarRange, title: "Custom Itineraries", text: "Tell us your dates and fitness level — we'll build a route that actually fits them." },
];

function NavLinks({ onNavClick, orientation = "row" }) {
  return (
    <ul className={`nav-links nav-links--${orientation}`}>
      {MENU_ITEMS.map((item) => (
        <li key={item.id}>
          <button onClick={() => onNavClick(item.id)}>{item.title}</button>
        </li>
      ))}
    </ul>
  );
}

function Navbar({ onNavClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    onNavClick(id);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleClick("home")}>
          Kohsar<span>Journeys</span>
        </button>

        <div className="navbar__desktop">
          <NavLinks onNavClick={handleClick} orientation="row" />
          <button className="btn btn--primary" onClick={() => handleClick("contact")}>Sign Up</button>
        </div>

        <button className="navbar__toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__sidebar ${open ? "navbar__sidebar--open" : ""}`}>
        <NavLinks onNavClick={handleClick} orientation="column" />
        <button className="btn btn--primary" onClick={() => handleClick("contact")}>Sign Up</button>
      </div>
    </header>
  );
}

function Hero({ image, eyebrow, title, text, buttonText, onButtonClick }) {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8)), url(${image})` }}>
      <div className="hero__content">
        <div className="hero__badge">
          <Star size={14} fill="currentColor" />
          <span>Rated 4.9/5 by 1,200+ Explorers</span>
        </div>
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__text">{text}</p>
        <button className="btn btn--primary btn--lg btn--hero animate-bounce-subtle" onClick={onButtonClick}>{buttonText}</button>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__inner">
        <div className="stat-item">
          <Award size={28} className="stat-item__icon" />
          <div>
            <h4>10+ Years</h4>
            <p>Guiding Experience</p>
          </div>
        </div>
        <div className="stat-item">
          <Users size={28} className="stat-item__icon" />
          <div>
            <h4>5,000+</h4>
            <p>Happy Trekkers</p>
          </div>
        </div>
        <div className="stat-item">
          <Shield size={28} className="stat-item__icon" />
          <div>
            <h4>100% Safely</h4>
            <p>Track Record</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularDestination({ destination }) {
  const { title, text, mainImage, raisedImage, reverse } = destination;
  return (
    <div className={`destination ${reverse ? "destination--reverse" : ""}`}>
      <div className="destination__images">
        <div className="destination__main-wrap">
          <img src={mainImage} alt={title} className="destination__main-image" loading="lazy" />
        </div>
        <img src={raisedImage} alt="" className="destination__raised-image" loading="lazy" />
      </div>
      <div className="destination__text">
        <p className="destination__eyebrow">Explore peaks</p>
        <h3>{title}</h3>
        <p className="destination__desc">{text}</p>
      </div>
    </div>
  );
}

function PopularDestinations() {
  return (
    <section className="section">
      <div className="section__heading">
        <span className="section__subtitle">Incredible Places</span>
        <h2 className="gradient-text">Popular destinations</h2>
        <div className="section__divider"></div>
        <p>The routes people ask for by name.</p>
      </div>
      <div className="destinations-list">
        {DESTINATIONS.map((d) => <PopularDestination key={d.id} destination={d} />)}
      </div>
    </section>
  );
}

function TripCard({ trip }) {
  return (
    <article className="trip-card">
      <div className="trip-card__image-wrap">
        <img src={trip.image} alt={trip.name} className="trip-card__image" loading="lazy" />
        <span className="trip-card__duration">{trip.days} Days</span>
      </div>
      <div className="trip-card__body">
        <h3>{trip.name}</h3>
        <p>{trip.text}</p>
        <div className="trip-card__meta">
          <span className="trip-card__price">{trip.price}</span>
          <button className="trip-card__link">Book Now &rarr;</button>
        </div>
      </div>
    </article>
  );
}

function RecentTrips() {
  return (
    <section className="section section--muted">
      <div className="section__heading">
        <span className="section__subtitle">Explore Package</span>
        <h2 className="gradient-text">Recent trips</h2>
        <div className="section__divider"></div>
        <p>Six routes across the north, from a weekend plateau camp to a two-week glacier trek.</p>
      </div>
      <div className="trip-grid">
        {TRIPS.map((trip) => <TripCard key={trip.id} trip={trip} />)}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="service-card">
      <div className="service-card__icon-wrapper">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </div>
  );
}

function ServiceSection() {
  return (
    <section id="service" className="section">
      <div className="section__heading">
        <span className="section__subtitle">Our Services</span>
        <h2 className="gradient-text">What we handle</h2>
        <div className="section__divider"></div>
        <p>Everything between "I want to go" and standing at the trailhead.</p>
      </div>
      <div className="service-grid">
        {SERVICES.map((s) => <ServiceCard key={s.id} service={s} />)}
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="section section--muted">
      <div className="about">
        <div className="section__heading">
          <span className="section__subtitle">Who We Are</span>
          <h2 className="gradient-text">About Kohsar Journeys</h2>
          <div className="section__divider"></div>
        </div>
        <p className="about__para">We started in 2014 with a single jeep and a handful of routes through Gilgit-Baltistan that most agencies weren't running yet. A decade later, our guides are still the same people who grew up walking these valleys — not contractors we hired in from the city.</p>
        <p className="about__para">Every itinerary on this site has been walked by our own team, more than once, in more than one season. If a trail changes — a bridge washes out, a pass closes early — we know before the trip leaves, not after.</p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="section__heading">
        <span className="section__subtitle">Get In Touch</span>
        <h2 className="gradient-text">Plan a trip</h2>
        <div className="section__divider"></div>
        <p>Tell us roughly what you're after — we'll reply with a route and a price.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" rows={5} required />
        <button type="submit" className="btn btn--primary btn--submit">{submitted ? "Sent — thank you" : "Send message"}</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <p className="footer__logo">Kohsar<span>Journeys</span></p>
          <p className="footer__tagline">Small-group treks through Hunza, Gilgit-Baltistan, and Chitral.</p>
        </div>
        <div className="footer__social">
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="Youtube"><Youtube size={18} /></a>
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#service">Service</a>
          <a href="#home">Careers</a>
        </div>
        <div>
          <h4>Destinations</h4>
          <a href="#home">Hunza Valley</a>
          <a href="#home">Fairy Meadows</a>
          <a href="#home">Deosai Plains</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#contact">Contact</a>
          <a href="#service">Gear rental</a>
          <a href="#service">Permits</a>
        </div>
        <div>
          <h4>Reach us</h4>
          <p><MapPin size={14} /> Islamabad, Pakistan</p>
          <p><Phone size={14} /> +92 300 0000000</p>
          <p><Mail size={14} /> hello@kohsarjourneys.pk</p>
        </div>
      </div>
      <p className="footer__muted">&copy; 2026 Kohsar Journeys. Built with absolute premium aesthetic standards.</p>
    </footer>
  );
}

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <style>{CSS}</style>
      <Navbar onNavClick={scrollTo} />
      <Hero
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eK8OPtw0jILOHgRTXw5uTIGvImarUkQ_lFQEgEV0Tg&s=10"
        eyebrow="Northern Pakistan, on foot"
        title="The mountains don't move. Your itinerary should."
        text="Small-group treks through Hunza, Gilgit-Baltistan, and Chitral — planned by guides who grew up on these trails."
        buttonText="See recent trips"
        onButtonClick={() => scrollTo("trips")}
      />
      <StatsBar />
      <PopularDestinations />
      <div id="trips">
        <RecentTrips />
      </div>
      <ServiceSection />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

  :root { 
    --ink: #0f172a;       
    --stone: #475569;     
    --mist: #f8fafc;      
    --card: #ffffff; 
    --pine: #e0f2fe;      
    --pine-dark: rgba(15, 23, 42, 0.85); 
    --accent-blue: #38bdf8; 
    --clay: #0284c7;      
    --line: #f1f5f9;      
    --radius: 18px;       
    --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  .site { 
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; 
    color: var(--ink); 
    background: var(--mist); 
    line-height: 1.75; 
    overflow-x: hidden; 
  }

  /* Typography */
  h1, h2, h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .gradient-text {
    background: linear-gradient(135deg, #0f172a 30%, #0369a1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Glassmorphism Navbar with Absolute Fixed Position rules */
  .navbar { 
    position: sticky; 
    top: 0; 
    z-index: 100; 
    background: var(--pine-dark); 
    backdrop-filter: blur(16px); 
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07); 
    color: white; 
    transition: var(--transition);
  }
  
  .navbar__inner { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 18px 24px; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
  }
  
  .navbar__logo { 
    background: none; 
    border: none; 
    cursor: pointer; 
    color: white; 
    font-family: 'Playfair Display', Georgia, serif; 
    font-size: 1.45rem; 
    font-weight: 700; 
  }
  
  .navbar__logo span { 
    color: var(--accent-blue); 
    font-weight: 400; 
    font-style: italic;
  }
  
  .navbar__desktop { 
    display: flex; 
    align-items: center; 
    gap: 40px; 
  }
  
  .nav-links { 
    list-style: none; 
    display: flex; 
    gap: 36px; 
    margin: 0; 
    padding: 0; 
  }
  
  .nav-links button { 
    background: none; 
    border: none; 
    color: rgba(255, 255, 255, 0.8); 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    font-size: 0.92rem; 
    font-weight: 500;
    cursor: pointer; 
    padding: 6px 0; 
    border-bottom: 2px solid transparent; 
    transition: var(--transition); 
  }
  
  .nav-links button:hover { 
    color: white; 
    border-bottom-color: var(--accent-blue); 
  }
  
  .navbar__toggle { 
    display: none; 
    background: none; 
    border: none; 
    color: white; 
    cursor: pointer; 
  }

  /* Sidebar - Desktop par fully hidden */
  .navbar__sidebar { 
    display: none; 
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex-direction: column;
    gap: 20px;
    z-index: 99;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  }

  /* Ultra-Premium Buttons */
  .btn { 
    font-family: 'Plus Jakarta Sans', sans-serif; 
    font-size: 0.9rem; 
    font-weight: 600;
    padding: 12px 26px; 
    border-radius: 100px; 
    border: 1px solid transparent; 
    cursor: pointer; 
    transition: var(--transition); 
    box-shadow: 0 4px 14px rgba(2, 132, 199, 0.15);
  }
  
  .btn:hover { 
    transform: translateY(-3px); 
    box-shadow: 0 8px 24px rgba(2, 132, 199, 0.3);
  }
  
  .btn--primary { 
    background: var(--clay); 
    color: white; 
  }
  
  .btn--primary:hover { 
    background: #0369a1; 
  }
  
  .btn--lg { 
    padding: 16px 40px; 
    font-size: 1rem; 
  }

  @media (max-width: 800px) {
    .navbar__desktop { display: none; }
    .navbar__toggle { display: block; }
    .navbar__sidebar--open { display: flex; }
    .nav-links--column { flex-direction: column; gap: 20px; }
  }

  /* Immersive Hero Section */
  .hero { 
    min-height: 88vh; 
    background-size: cover; 
    background-position: center; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    color: white; 
    padding: 80px 24px; 
  }
  
  .hero__content { 
    max-width: 780px; 
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #f1f5f9;
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
  }

  .hero__badge svg {
    color: #fbbf24; 
  }
  
  .hero__eyebrow { 
    text-transform: uppercase; 
    letter-spacing: 0.24em; 
    font-weight: 700;
    font-size: 0.8rem; 
    color: var(--accent-blue); 
    margin-bottom: 20px; 
  }
  
  .hero__title { 
    font-size: clamp(2.4rem, 6.5vw, 4.2rem); 
    line-height: 1.12; 
    margin: 0 0 24px; 
    color: white;
    text-shadow: 0 4px 20px rgba(0,0,0,0.6); 
  }
  
  .hero__text { 
    color: #f8fafc; 
    font-size: 1.15rem; 
    font-weight: 400;
    max-width: 600px; 
    margin: 0 auto 38px; 
    text-shadow: 0 2px 8px rgba(0,0,0,0.5); 
    line-height: 1.8;
    opacity: 0.95;
  }

  .btn--hero {
    background: var(--clay);
    box-shadow: 0 4px 25px rgba(2, 132, 199, 0.5);
  }
  .btn--hero:hover {
    background: #0284c7;
  }

  /* Stats Bar Section */
  .stats-bar {
    background: white;
    border-bottom: 1px solid #e2e8f0;
    padding: 30px 24px;
    position: relative;
    z-index: 10;
  }

  .stats-bar__inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;
  }

  .stat-item__icon {
    color: var(--clay);
    background: var(--pine);
    padding: 10px;
    box-sizing: content-box;
    border-radius: 14px;
  }

  .stat-item h4 {
    margin: 0 0 2px;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ink);
  }

  .stat-item p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--stone);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .stats-bar__inner {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  /* Section Styling */
  .section { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 110px 24px; 
  }
  
  .section--muted { 
    background: #f8fafc; 
    max-width: none; 
    border-top: 1px solid #f1f5f9;
    border-bottom: 1px solid #f1f5f9;
  }
  
  .section--muted > * { 
    max-width: 1200px; 
    margin-left: auto; 
    margin-right: auto; 
  }
  
  .section__heading { 
    text-align: center; 
    max-width: 600px; 
    margin: 0 auto 64px; 
  }

  .section__subtitle {
    text-transform: uppercase;
    color: var(--clay);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    display: block;
    margin-bottom: 10px;
  }
  
  .section__heading h2 { 
    font-size: 2.3rem; 
    margin: 0 0 14px; 
  }

  .section__divider {
    width: 64px;
    height: 4px;
    background: linear-gradient(90deg, var(--clay), var(--accent-blue));
    margin: 14px auto;
    border-radius: 4px;
  }
  
  .section__heading p { 
    color: var(--stone); 
    font-size: 1.05rem;
    margin: 8px 0 0; 
  }

  /* Popular Destinations overlapping layout */
  .destinations-list {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .destination { 
    display: flex; 
    align-items: center; 
    gap: 80px; 
  }
  
  .destination--reverse { 
    flex-direction: row-reverse; 
  }
  
  .destination__images { 
    position: relative; 
    flex: 1.2; 
    min-width: 0; 
  }

  .destination__main-wrap {
    overflow: hidden;
    border-radius: var(--radius);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
  }
  
  .destination__main-image { 
    width: 100%; 
    height: 380px; 
    object-fit: cover; 
    display: block; 
    transition: var(--transition);
  }

  .destination:hover .destination__main-image {
    transform: scale(1.05);
  }
  
  .destination__raised-image { 
    position: absolute; 
    width: 45%; 
    height: 200px; 
    object-fit: cover; 
    border-radius: var(--radius); 
    border: 6px solid white; 
    bottom: -38px; 
    right: -28px; 
    box-shadow: 0 16px 36px rgba(0,0,0,0.15); 
    transition: var(--transition);
  }

  .destination:hover .destination__raised-image {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.22);
  }
  
  .destination--reverse .destination__raised-image { 
    right: auto; 
    left: -28px; 
  }
  
  .destination__text { 
    flex: 1; 
    min-width: 0; 
  }
  
  .destination__eyebrow { 
    text-transform: uppercase; 
    letter-spacing: 0.12em; 
    font-size: 0.8rem; 
    font-weight: 700;
    color: var(--clay); 
    margin: 0 0 12px; 
  }
  
  .destination__text h3 { 
    font-size: 2.2rem; 
    margin: 0 0 18px; 
  }
  
  .destination__desc { 
    color: var(--stone); 
    font-size: 1.02rem;
    line-height: 1.8;
    margin: 0; 
  }

  @media (max-width: 850px) {
    .destinations-list { gap: 60px; }
    .destination, .destination--reverse { flex-direction: column; gap: 40px; }
    .destination__raised-image { bottom: -24px; right: 12px !important; left: auto !important; }
  }

  /* Trip Cards */
  .trip-grid { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 32px; 
  }
  
  .trip-card { 
    background: var(--card); 
    border-radius: var(--radius); 
    overflow: hidden; 
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04); 
    transition: var(--transition);
    border: 1px solid rgba(226, 232, 240, 0.5);
  }

  .trip-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 48px rgba(15, 23, 42, 0.12);
  }
  
  .trip-card__image-wrap { 
    height: 220px; 
    overflow: hidden; 
    position: relative;
  }
  
  .trip-card__image { 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    display: block; 
    transition: var(--transition); 
  }
  
  .trip-card:hover .trip-card__image { 
    transform: scale(1.08); 
  }

  .trip-card__duration {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(15, 23, 42, 0.8);
    color: white;
    padding: 4px 14px;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 20px;
    backdrop-filter: blur(4px);
  }
  
  .trip-card__body { 
    padding: 26px; 
  }
  
  .trip-card__body h3 { 
    font-size: 1.3rem; 
    margin: 0 0 10px; 
  }
  
  .trip-card__body p { 
    color: var(--stone); 
    font-size: 0.95rem; 
    margin: 0 0 22px; 
    line-height: 1.65;
  }
  
  .trip-card__meta { 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    font-size: 0.9rem; 
    border-top: 1px solid #f1f5f9;
    padding-top: 18px;
  }
  
  .trip-card__price { 
    font-weight: 700; 
    color: var(--ink); 
    font-size: 1.1rem;
  }

  .trip-card__link {
    background: none;
    border: none;
    color: var(--clay);
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
    transition: var(--transition);
    padding: 0;
  }

  .trip-card__link:hover {
    color: #0369a1;
    transform: translateX(4px);
  }

  @media (max-width: 950px) { .trip-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 620px) { .trip-grid { grid-template-columns: 1fr; } }

  /* Premium Services Section */
  .service-grid { 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 28px; 
  }
  
  .service-card { 
    background: var(--card); 
    border: 1px solid rgba(226, 232, 240, 0.7); 
    border-radius: var(--radius); 
    padding: 36px 28px; 
    transition: var(--transition);
    box-shadow: 0 4px 18px rgba(0,0,0,0.01);
  }

  .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
    border-color: var(--accent-blue);
  }
  
  .service-card__icon-wrapper { 
    color: var(--clay); 
    background: var(--pine);
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px; 
    transition: var(--transition);
  }

  .service-card:hover .service-card__icon-wrapper {
    background: var(--clay);
    color: white;
  }
  
  .service-card h3 { 
    color: var(--ink); 
    font-size: 1.25rem; 
    margin: 0 0 12px; 
  }
  
  .service-card p { 
    font-size: 0.92rem; 
    color: var(--stone);
    margin: 0; 
    line-height: 1.65;
  }

  @media (max-width: 950px) { .service-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .service-grid { grid-template-columns: 1fr; } }

  /* About Block */
  .about { 
    max-width: 820px; 
    margin: 0 auto; 
    text-align: center; 
  }
  
  .about__para { 
    margin: 0 0 22px; 
    font-size: 1.1rem;
    line-height: 1.9;
    color: var(--stone);
  }

  /* Premium Form Design */
  .contact-form { 
    max-width: 700px; 
    margin: 0 auto; 
    display: flex; 
    flex-direction: column; 
    gap: 22px; 
  }
  
  .contact-form__row { 
    display: flex; 
    gap: 22px; 
  }
  
  .contact-form input, .contact-form textarea { 
    font-family: inherit;
    font-size: 0.95rem; 
    padding: 16px 20px; 
    border: 1px solid #cbd5e1; 
    border-radius: var(--radius); 
    background: white; 
    width: 100%;
    transition: var(--transition);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.01);
  }
  
  .contact-form input:focus, .contact-form textarea:focus { 
    outline: none;
    border-color: var(--clay); 
    box-shadow: 0 0 0 4px rgba(2, 132, 199, 0.15);
  }

  .btn--submit {
    align-self: center;
    padding: 16px 44px;
    font-size: 1rem;
  }

  @media (max-width: 560px) { .contact-form__row { flex-direction: column; gap: 20px; } }

  /* Footer Design */
  .footer { 
    background: #090d16; 
    color: #94a3b8; 
    padding: 90px 24px 36px; 
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  
  .footer__top { 
    max-width: 1200px; 
    margin: 0 auto; 
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    flex-wrap: wrap; 
    gap: 32px; 
    padding-bottom: 44px; 
    border-bottom: 1px solid rgba(255,255,255,0.08); 
  }
  
  .footer__logo { 
    font-family: 'Playfair Display', Georgia, serif; 
    font-size: 1.5rem; 
    font-weight: 700;
    color: white; 
    margin: 0 0 10px; 
  }
  
  .footer__logo span { 
    color: var(--accent-blue); 
    font-style: italic;
    font-weight: 400;
  }
  
  .footer__tagline { 
    max-width: 340px; 
    font-size: 0.9rem; 
    margin: 0; 
    line-height: 1.7;
    opacity: 0.8; 
  }
  
  .footer__social { 
    display: flex; 
    gap: 16px; 
  }

  .footer__social a {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.04);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }

  .footer__social a:hover {
    background: var(--clay);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(2, 132, 199, 0.4);
  }
  
  .footer__bottom { 
    max-width: 1200px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 32px; 
    padding: 56px 0 36px; 
  }
  
  .footer__bottom h4 { 
    color: white; 
    font-size: 0.9rem; 
    text-transform: uppercase; 
    letter-spacing: 0.12em; 
    margin: 0 0 18px; 
  }
  
  .footer__bottom a, .footer__bottom p { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    font-size: 0.9rem; 
    margin: 0 0 14px; 
    opacity: 0.8; 
    transition: var(--transition);
  }
  
  .footer__bottom a:hover { 
    opacity: 1; 
    color: white;
    transform: translateX(4px);
  }
  
  .footer__muted { 
    max-width: 1200px; 
    margin: 0 auto; 
    text-align: center; 
    font-size: 0.82rem; 
    opacity: 0.5; 
    padding-top: 28px; 
    border-top: 1px solid rgba(255,255,255,0.04);
  }

  /* Smooth Custom Animations */
  @keyframes bounceSubtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .animate-bounce-subtle {
    animation: bounceSubtle 3s ease-in-out infinite;
  }

  @media (max-width: 760px) { .footer__bottom { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .footer__bottom { grid-template-columns: 1fr; } }
`;