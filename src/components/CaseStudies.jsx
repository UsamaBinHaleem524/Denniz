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

            {/* Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-6"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-white/10 transition"
              >
                <span className="text-xl"></span>
                <div className="text-left">
                  <p className="text-[10px] uppercase">Get it on</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-white/10 transition"
              >
                <span className="text-xl">▶</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Red Frame Background */}
            <div className="absolute w-[85%] h-[85%] border-[40px] border-red-900 rounded-3xl -z-10" />

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
              alt="Artists"
              className="relative z-10 w-full max-w-lg object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
