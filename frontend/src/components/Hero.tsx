import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../siteConfig";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";

export function Hero() {
  const { lang, t } = useLanguage();
  const [contact, setContact] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(
    lang === "hi" ? siteConfig.biharDistricts[0].hi : siteConfig.biharDistricts[0].en
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="hero-minimal" aria-labelledby="hero-main-heading">
      <div className="section-container">
        {/* Top Meta Line */}
        <div className="hero-meta-row">
          <span className="hero-meta-pill">
            <span className="accent-square" />
            <span>{t.hero.badge}</span>
          </span>
          <span className="hero-coords">25.5941° N, 85.1376° E</span>
        </div>

        {/* Main Headline & Supporting Text */}
        <div className="hero-center-copy">
          <h1 id="hero-main-heading" className="hero-headline">
            {t.hero.headline}
          </h1>

          <p className="hero-supporting">
            {t.hero.supportingCopy}
          </p>
        </div>

        {/* Prominent Coming Soon Waitlist Bar */}
        <div className="hero-cta-wrapper" id="notify-section">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="cta-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="minimal-cta-bar"
              >
                <div className="district-dropdown-wrap">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="minimal-district-select"
                    aria-label="Select Bihar District"
                  >
                    {siteConfig.biharDistricts.map((d) => {
                      const name = lang === "hi" ? d.hi : d.en;
                      return (
                        <option key={d.en} value={name}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="divider-line" />

                <input
                  type="text"
                  placeholder={t.hero.ctaPlaceholder}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="minimal-cta-input"
                  aria-label={t.hero.ctaPlaceholder}
                />

                <button type="submit" className="electric-lime-btn">
                  <span>{t.hero.ctaBtn}</span>
                  <ArrowUpRight size={16} />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="cta-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="minimal-success-pill"
              >
                <div className="success-icon-badge">
                  <Check size={14} />
                </div>
                <div className="success-text-group">
                  <span className="success-title-text">{t.hero.successTitle}</span>
                  <span className="success-sub-text">
                    {selectedDistrict} • {t.hero.successSub}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setContact("");
                  }}
                  className="success-reset-btn"
                >
                  {t.hero.resetBtn}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="hero-guarantee">
            <ShieldCheck size={13} className="inline mr-1 text-slate-400" />
            <span>{t.hero.ctaSubtext}</span>
          </p>
        </div>

        {/* Abstract Minimalist City-Route Graphic */}
        <div className="abstract-route-container" aria-hidden="true">
          <svg
            className="route-svg"
            viewBox="0 0 1000 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft grid guidelines */}
            <line x1="0" y1="60" x2="1000" y2="60" stroke="#30382B" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
            
            {/* The primary transit line */}
            <path
              d="M0 80 H220 C280 80 320 30 380 30 H640 C700 30 740 90 800 90 H1000"
              stroke="#30382B"
              strokeWidth="2"
            />
            
            {/* Active lime electric path */}
            <path
              d="M180 80 H220 C280 80 320 30 380 30 H520"
              stroke="#D7F36A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Subtle Nodes */}
            <circle cx="220" cy="80" r="4" fill="#171916" stroke="#D7F36A" strokeWidth="2" />
            <circle cx="380" cy="30" r="4" fill="#D7F36A" />
            <circle cx="520" cy="30" r="4" fill="#171916" stroke="#D7F36A" strokeWidth="2" />
            <circle cx="800" cy="90" r="3" fill="#858980" />

            {/* Route Stop Indicators */}
            <text x="220" y="105" fill="#858980" fontSize="10" fontFamily="Inter" textAnchor="middle">Patna Jn</text>
            <text x="380" y="18" fill="#D7F36A" fontSize="10" fontFamily="Inter" textAnchor="middle">Dak Bungalow</text>
            <text x="520" y="18" fill="#858980" fontSize="10" fontFamily="Inter" textAnchor="middle">Boring Canal Rd</text>
            <text x="800" y="108" fill="#858980" fontSize="10" fontFamily="Inter" textAnchor="middle">AIIMS</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
