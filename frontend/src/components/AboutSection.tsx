import { useLanguage } from "../context/LanguageContext";
import { Shield, Sparkles, UserCheck } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Sparkles size={20} className="pillar-icon" />,
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc,
    },
    {
      icon: <UserCheck size={20} className="pillar-icon" />,
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc,
    },
    {
      icon: <Shield size={20} className="pillar-icon" />,
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc,
    },
  ];

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-container">
        <div className="about-layout-grid">
          {/* Left Column: Big Philosophy */}
          <div className="about-left-col">
            <div className="section-label-row">
              <span className="section-dot" />
              <span className="section-kicker">02 / PHILOSOPHY</span>
            </div>
            <h2 id="about-title" className="about-heading">
              {t.about.heading}
            </h2>
            <p className="about-lead">
              {t.about.desc1}
            </p>
            <p className="about-subtext">
              {t.about.desc2}
            </p>
          </div>

          {/* Right Column: 3 Precision Pillars */}
          <div className="about-pillars-col">
            {pillars.map((p, idx) => (
              <div key={idx} className="pillar-item">
                <div className="pillar-header">
                  <div className="pillar-icon-box">{p.icon}</div>
                  <h3 className="pillar-title">{p.title}</h3>
                </div>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

