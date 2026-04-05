import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { number: 6, suffix: "B+", label: "Streams" },
  { number: 435, suffix: "+", label: "Music Videos" },
  { number: 6500, suffix: "+", label: "Clients" },
  { number: 13, suffix: "M+", label: "Subscribers" },
];

function CountUpNumber({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Introduction() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-white text-4xl md:text-5xl font-extrabold uppercase mb-8"
            >
              Our Introduction
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm leading-relaxed max-w-xl mb-16"
            >
              Welcome to Deniz Marketing! For nearly six years, we've been the
              go-to agency for artists seeking to amplify their presence and
              monetize their talent. From building a devoted fanbase with
              organic strategies to crafting stunning content and launching
              targeted ad campaigns, we offer a 360-degree solution.
            </motion.p>

            {/* Stats 2x2 Grid */}
            <div className="grid grid-cols-2 gap-y-12 relative max-w-lg mb-16">

              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
              {/* Horizontal Divider */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />

              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="text-center"
                >
                  <p className="text-white text-4xl font-extrabold">
                    <CountUpNumber target={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 italic text-sm mb-6 max-w-md"
            >
              "Music is the great uniter. An incredible force. Something that
              people who differ on everything and anything else can have in
              common."
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/about"
                className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-md mb-12 hover:opacity-90 transition"
              >
                More About Us
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                alt="Our Team"
                className="w-full h-[420px] object-cover"
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Subtle Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-1/3 top-0 bottom-0 w-40 bg-red-600 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 top-1/3 w-40 bg-red-600 blur-3xl" />
      </div>
    </section>
  );
}
