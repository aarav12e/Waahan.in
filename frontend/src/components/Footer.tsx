import { siteConfig } from "../siteConfig";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.2-8.2L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.1 4H6.3l11.5 15.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.9 3A2 2 0 1 0 4.9 7a2 2 0 0 0 0-4ZM21 13.8c0-3.8-2-5.6-4.7-5.6a4.1 4.1 0 0 0-3.7 2V8.5h-3.3V21h3.3v-6.2c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H21v-7.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.6-.5-5.2c-.3-.9-1-1.6-1.9-1.9C18.9 4.4 12 4.4 12 4.4s-6.9 0-8.6.5c-.9.3-1.6 1-1.9 1.9C1 8.4 1 12 1 12s0 3.6.5 5.2c.3.9 1 1.6 1.9 1.9 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c.9-.3 1.6-1 1.9-1.9.5-1.6.5-5.2.5-5.2Zm-13.2 3.5V8.5L16 12l-6.2 3.5Z" />
    </svg>
  );
}

function FooterMark() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M16 1.5C8.7 1.5 3.5 7 3.5 14c0 8.4 12.5 16.1 12.5 16.1S28.5 22.4 28.5 14C28.5 7 23.3 1.5 16 1.5Z" fill="currentColor" />
      <circle cx="16" cy="14" r="5.5" fill="#0B0B0F" />
    </svg>
  );
}

export function Footer() {
  const social = [
    { label: "Instagram", href: siteConfig.socialLinks.instagram, icon: <InstagramIcon /> },
    { label: "X", href: siteConfig.socialLinks.x, icon: <XIcon /> },
    { label: "LinkedIn", href: siteConfig.socialLinks.linkedin, icon: <LinkedInIcon /> },
    { label: "YouTube", href: siteConfig.socialLinks.youtube, icon: <YouTubeIcon /> },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo"><FooterMark /><span>waahan</span></div>
          <p>{siteConfig.tagline}</p>
        </div>
        <nav className="social-links" aria-label="Social media">
          {social.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              {item.icon}
            </a>
          ))}
        </nav>
        <div className="footer-meta">
          <p>{siteConfig.copyright}</p>
          <p>Made in India</p>
        </div>
      </div>
    </footer>
  );
}
