import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "We Get to Know You",
    description:
      "Before launching any campaign, we take the time to truly understand you, your music, and your goals. This allows us to craft a strategy that’s tailored to maximize your reach and overall impact.",
  },
  {
    title: "We Build Your Brand",
    description:
      "Next, we position your music in front of the right audience. We pitch to playlist curators, bloggers, and journalists, create a customized social media plan, design branded visuals, and run targeted ad campaigns for Promo Plus clients.",
  },
  {
    title: "We Deliver Real Results",
    description:
      "Our team consistently promotes your music across our network of Spotify playlist curators until placements are secured. Leveraging strong industry connections, we also ensure coverage on at least two reputable music blogs.",
  },
  {
    title: "We Help You Grow Independently",
    description:
      "Your progress doesn’t stop when the campaign ends. You’ll receive detailed reports, practical feedback, and exclusive guides filled with PR, playlisting, and promotion strategies—so you can continue growing on your own.",
  },
];

export default function HowWeDoIt() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xl tracking-[0.2em] uppercase font-semibold mb-16"
        >
          <span className="text-white">How We </span>
          <span className="text-primary">Do It?</span>
        </motion.p>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Image - Sticky + B&W */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24"
          >
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
              alt="How we do it"
              className="w-full h-[650px] object-cover rounded-lg opacity-80 grayscale"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg" />
          </motion.div>

          {/* Right Content */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <h3 className="text-white text-3xl md:text-4xl font-extrabold uppercase mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
