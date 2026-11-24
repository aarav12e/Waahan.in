export interface ServiceVehicle {
  id: string;
  key: "auto" | "bike" | "erickshaw" | "cab";
  image: string;
  fallbackImage?: string;
  badge: string;
  tag: string;
  baseFare: string;
}

export const siteConfig = {
  brandName: "Waahan",
  brandHindi: "वाहन",
  email: "hello@waahan.in",
  
  socialLinks: {
    x: "https://x.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },

  biharDistricts: [
    { en: "Patna", hi: "पटना" },
    { en: "Muzaffarpur", hi: "मुज़फ़्फ़रपुर" },
    { en: "Gaya", hi: "गया" },
    { en: "Bhagalpur", hi: "भागलपुर" },
    { en: "Darbhanga", hi: "दरभंगा" },
    { en: "Purnia", hi: "पूर्णिया" },
    { en: "Begusarai", hi: "बेगूसराय" },
    { en: "Arrah", hi: "आरा" },
  ],

  services: [
    {
      id: "auto",
      key: "auto",
      image: "/images/auto-rickshaw.jpg",
      fallbackImage: "/images/auto-rickshaw-city.jpg",
      badge: "3 Seats",
      tag: "Daily Essential",
      baseFare: "₹20",
    },
    {
      id: "bike",
      key: "bike",
      image: "/images/bike-taxi.jpg",
      fallbackImage: "/images/bike-commute.jpg",
      badge: "1 Seat",
      tag: "Fastest Solo",
      baseFare: "₹15",
    },
    {
      id: "erickshaw",
      key: "erickshaw",
      image: "/images/e-rickshaw-2.jpg",
      fallbackImage: "/images/e-rickshaw.jpg",
      badge: "4 Seats • EV",
      tag: "100% Electric",
      baseFare: "₹10",
    },
    {
      id: "cab",
      key: "cab",
      image: "/images/cab.jpg",
      badge: "4 Seats • AC",
      tag: "Comfort",
      baseFare: "₹45",
    },
  ] as ServiceVehicle[],
};
