import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar/NavBar';
import CtaBanner from '../../components/layout/CtaBanner/CtaBanner';
import Footer from '../../components/layout/Footer/Footer';
import FAQItem from './FAQItem/FAQItem';
import { Icons } from '../../components/ui/Icons';
import { LEADERSHIP_DOMAINS, VALUES, FAQ } from '../../constants/team';
import './About.css';

const MISSION_CARDS = [
  {
    eyebrow: 'Our mission',
    heading: 'Empowering Businesses Digitally.',
    body: 'We partner with businesses to harness the power of technology — building intuitive mobile apps, robust web platforms, and scalable cloud solutions that accelerate growth and deliver measurable results.',
    dark: false,
  },
  {
    eyebrow: 'Our vision',
    heading: 'A World Powered by Innovation.',
    body: "We envision a world where every business, regardless of size, can leverage cutting-edge digital solutions to compete globally. Appnity is committed to making that future possible — one product at a time.",
    dark: true,
  },
];

export default function AboutPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="about-hero">
        <div className="ap-dot-bg about-hero__dots" />
        <div className="about-hero__container">
          <div className="about-hero__badge">
            <span className="about-hero__badge-dot" />
            About Appnity
          </div>
          <h1 className="about-hero__title">
            Driven by Innovation,<br />
            Committed to<br />
            <span className="about-hero__title-gradient">Excellence.</span>
          </h1>
          <p className="about-hero__desc">
            Appnity Technologies is a global digital solutions company helping businesses of all
            sizes — from startups to enterprises — build powerful mobile apps, web platforms, and
            scalable cloud infrastructure. With 8+ years of experience and 100+ projects delivered,
            we bring expertise across industries worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="about-mission__grid">
          {MISSION_CARDS.map((c) => (
            <div
              key={c.eyebrow}
              className={`about-mission__card ${c.dark ? 'about-mission__card--dark' : 'about-mission__card--light'}`}
            >
              {c.dark && <div className="about-mission__card-glow" />}
              <div className={`about-mission__badge ${c.dark ? 'about-mission__badge--dark' : 'about-mission__badge--light'}`}>
                <span className="about-mission__badge-dot" />
                {c.eyebrow}
              </div>
              <h2 className="about-mission__card-title">{c.heading}</h2>
              <p className="about-mission__card-desc">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values__container">
          <div className="about-values__header">
            <div>
              <div className="about-values__badge">
                <span className="about-values__badge-dot" />
                What we believe
              </div>
              <h2 className="about-values__title">Our Core Values.</h2>
            </div>
          </div>
          <div className="about-values__grid">
            {VALUES.map(v => {
              const I = Icons[v.icon];
              return (
                <div key={v.t} className="about-values__card">
                  <div className="about-values__card-icon">
                    <I width="20" height="20" />
                  </div>
                  <div className="about-values__card-title">{v.t}</div>
                  <p className="about-values__card-desc">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="about-leadership">
        <div className="about-leadership__container">
          <div className="about-leadership__header">
            <div className="about-leadership__badge">
              <span className="about-leadership__badge-dot" />
              Leadership
            </div>
            <h2 className="about-leadership__title">
              Deep expertise across<br />every discipline.
            </h2>
            <p className="about-leadership__desc">
              Every function is led by seasoned specialists — not generalists. Decades of combined
              experience across strategy, technology, design, and operations means your project is
              in expert hands from day one.
            </p>
          </div>
          <div className="about-leadership__grid">
            {LEADERSHIP_DOMAINS.map((d) => {
              const I = Icons[d.icon];
              return (
                <div key={d.t} className="about-leadership__card">
                  <div className="about-leadership__card-top">
                    <div className="about-leadership__card-icon">
                      <I width="19" height="19" />
                    </div>
                    <span className="about-leadership__card-years">{d.yrs}</span>
                  </div>
                  <div className="about-leadership__card-title">{d.t}</div>
                  <p className="about-leadership__card-desc">{d.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq">
        <div className="about-faq__container">
          <div className="about-faq__sidebar">
            <div className="about-faq__badge">
              <span className="about-faq__badge-dot" />
              Frequently asked
            </div>
            <h2 className="about-faq__title">Questions we get asked most.</h2>
            <p className="about-faq__subtitle">
              Don&apos;t see your question? Reach out — we usually reply within a few hours.
            </p>
            <button className="about-faq__btn" onClick={() => navigate('/contact')}>
              Ask a question <Icons.Arrow width="14" height="14" />
            </button>
          </div>
          <div>
            {FAQ.map((f, i) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
