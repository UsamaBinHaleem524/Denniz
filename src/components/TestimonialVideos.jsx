import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";

const videos = [video1, video2, video3, video4, video5, video6];

function VideoCard({ src, index, inView }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative group rounded-2xl overflow-hidden bg-[#141414] border border-white/10 shadow-lg"
    >
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        controls={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="w-full h-[420px] object-cover bg-black"
      />

      {/* Play Overlay (only when paused) */}
      {!playing && (
        <button
          onClick={togglePlay}
          aria-label="Play testimonial"
          className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition cursor-pointer"
        >
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_30px_rgba(242,143,49,0.4)]"
          >
            <svg
              className="w-7 h-7 md:w-9 md:h-9 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.span>
        </button>
      )}
    </motion.div>
  );
}

export default function TestimonialVideos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Soft accent glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-primary blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-red-600 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-center mb-4"
        >
          Hear It From Our Artists
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-extrabold uppercase text-center mb-16"
        >
          Real Stories. Real Results.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((src, i) => (
            <VideoCard key={i} src={src} index={i} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
