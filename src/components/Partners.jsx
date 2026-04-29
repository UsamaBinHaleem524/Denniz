import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import atlanticLogo from "../assets/svgs/atlantic-records.svg";
import sonyLogo from "../assets/svgs/brand-sony-svgrepo-com.svg";
import capitolLogo from "../assets/svgs/capitol-records-1.svg";
import universalLogo from "../assets/svgs/universal-3.svg";
import warnerLogo from "../assets/svgs/warner-music-group.svg";

const logos = [
  { src: atlanticLogo, alt: "Atlantic Records" },
  { src: sonyLogo, alt: "Sony Music" },
  { src: capitolLogo, alt: "Capitol Records" },
  { src: universalLogo, alt: "Universal Music" },
  { src: warnerLogo, alt: "Warner Music Group" },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const doubled = [...logos, ...logos];

  return (
    <section className="bg-black py-16 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase mb-14 font-semibold"
        >
          We Are Proud Vendors Of These Iconic Records Label
        </motion.p>

        {/* Sliding Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex items-center gap-10 md:gap-14 w-max animate-marquee">
            {doubled.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 bg-white rounded-xl px-6 py-4 md:px-8 md:py-6 flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-20 w-auto max-w-[140px] md:max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
