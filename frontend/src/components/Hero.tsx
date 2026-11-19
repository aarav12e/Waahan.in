import { motion } from "framer-motion";
import { RoadScene } from "./RoadScene";
import { siteConfig } from "../siteConfig";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="coming-soon-title">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
        }}
      >
        <motion.h1
          id="coming-soon-title"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: [0.2, 0, 0, 1] }}
        >
          {siteConfig.headline}
        </motion.h1>
        <motion.p
          className="sub-text"
          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.38, ease: [0.2, 0, 0, 1] }}
        >
          {siteConfig.subText}
        </motion.p>
      </motion.div>
      <motion.div
        className="road-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.38, ease: [0.2, 0, 0, 1] }}
      >
        <RoadScene />
      </motion.div>
    </section>
  );
}
