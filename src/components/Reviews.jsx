import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpeg";
import img6 from "../assets/image6.jpg";

const reviews = [
  {
    text: "Norman and his team deliver precise, personalized campaigns with completely organic results, providing unmatched support at every step. Any artist serious about growth will see real value working with them.",
    name: "SIAHLANSKY",
    avatar: img1,
    color: "dark",
  },
  {
    text: "I loved working with Norman! They helped me grow my audience and bring my music and storytelling to life while staying true to my mission.",
    name: "SKIMASKRECO",
    avatar: img2,
    color: "green",
  },
  {
    text: "Working with Deniz's team has been amazing. They really took the time to understand my vision and helped me grow my audience while keeping my creativity front and center. The whole process was smooth, professional, and motivating — I feel more confident in my music and content than ever.",
    name: "NAFL_AKA_BRUCE_WAYNE",
    avatar: img3,
    color: "dark",
  },
  {
    text: "I've tried multiple platforms before, but Norman's approach felt real and effective. I am grateful for the support and the amazing results!",
    name: "CBCKEEM",
    avatar: img4,
    color: "green",
  },
  {
    text: "I've tried multiple platforms before, but Norman's approach felt real and effective. I am grateful for the support and the amazing results!",
    name: "ITZDOMAE",
    avatar: img5,
    color: "dark",
  },
  {
    text: "Every project with Norman is executed with precision and thoughtful strategy. The campaigns are fully organic, delivering consistent growth and meaningful results for artists.",
    name: "IM_DYELLE101",
    avatar: img6,
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
