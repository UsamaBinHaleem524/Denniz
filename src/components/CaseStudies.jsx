import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-white text-4xl md:text-5xl font-extrabold uppercase mb-8"
            >
              Our Case Studies
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-400 text-sm leading-relaxed max-w-xl mb-10"
            >
              Our team have an extensive proven track record of gaining huge
              online and offline success and explosive targeted growth with
              artists globally from a plethora of genres including pop, rock,
              metal, EDM, folk, country, indie, singer-songwriter, reggaeton,
              R&B, afrobeat, drill and hip-hop.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
              alt="Music Studio"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
