import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OfficialVideos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const videos = [
    { id: "owN1vzuFsMU" },
    { id: "g0KJowgoeT4" },
    { id: "xxWKNpJ1Pa0" },
    { id: "UaU3WUAzjtE" },
    { id: "AvI3eIDJ5C0" },
  ];

  return (
    <section ref={ref} className="relative py-28 bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80"
          alt="Concert"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-5xl font-extrabold uppercase mb-4"
        >
          Official Video
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-sm uppercase tracking-wider mb-8"
        >
          Official Videos Of Our Artists
        </motion.p>

        <div className="mb-20" />

        {/* Top Row - 2 Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {videos.slice(0, 2).map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <VideoCard videoId={video.id} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 3 Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {videos.slice(2).map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <VideoCard videoId={video.id} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function VideoCard({ videoId }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        className="w-full h-[260px]"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
