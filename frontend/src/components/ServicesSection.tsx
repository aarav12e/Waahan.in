import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../siteConfig";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const serviceData = [
    {
      ...siteConfig.services[0],
      title: t.services.autoName,
      desc: t.services.autoDesc,
    },
    {
      ...siteConfig.services[1],
      title: t.services.bikeName,
      desc: t.services.bikeDesc,
    },
    {
      ...siteConfig.services[2],
      title: t.services.erickshawName,
      desc: t.services.erickshawDesc,
    },
    {
      ...siteConfig.services[3],
      title: t.services.cabName,
      desc: t.services.cabDesc,
    },
  ];

  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="section-container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <div className="section-label-row">
            <span className="section-dot" />
            <span className="section-kicker">01 / FLEET</span>
          </div>
          <h2 id="services-title" className="section-heading">
            {t.services.heading}
          </h2>
          <p className="section-sub">
            {t.services.subheading}
          </p>
        </div>

        {/* 4 Compact Service Cards */}
        <div className="services-grid">
          {serviceData.map((s) => (
            <article key={s.id} className="service-card">
              <div className="service-image-container">
                <img
                  src={s.image}
                  alt={s.title}
                  className="service-img"
                  loading="lazy"
                  onError={(e) => {
                    if (s.fallbackImage && e.currentTarget.src !== s.fallbackImage) {
                      e.currentTarget.src = s.fallbackImage;
                    }
                  }}
                />
                <div className="service-img-scrim" />
                
                {/* Minimal Badges */}
                <div className="service-badge-row">
                  <span className="service-pill-tag">{s.tag}</span>
                  <span className="service-pill-fare">{s.baseFare} base</span>
                </div>
              </div>

              <div className="service-card-body">
                <div className="service-title-row">
                  <h3 className="service-card-title">{s.title}</h3>
                  <span className="service-capacity-badge">{s.badge}</span>
                </div>
                <p className="service-card-desc">{s.desc}</p>
                
                <div className="service-card-footer">
                  <span className="service-status-note">Launching with Phase 1</span>
                  <a href="#notify-section" className="service-learn-more" aria-label={`Reserve ${s.title}`}>
                    <span>Reserve</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

