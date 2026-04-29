import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Custom Graphics And Videos",
    description:
      "Get a personalized promo graphics pack produced by our in-house designers plus two custom videos. Promo Plus clients can use these as part of their paid ad campaigns.",
    image: "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?w=800&q=80",
    colSpan: "lg:col-span-2",
  },
  {
    title: "2D & 3D Animation",
    description:
      "Bring your music to life with stunning visuals, from lyric videos to animated loops and full 3D scenes.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    title: "Online Press",
    description:
      "Our close relationship with music bloggers means we can guarantee at least two blog features or online reviews.",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80",
  },
  {
    title: "Promotion Campaigns",
    description:
      "Targeted marketing designed to boost your reach, engagement, and overall growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    button: true,
  },
  {
    title: "Playlist Pitching",
    description:
      "We'll pitch your track to our network of playlist curators and make sure you land those important placements.",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&q=80",
  },
  {
    title: "Priority Support Access",
    description:
      "Skip the queue and get direct access to our team for faster communication and support.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
  {
    title: "Mix & Mastering",
    description:
      "Get your tracks sounding crisp, loud and industry-ready. No mud, no clipping — just pro-level polish.",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    colSpan: "lg:col-span-2",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="promotions" className="bg-black py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Small Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary text-xl tracking-[0.2em] font-semibold text-center mb-4 uppercase"
        >
          What Do You Get?
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-center text-4xl md:text-6xl font-extrabold uppercase mb-16 leading-tight"
        >
          More Features, Likes And Listeners. Guaranteed.
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-2xl overflow-hidden group ${
                feature.colSpan || ""
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition duration-700"
                style={{ backgroundImage: `url(${feature.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-[320px]">
                <h3 className="text-white text-xl font-extrabold uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
