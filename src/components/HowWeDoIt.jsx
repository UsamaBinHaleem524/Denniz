import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "We Get To Know You",
    description:
      "Before we get started, we'll take time to learn all about you and your music. Once we've got all the info we need to maximize your promo potential, we can get to work on your campaign.",
  },
  {
    title: "We Develop Your Brand",
    description:
      "Now it's time to pitch your music to our network of playlist curators, music bloggers and journalists. We'll also create your custom social schedule and graphics — and launch your ad campaign if you upgraded to Promo Plus.",
  },
  {
    title: "We Guarantee Results",
    description:
      "We'll keep pitching your music to our network of Spotify playlist curators until you land placements. And our close relationship industry tastemakers means we can guarantee you'll be featured by at least two music blogs.",
  },
  {
    title: "We Help You DIY",
    description:
      "We know the show goes on after your campaign is over, so we'll give you the tools and advice you need to keep promoting yourself. You'll receive detailed reports and feedback from your campaign, as well as exclusive guides filled with PR and playlisting tips, tricks and tactics.",
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
