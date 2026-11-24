import { useLanguage } from "../context/LanguageContext";
import { siteConfig } from "../siteConfig";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="minimal-footer" id="contact">
      <div className="section-container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="brand-lockup">
              <span className="brand-logo-text">waahan</span>
              <span className="brand-dot" />
            </div>
            <p className="footer-tagline-text">{t.footer.brandTagline}</p>
          </div>

          {/* Contact Col */}
          <div className="footer-col-item">
            <span className="footer-col-label">{t.footer.contactLabel}</span>
            <a href={`mailto:${siteConfig.email}`} className="footer-contact-link">
              <span>{siteConfig.email}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Social Links */}
          <div className="footer-col-item">
            <span className="footer-col-label">{t.footer.socialLabel}</span>
            <div className="footer-social-row">
              <a href={siteConfig.socialLinks.x} target="_blank" rel="noreferrer" className="footer-social-link">
                X (Twitter)
              </a>
              <span className="footer-sep">/</span>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="footer-social-link">
                LinkedIn
              </a>
              <span className="footer-sep">/</span>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="footer-social-link">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-flex">
          <span className="footer-copyright">{t.footer.copyright}</span>
          <span className="footer-origin">{t.footer.builtFor}</span>
        </div>
      </div>
    </footer>
  );
}
