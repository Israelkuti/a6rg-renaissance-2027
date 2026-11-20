'use client';
import { useState } from 'react';
import { ArrowRight, CalendarDays, MapPin, Menu, X, Globe2, Users, Handshake, Landmark, Mail, Phone, ExternalLink } from 'lucide-react';

const venue = 'Pearl Banquet & Convention Centre';
const address = '1638 Aimco Blvd, Mississauga, ON L4W 1V1, Canada';
const venueExterior = 'https://pearlbanquethall.com/assets/images/product/Hall_ZVvxatSzB1.JPG';
const venueStage = 'https://pearlbanquethall.com/assets/images/product/Stage_zuhP2cAv0I.jpg';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organisation: '', interest: 'General attendee', message: '' });
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('African Renaissance 2027 – Registration Enquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation}\nInterest: ${form.interest}\nMessage: ${form.message}`);
    window.location.href = `mailto:events@au6rg.org?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <div className="topline"><span>AFRICA SIXTH REGION GLOBAL</span><span className="top-right">A gathering for Africa and its global diaspora</span></div>
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="African Renaissance 2027 home"><span className="brand-mark">6<span>R</span></span><span className="brand-copy"><b>AFRICAN RENAISSANCE</b><small>2027 · PRESENTED BY AU6RG</small></span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#programme" onClick={closeMenu}>Programme</a><a href="#venue" onClick={closeMenu}>Venue</a><a className="nav-cta" href="#register" onClick={closeMenu}>Register interest <ArrowRight size={16}/></a></nav>
    </header>

    <section className="hero" id="home">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow light">AFRICA · DIASPORA · GLOBAL CONNECTION</p>
        <h1>The African<br/><em>Renaissance</em><br/>2027</h1>
        <p className="hero-lede">One people. Shared heritage. A future shaped together.</p>
        <p className="hero-description">A landmark gathering bringing together voices, ideas and partnerships from Africa and across the global diaspora to celebrate identity, strengthen connections and advance a shared vision for tomorrow.</p>
        <div className="hero-actions"><a className="button button-gold" href="#register">Be part of the gathering <ArrowRight size={17}/></a><a className="text-link light-link" href="#about">Discover the vision</a></div>
        <div className="hero-meta"><span><CalendarDays size={17}/> 2027 · Date to be announced</span><span><MapPin size={17}/> Mississauga, Ontario, Canada</span></div>
      </div>
      <div className="hero-side-note">UNITY <i/> IDENTITY <i/> PROSPERITY</div>
    </section>

    <section className="intro section" id="about">
      <div className="section-kicker">THE GATHERING</div>
      <div className="intro-grid"><h2>A shared future<br/>begins with <em>connection.</em></h2><div className="intro-copy"><p className="lead">The African Renaissance 2027 is envisioned as a meeting point for Africa and its global family.</p><p>Rooted in the spirit of unity and collective advancement, the gathering will create space for meaningful dialogue, cultural celebration, knowledge exchange and partnerships that connect people, institutions and opportunities across borders.</p><a className="inline-link" href="https://au6rg.org/about/" target="_blank" rel="noreferrer">Explore the AU6RG mandate <ArrowRight size={16}/></a></div></div>
    </section>

    <section className="purpose section" id="experience"><div className="purpose-head"><div className="section-kicker">WHY COME TOGETHER</div><h2>Honouring our roots.<br/><em>Building what comes next.</em></h2><p>Inspired by the mission of Africa Sixth Region Global, the event will convene people and partners around the opportunities and responsibilities we share.</p></div>
      <div className="pillar-grid">
        <article className="pillar"><div className="pillar-icon"><Globe2/></div><span>01 / IDENTITY</span><h3>Celebrate our heritage</h3><p>Recognise the richness, diversity and enduring contributions of African people and communities around the world.</p></article>
        <article className="pillar"><div className="pillar-icon"><Users/></div><span>02 / DIALOGUE</span><h3>Connect our voices</h3><p>Bring together community leaders, institutions, professionals, creatives and the next generation.</p></article>
        <article className="pillar"><div className="pillar-icon"><Handshake/></div><span>03 / PARTNERSHIP</span><h3>Turn connection into action</h3><p>Encourage collaboration, trade, investment, cultural exchange and practical pathways for shared progress.</p></article>
        <article className="pillar"><div className="pillar-icon"><Landmark/></div><span>04 / ADVANCEMENT</span><h3>Shape a shared future</h3><p>Explore ideas and initiatives that contribute to sustainable advancement across Africa and its diaspora.</p></article>
      </div>
    </section>

    <section className="statement"><div className="statement-inner"><div className="statement-mark">“</div><blockquote>One Voice.<br/>One People.<br/><em>One Africa.</em></blockquote><p>A vision of unity that reaches beyond borders.</p></div><div className="statement-art" /></section>

    <section className="programme section" id="programme"><div className="section-kicker">THE PROGRAMME</div><div className="programme-grid"><div><h2>Many perspectives.<br/><em>One shared purpose.</em></h2><p className="programme-copy">The detailed programme, featured speakers and session schedule will be announced as event planning progresses. The gathering is being developed around the following experience areas.</p></div><div className="programme-list"><div><span>01</span><div><h3>Opening &amp; welcome</h3><p>Welcome remarks and the vision for the African Renaissance.</p></div><b>Details coming</b></div><div><span>02</span><div><h3>Leadership &amp; dialogue</h3><p>Conversations on identity, diaspora engagement and collective advancement.</p></div><b>Details coming</b></div><div><span>03</span><div><h3>Culture &amp; celebration</h3><p>A celebration of African heritage, creativity and expression.</p></div><b>Details coming</b></div><div><span>04</span><div><h3>Partnership &amp; networking</h3><p>Connections across communities, institutions and sectors.</p></div><b>Details coming</b></div></div></div></section>

    <section className="venue section" id="venue"><div className="section-kicker">THE HOST VENUE</div><div className="venue-grid"><div className="venue-photo"><img src={venueExterior} alt="Exterior of Pearl Banquet Hall in Mississauga"/><span className="photo-credit">Venue image · Pearl Banquet Hall</span></div><div className="venue-info"><p className="eyebrow">MISSISSAUGA · ONTARIO · CANADA</p><h2>Meet us at<br/><em>Pearl.</em></h2><h3>{venue}</h3><p>{address}</p><p className="venue-note">A banquet and convention venue located in Mississauga, with access to major highways and event facilities. Venue images are illustrative and do not represent the event's final room setup.</p><div className="venue-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Pearl+Banquet+Hall+1638+Aimco+Blvd+Mississauga+ON+L4W+1V1" target="_blank" rel="noreferrer">Get directions <ExternalLink size={15}/></a><a className="inline-link" href="https://pearlbanquethall.com/gallery" target="_blank" rel="noreferrer">View venue gallery <ArrowRight size={16}/></a></div></div></div><div className="venue-wide"><img src={venueStage} alt="Example stage setup at Pearl Banquet Hall"/><div><span>THE SETTING</span><p>A welcoming space for ideas, celebration and connection.</p></div></div></section>

    <section className="register" id="register"><div className="register-copy"><div className="section-kicker light">YOUR PLACE IN THE STORY</div><h2>Be part of<br/><em>the renaissance.</em></h2><p>Leave your details to receive event announcements, programme updates and registration information when they become available.</p><div className="contact-line"><Mail size={17}/> events@au6rg.org</div><div className="contact-line"><Phone size={17}/> +1 416 916 0899</div></div><form className="register-form" onSubmit={submit}><h3>Register your interest</h3><p className="form-intro">This form opens an email to the event team with your details.</p><label>Full name<input required name="name" value={form.name} onChange={update} placeholder="Your name"/></label><label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label><label>Organisation <span>(optional)</span><input name="organisation" value={form.organisation} onChange={update} placeholder="Company or organisation"/></label><label>I'm interested as<select name="interest" value={form.interest} onChange={update}><option>General attendee</option><option>Speaker / panellist</option><option>Sponsor / partner</option><option>Exhibitor</option><option>Volunteer</option><option>Media</option></select></label><label>Message <span>(optional)</span><textarea name="message" value={form.message} onChange={update} rows={3} placeholder="Tell us what you'd like to know"/></label><button className="button button-gold submit-button" type="submit">Send interest <ArrowRight size={17}/></button>{sent && <p className="form-note">Your email app should open with your details ready to send. Please send the email to complete your enquiry.</p>}<p className="privacy-note">No payment is collected on this page. Ticketing and payment details will be published once confirmed.</p></form></section>

    <section className="closing"><div className="section-kicker">AFRICA SIXTH REGION GLOBAL</div><h2>The future is a shared <em>endeavour.</em></h2><a className="button button-dark" href="#register">Stay connected <ArrowRight size={17}/></a></section>
    <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">6<span>R</span></span><span className="brand-copy"><b>AFRICAN RENAISSANCE</b><small>2027 · PRESENTED BY AU6RG</small></span></a><p>© 2027 Africa Sixth Region Global. All rights reserved.</p><div><a href="https://au6rg.org/" target="_blank" rel="noreferrer">AU6RG website</a><a href="mailto:events@au6rg.org">Contact</a></div></footer>
  </main>;
}
