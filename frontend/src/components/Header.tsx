import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function WaahanMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 42 42" role="img" aria-label="Waahan">
      <path d="M21 2.5C11.8 2.5 5.2 9.7 5.2 18.5C5.2 29.1 21 38.8 21 38.8S36.8 29.1 36.8 18.5C36.8 9.7 30.2 2.5 21 2.5Z" fill="currentColor" />
      <circle cx="21" cy="18.5" r="8" fill="#0B0B0F" />
      <circle cx="21" cy="18.5" r="3.5" fill="#FFC400" />
    </svg>
  );
}

export function Header() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      dark ? "#0B0B0F" : "#F7F7F4",
    );
  }, [dark]);

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
    >
      <div className="header-inner">
        <div className="wordmark" aria-label="Waahan">
          <WaahanMark />
          <span>waahan</span>
        </div>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDark((value) => !value)}
          aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
        >
          {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
      </div>
    </motion.header>
  );
}
