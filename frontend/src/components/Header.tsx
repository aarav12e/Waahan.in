import { useLanguage } from "../context/LanguageContext";

function WaahanLogo() {
  return (
    <div className="brand-lockup">
      <span className="brand-logo-text">waahan</span>
      <span className="brand-dot" />
    </div>
  );
}

export function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="minimal-header">
      <div className="header-inner">
        {/* Brand Wordmark */}
        <a href="#" className="brand-link" aria-label="Waahan Home">
          <WaahanLogo />
        </a>

        {/* Center Nav Links */}
        <nav className="center-nav" aria-label="Primary Navigation">
          <a href="#services" className="nav-item">{t.nav.services}</a>
          <a href="#about" className="nav-item">{t.nav.about}</a>
          <a href="#contact" className="nav-item">{t.nav.contact}</a>
        </nav>

        {/* Right Actions */}
        <div className="header-right">
          {/* Status Badge */}
          <div className="status-badge" aria-label="Status: Coming Soon">
            <span className="status-live-dot" />
            <span className="status-label">{t.nav.comingSoonBadge}</span>
          </div>

          {/* Language Switcher */}
          <div className="minimal-lang-switcher" role="group" aria-label="Language Switcher">
            <button
              type="button"
              className={`lang-choice ${lang === "en" ? "active" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="lang-sep">/</span>
            <button
              type="button"
              className={`lang-choice ${lang === "hi" ? "active" : ""}`}
              onClick={() => setLang("hi")}
            >
              हिं
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
