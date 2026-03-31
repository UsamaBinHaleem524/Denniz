import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    text: "Working with Denniz Records completely changed my career. Their marketing strategy got my single on playlists I never thought I'd reach. I gained over 50K new streams in just a month!",
    name: "SIAHLANSKY",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    color: "dark",
  },
  {
    text: "They helped me find my audience. I went from struggling to get 100 plays to consistent traction on Spotify and YouTube. Their team truly understands independent artists.",
    name: "SKIMASKRECO",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
    color: "green",
  },
  {
    text: "I've worked with other promo companies before, but this was different. Real engagement, transparent updates, and most importantly — results. Highly recommended.",
    name: "NAFL_AKA_BRUCE_WAYNE",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    color: "dark",
  },
  {
    text: "Their TikTok strategy was a game-changer. I went from 800 followers to 10K in under a month, and it directly boosted my streams. These guys know how to grow real hype.",
    name: "CBCKEEM",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    color: "green",
  },
  {
    text: "As a new artist, I had no idea how to get exposure. Their team guided me step-by-step, helped with branding, and made my debut release feel like a major drop.",
    name: "ITZDOMAE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    color: "dark",
  },
  {
    text: "The growth on my socials and Spotify was crazy. Everything was organic and on-brand — no bots, no fluff, just smart marketing that actually works.",
    name: "IM_DYELLE101",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    color: "green",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-5xl font-extrabold uppercase text-center mb-20"
        >
          Reviews From Clients
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col items-start"
            >

              {/* Bubble */}
              <div
                className={`relative rounded-2xl p-8 text-sm leading-relaxed ${
                  review.color === "green"
                    ? "bg-primary text-black"
                    : "bg-[#1c1c1c] text-gray-200"
                }`}
              >
                <p className="font-medium">
                  "{review.text}"
                </p>

                {/* Bubble Tail */}
                <div
                  className={`absolute -bottom-3 left-10 w-6 h-6 rotate-45 ${
                    review.color === "green"
                      ? "bg-primary"
                      : "bg-[#1c1c1c]"
                  }`}
                />
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-white text-sm font-semibold tracking-wide">
                  {review.name}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
