import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const genres = [
  {
    number: "01",
    title: "Music PR & Press",
    description:
      "We connect artists with top-tier media, bloggers, and playlist curators to secure coverage that amplifies reach and credibility.",
  },
  {
    number: "02",
    title: "Music Charting",
    description:
      "Our strategic campaigns help boost streams, chart performance, and playlist placements, ensuring your music reaches the right audience.",
  },
  {
    number: "03",
    title: "Artist Branding",
    description:
      "We craft compelling artist identities with cohesive visuals, messaging, and digital presence to strengthen your brand and engage fans.",
  },
];

export default function Genres() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading (Left Aligned) */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-24"
        >
          Our Expertise Spans All Genres
        </motion.h2>

        {/* 3 Columns Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Vertical Divider Lines (Desktop Only) */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/10" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/10" />

          {genres.map((genre, index) => (
            <motion.div
              key={genre.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex items-start gap-6"
            >
              {/* Red Number Box */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15, type: "spring" }}
                className="w-20 h-20 flex items-center justify-center border-4 border-red-900 text-white text-2xl font-bold"
              >
                {genre.number}
              </motion.div>

              {/* Text Content */}
              <div>
                <h3 className="text-white text-lg font-bold uppercase mb-4">
                  {genre.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {genre.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
