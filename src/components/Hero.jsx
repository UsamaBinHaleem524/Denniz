import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Music Marketing",
    description: "Strategic music marketing designed to increase visibility, streams, and audience growth.",
  },
  {
    title: "Playlist Pitching",
    description: "We pitch your tracks to a curated network of playlist owners across Spotify, Apple Music, and YouTube Music to maximize your reach and get your music heard by the right audiences.",
  },
  {
    title: "Website Development",
    description: "Custom-built websites designed to elevate your brand and centralize your digital presence.",
  },
  {
    title: "Mobile Application Development",
    description: "Custom mobile applications designed to enhance user experience and expand your digital reach.",
  },
  {
    title: "Social Media Marketing",
    description: "Strategic social media marketing designed to grow your audience and strengthen your brand presence.",
  },
  {
    title: "Video Editing",
    description: "Professional video editing that enhances visual storytelling and delivers high-quality, engaging content.",
  },
  {
    title: "Promotional Graphics",
    description: "Eye-catching cover art, social banners, and promotional graphics designed by our in-house team to ensure your brand looks professional and cohesive across every platform.",
  },
  {
    title: "SEO",
    description: "Data-driven SEO solutions crafted to maximize online reach, rankings, and long-term digital impact.",
  },
  {
    title: "Graphic Design",
    description: "Professional graphic design solutions that elevate your brand and create a strong visual identity.",
  },
];

export default function Hero() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white pt-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)),
          url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-semibold tracking-widest text-sm mb-6 uppercase"
        >
          Deniz Marketing
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 uppercase"
        >
          <span className="block">" Music Promotion</span>
          <span className="block">Made Easy "</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-sm tracking-wide leading-relaxed mb-14 uppercase"
        >
          Playlisting. Online Press. Social Strategy. Sponsored Ads And Custom Graphics.
          Launch A High-Impact, Budget-Friendly Music Marketing Campaign Managed By
          Our Industry Pros.
        </motion.p>

        {/* Services Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-[#111111] rounded-2xl py-12 px-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-16 text-left">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-between group py-3"
                >
                  <span className="text-lg font-semibold uppercase tracking-wide">
                    {service.title}
                  </span>
                  <motion.span
                    animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary text-2xl font-bold"
                  >
                    +
                  </motion.span>
                </motion.div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm leading-relaxed pb-4 pr-4 border-b border-white/10">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
