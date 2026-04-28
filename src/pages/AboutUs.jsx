import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Reviews from "../components/Reviews";

const stats = [
  { number: 6, suffix: "B+", label: "Streams" },
  { number: 435, suffix: "+", label: "Music Videos" },
  { number: 6500, suffix: "+", label: "Clients" },
  { number: 13, suffix: "M+", label: "Subscribers" },
];

function CountUpNumber({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

export default function AboutUs() {
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const mediaRef = useRef(null);
  const mediaInView = useInView(mediaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&q=80"
            alt="Concert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold uppercase tracking-wide"
        >
          About Us
        </motion.h1>
      </section>

      {/* Our Introduction */}
      <section className="bg-[#0d0d0d] py-24" ref={introRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={introInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold uppercase mb-12"
          >
            Our Introduction
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              Id ornare mattis amet consectetur ante integer corporis, impeit
              placerat totam curabitur pretium adipisci molestie pellentesque
              tetuer ante integer corporis, impeit placerat totam curabitur
              pretu mole.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              Quisquam porta necessitatibus magno blandit arcu ad nesciunt
              liberor magna animi dictumst ratione placerat, quasi provident eum
              quasi, commodo irure. Earum litora id quis recendos conque
              explicabo. Imperdiet ipsa erat. Eius elementum aperiam irure,
              aliquo nascenas ac alias nesciunt illumquat habitant.
            </motion.p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={introInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                className="text-center"
              >
                <p className="text-white text-4xl md:text-5xl font-extrabold">
                  <CountUpNumber target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Media Section - Video + Image */}
          <div ref={mediaRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={mediaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/-gn1FrPXEgM?si=eBjkFkwuRsik3WZz"
                title="YouTube video"
                className="w-full h-[350px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={mediaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                alt="Band"
                className="w-full h-[350px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-primary py-14"
      >
        <p className="text-white text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-center">
          We Are Proud Vendors Of These Iconic Records Label
        </p>
      </motion.section>

      {/* Reviews */}
      <Reviews />
    </>
  );
}
