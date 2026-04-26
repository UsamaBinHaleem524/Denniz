import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const brandDeals = [
  {
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80",
    alt: "Aura Bora",
    name: "Aura Bora",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80",
    alt: "Hypebeast",
    name: "Hypebeast",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80",
    alt: "Vans",
    name: "Vans",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&q=80",
    alt: "Nike",
    name: "Nike",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1200&q=80",
    alt: "Ray-Ban",
    name: "Ray-Ban",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80",
    alt: "Adidas",
    name: "Adidas",
  },
];

function BrandDealsCarousel({ inView }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = brandDeals.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4000);
    return () => clearInterval(id);
  }, [paused, total]);

  const visible = [
    brandDeals[index % total],
    brandDeals[(index + 1) % total],
    brandDeals[(index + 2) % total],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative px-12 md:px-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Visible 3-card window */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((deal, i) => (
            <motion.div
              key={`${index}-${i}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl overflow-hidden h-[300px]"
            >
              <img
                src={deal.image}
                alt={deal.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Prev arrow (left of carousel) */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary text-white hover:text-black backdrop-blur-sm flex items-center justify-center transition cursor-pointer border border-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow (right of carousel) */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-primary text-white hover:text-black backdrop-blur-sm flex items-center justify-center transition cursor-pointer border border-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function GetFunded() {
  const [form, setForm] = useState({
    artistName: "",
    instagram: "",
    email: "",
    trackLink: "",
    phone: "",
    experience: "Less then 1 year",
    budget: "No budget",
    option: "Get Funded",
  });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-50px" });
  const brandsRef = useRef(null);
  const brandsInView = useInView(brandsRef, { once: true, margin: "-80px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formFields = [
    { label: "Artist Name", name: "artistName", placeholder: "Artist Name" },
    { label: "Instagram Username", name: "instagram", placeholder: "Instagram Handle" },
    { label: "Email", name: "email", type: "email", placeholder: "Email" },
    { label: "Spotify or YouTube Link", name: "trackLink", placeholder: "Your Track Link" },
    { label: "Phone Number", name: "phone", type: "tel", placeholder: "Phone Number" },
  ];

  return (
    <section className="bg-[#0d0d0d] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6" ref={formRef}>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-10"
        >
          Grow With{" "}
          <span className="text-primary">Deniz Marketing</span>
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={formInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-0 mb-14 max-w-xl mx-auto origin-left"
        >
          <div className="w-8 h-8 rounded-full bg-primary text-black text-sm font-bold flex items-center justify-center shrink-0">
            1
          </div>
          <div className="flex-1 h-0.5 bg-gray-600">
            <div className="h-full bg-primary w-full" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-600 text-gray-400 text-sm font-bold flex items-center justify-center shrink-0">
            2
          </div>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          {formFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
            >
              <label className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                {field.label}
              </label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
              />
            </motion.div>
          ))}

          {/* Select: How Long */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <label className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
              How Long You Are Making Music
            </label>
            <select
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none appearance-none cursor-pointer"
            >
              <option>Less then 1 year</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option>5+ years</option>
            </select>
          </motion.div>

          {/* Select: Budget */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.78 }}
          >
            <label className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
              Marketing Budget You Are Spending
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none appearance-none cursor-pointer"
            >
              <option>No budget</option>
              <option>$100 - $500</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </motion.div>

          {/* Select: Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.86 }}
          >
            <label className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
              Select Options
            </label>
            <select
              name="option"
              value={form.option}
              onChange={handleChange}
              className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none appearance-none cursor-pointer"
            >
              <option>Get Funded</option>
              <option>Promotion</option>
              <option>Distribution</option>
              <option>Brand Deal</option>
            </select>
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-primary text-black text-lg font-bold px-12 py-4 rounded-md hover:opacity-90 transition"
            >
              Next
            </motion.button>
          </motion.div>
        </form>
      </div>

      {/* Brand Deals Section */}
      <div className="max-w-5xl mx-auto px-6 mt-28" ref={brandsRef}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={brandsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold uppercase text-center mb-12"
        >
          Brands Deals
        </motion.h2>

        <BrandDealsCarousel inView={brandsInView} />
      </div>
    </section>
  );
}
