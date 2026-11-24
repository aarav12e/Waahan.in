import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

export interface TranslationData {
  nav: {
    about: string;
    services: string;
    contact: string;
    comingSoonBadge: string;
    langToggle: string;
  };
  hero: {
    badge: string;
    headline: string;
    supportingCopy: string;
    ctaPlaceholder: string;
    ctaBtn: string;
    ctaSubtext: string;
    successTitle: string;
    successSub: string;
    resetBtn: string;
  };
  services: {
    heading: string;
    subheading: string;
    autoName: string;
    autoDesc: string;
    bikeName: string;
    bikeDesc: string;
    erickshawName: string;
    erickshawDesc: string;
    cabName: string;
    cabDesc: string;
  };
  about: {
    heading: string;
    desc1: string;
    desc2: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  footer: {
    brandTagline: string;
    contactLabel: string;
    contactEmail: string;
    socialLabel: string;
    copyright: string;
    builtFor: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
      comingSoonBadge: "Coming Soon",
      langToggle: "हिन्दी",
    },
    hero: {
      badge: "Launching First in Bihar • Phase 1",
      headline: "Your city. Your movement.",
      supportingCopy:
        "A smarter way to get around. Something new is on its way.",
      ctaPlaceholder: "Enter your mobile or email for early access",
      ctaBtn: "Notify Me",
      ctaSubtext: "Zero surge guarantee • Priority launch pass",
      successTitle: "You're on the priority list.",
      successSub: "We'll notify you the moment Waahan hits the road in your city.",
      resetBtn: "Submit another",
    },
    services: {
      heading: "Designed for everyday transit",
      subheading: "Four reliable ways to move across your city, without surge pricing or bargaining.",
      autoName: "Auto Rickshaw",
      autoDesc: "Upfront metered rates. Up to 3 passengers. Room for luggage.",
      bikeName: "Bike Taxi",
      bikeDesc: "Fastest way through gridlock. Sanitized helmet provided.",
      erickshawName: "E-Rickshaw (Toto)",
      erickshawDesc: "100% electric, zero emissions. Pocket-friendly metro & bazaar feeder.",
      cabName: "Waahan Cab",
      cabDesc: "Air-conditioned sedans & hatchbacks for family trips and airport transfers.",
    },
    about: {
      heading: "A fresh perspective on urban mobility",
      desc1: "Waahan is built on a simple philosophy: everyday transit should be effortless, fair, and reliable.",
      desc2: "Launching first across Bihar—from Patna to Muzaffarpur, Gaya, and Darbhanga—we are eliminating surge multipliers, driver cancellations, and street bargaining.",
      pillar1Title: "Zero Surge Fares",
      pillar1Desc: "Transparent pricing everyday, even during monsoon rain or peak festival hours.",
      pillar2Title: "Driver-First Model",
      pillar2Desc: "Lowest platform commissions mean respected captains who never cancel on you.",
      pillar3Title: "100% Verified Captains",
      pillar3Desc: "Comprehensive police & background KYC with 24/7 in-app emergency SOS.",
    },
    footer: {
      brandTagline: "Confident. Fast. Effortless.",
      contactLabel: "Inquiries",
      contactEmail: "hello@waahan.in",
      socialLabel: "Connect",
      copyright: "© 2026 Waahan Mobility Technologies Pvt. Ltd.",
      builtFor: "Made with pride in Bihar for India",
    },
  },

  hi: {
    nav: {
      about: "परिचय",
      services: "सवारी",
      contact: "संपर्क",
      comingSoonBadge: "जल्द आ रहा है",
      langToggle: "English",
    },
    hero: {
      badge: "पहले बिहार में शुरुआत • चरण 1",
      headline: "आपका शहर। आपकी गति।",
      supportingCopy:
        "सफ़र का एक स्मार्ट तरीका। कुछ नया आ रहा है।",
      ctaPlaceholder: "अर्ली एक्सेस के लिए मोबाइल या ईमेल दर्ज करें",
      ctaBtn: "सूचित करें",
      ctaSubtext: "नो सर्ज गारंटी • प्राथमिकता लॉन्च पास",
      successTitle: "आप प्राथमिकता सूची में शामिल हैं।",
      successSub: "जैसे ही आपके शहर में वाहन शुरू होगा, हम आपको तुरंत सूचित करेंगे।",
      resetBtn: "दूसरा नंबर जोड़ें",
    },
    services: {
      heading: "रोज़मर्रा के सफर के लिए तैयार",
      subheading: "आपके शहर में घूमने के चार भरोसेमंद साधन — बिना सर्ज और बिना मोल-भाव।",
      autoName: "ऑटो रिक्शा (Auto)",
      autoDesc: "तय मीटर दर। 3 सवारी तक की जगह। सामान के लिए पर्याप्त स्पेस।",
      bikeName: "बाइक टैक्सी (Bike)",
      bikeDesc: "ट्रैफिक जाम से सबसे तेज़ निकास। सैनिटाइज्ड हेलमेट अनिवार्य।",
      erickshawName: "ई-रिक्शा / टोटो (Toto)",
      erickshawDesc: "100% बैटरी चलित, शून्य प्रदूषण। स्टेशन व बाज़ार के लिए सबसे सस्ता।",
      cabName: "वाहन कैब (Cab)",
      cabDesc: "परिवार, बारिश और एयरपोर्ट के लिए साफ-सुथरी एसी गाड़ियां।",
    },
    about: {
      heading: "शहरी यातायात का एक नया दृष्टिकोण",
      desc1: "वाहन एक सरल सोच पर आधारित है: रोज़मर्रा की यात्रा सुगम, निष्पक्ष और भरोसेमंद होनी चाहिए।",
      desc2: "बिहार में सबसे पहले शुरुआत—पटना से मुज़फ़्फ़रपुर, गया और दरभंगा तक—हम मनमाने सर्ज, कैंसलेशन और बार्गेनिंग को समाप्त कर रहे हैं।",
      pillar1Title: "शून्य सर्ज दरें",
      pillar1Desc: "छठ पूजा, बारिश या त्योहारों में भी कभी मनमाना अतिरिक्त किराया नहीं।",
      pillar2Title: "सारथी-प्रथम नीति",
      pillar2Desc: "न्यूनतम कमीशन का मतलब है खुशहाल चालक जो कभी ट्रिप कैंसिल नहीं करते।",
      pillar3Title: "100% सत्यापित चालक",
      pillar3Desc: "कड़े पुलिस वेरिफिकेशन और 24/7 लाइव इमरजेंसी SOS सुविधा।",
    },
    footer: {
      brandTagline: "आत्मविश्वास। गति। सुगमता।",
      contactLabel: "संपर्क",
      contactEmail: "hello@waahan.in",
      socialLabel: "सोशल",
      copyright: "© 2026 Waahan Mobility Technologies Pvt. Ltd.",
      builtFor: "Made with pride in Bihar for India",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("waahan_lang") as Language;
      if (saved === "en" || saved === "hi") return saved;
    }
    return "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("waahan_lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
