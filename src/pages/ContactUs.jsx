import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email Address",
    detail: "Team@madmenrecords.com",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Address Location",
    detail: "53 E Carmel Valley Rd Carmel Valley, California(CA), 93924",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Phone Number",
    detail: "(213) 799-7188\n(213) 799-7146",
    highlight: false,
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold uppercase tracking-wide">
          Contact
        </h1>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="bg-[#0d0d0d] pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">
                Feel Free To Contact & Reach
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                Delecti nibh magna habitant imperdiet risust recisandae. Dapibus
                nulla scelerisque mollis irure cupiditate viva!
              </p>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.6!2d-121.733!3d36.414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de1512de7281d%3A0x3e0b5e1e0b0b0b0b!2s53%20E%20Carmel%20Valley%20Rd%2C%20Carmel%20Valley%2C%20CA%2093924!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Madmen Records Location"
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 -bottom-4 w-2/3 border-2 border-red-900/40 rounded-2xl -z-10" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
                      placeholder="Email"
                    />
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
                      className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none resize-none"
                    placeholder="Your message"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5"
                  />
                  By checking this box, I consent to receive CONVERSATIONAL SMS
                  from Madmen Records. Reply STOP to opt-out; Reply HELP for
                  support; Message & data rates may apply. Messaging frequency
                  may vary. Visit our Privacy Policy and Terms of Service.
                </label>

                <button
                  type="submit"
                  className="bg-primary text-black text-sm font-bold px-8 py-3 rounded-md hover:opacity-90 transition uppercase tracking-wide"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
