import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    title: "Email Address",
    detail: "team@denizmarketing.com",
    highlight: false,
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    title: "Address Location",
    detail: "Richmond Hill, Queens, New York",
    highlight: true,
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "FaceTime",
    detail: "team@denizmarketing.com",
    highlight: false,
  },
];

function validateField(name, value) {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return "";
    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email";
      return "";
    case "number":
      if (!value.trim()) return "Phone number is required";
      if (!/^[\d\s\-+()]{7,15}$/.test(value))
        return "Please enter a valid phone number";
      return "";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters";
      return "";
    case "consent":
      if (!value) return "You must agree to continue";
      return "";
    default:
      return "";
  }
}

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: fieldValue }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, fieldValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, fieldValue) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, form[key]);
    });
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      number: true,
      message: true,
      consent: true,
    });

    const hasErrors = Object.values(newErrors).some((err) => err);
    if (hasErrors) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please try again later.",
      });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.number,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus({
        type: "success",
        message: "Message sent! We'll be in touch soon.",
      });
      setForm({ name: "", email: "", number: "", message: "", consent: false });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message: "Could not send message. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=80"
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
          Contact Us
        </motion.h1>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-[#0d0d0d] py-20" ref={cardsRef}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-8 text-center flex flex-col items-center gap-4 ${
                  item.highlight
                    ? "bg-primary text-black"
                    : "bg-[#1a1a1a] text-white"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    item.highlight ? "bg-black/10" : "bg-white/10"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs whitespace-pre-line leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="bg-[#0d0d0d] pb-28" ref={formRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold uppercase mb-4"
              >
                Feel Free To Contact & Reach
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 text-sm leading-relaxed mb-10"
              >
                We’re here to help you take your music to the next level.
                Whether you have questions about our services, want to discuss a
                campaign, or are ready to start your growth journey, don’t
                hesitate to reach out. We look forward to connecting with you
                and helping your music reach its full potential.
              </motion.p>

              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden h-[280px]"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Richmond+Hill+Queens+New+York&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Deniz Marketing Location"
                />
              </motion.div>
            </div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 -bottom-4 w-2/3 border-2 border-red-900/40 rounded-2xl -z-10" />

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none transition-all ${
                      touched.name && errors.name
                        ? "ring-2 ring-red-500"
                        : "focus:ring-2 focus:ring-primary"
                    }`}
                    placeholder="Your name"
                  />
                  {touched.name && errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none transition-all ${
                        touched.email && errors.email
                          ? "ring-2 ring-red-500"
                          : "focus:ring-2 focus:ring-primary"
                      }`}
                      placeholder="Email"
                    />
                    {touched.email && errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1.5 font-medium"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="number"
                      value={form.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none transition-all ${
                        touched.number && errors.number
                          ? "ring-2 ring-red-500"
                          : "focus:ring-2 focus:ring-primary"
                      }`}
                      placeholder="Phone number"
                    />
                    {touched.number && errors.number && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1.5 font-medium"
                      >
                        {errors.number}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none resize-none transition-all ${
                      touched.message && errors.message
                        ? "ring-2 ring-red-500"
                        : "focus:ring-2 focus:ring-primary"
                    }`}
                    placeholder="Your message"
                  />
                  {touched.message && errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <label className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="mt-0.5"
                    />
                    By checking this box, I consent to receive CONVERSATIONAL
                    SMS from Deniz Marketing. Reply STOP to opt-out; Reply HELP
                    for support; Message & data rates may apply. Messaging
                    frequency may vary. Visit our Privacy Policy and Terms of
                    Service.
                  </label>
                  {touched.consent && errors.consent && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1.5 font-medium"
                    >
                      {errors.consent}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={!submitting ? { scale: 1.05 } : {}}
                  whileTap={!submitting ? { scale: 0.95 } : {}}
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-black text-sm font-bold px-8 py-3 rounded-md hover:opacity-90 transition uppercase tracking-wide cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Submit Message"}
                </motion.button>

                {/* Status Banner */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      key={status.type}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mt-4 rounded-lg px-4 py-3 text-sm font-semibold ${
                        status.type === "success"
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                          : "bg-red-500/15 text-red-300 border border-red-500/30"
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
