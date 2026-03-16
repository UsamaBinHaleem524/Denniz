import { useState } from "react";

const brandDeals = [
  {
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
    alt: "Aura Bora",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    alt: "Hypebeast",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    alt: "Vans",
  },
];

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-[#0d0d0d] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-10">
          Grow With{" "}
          <span className="text-primary">Madmen Records</span>
        </h1>

        {/* Progress Bar */}
        <div className="flex items-center gap-0 mb-14 max-w-xl mx-auto">
          <div className="w-8 h-8 rounded-full bg-primary text-black text-sm font-bold flex items-center justify-center shrink-0">
            1
          </div>
          <div className="flex-1 h-0.5 bg-gray-600">
            <div className="h-full bg-primary w-full" />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-600 text-gray-400 text-sm font-bold flex items-center justify-center shrink-0">
            2
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <FormField
            label="Artist Name"
            name="artistName"
            value={form.artistName}
            onChange={handleChange}
            placeholder="Artist Name"
          />
          <FormField
            label="Instagram Username"
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
            placeholder="Instagram Handle"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <FormField
            label="Spotify or YouTube Link"
            name="trackLink"
            value={form.trackLink}
            onChange={handleChange}
            placeholder="Your Track Link"
          />
          <FormField
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          {/* Select: How Long */}
          <div>
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
          </div>

          {/* Select: Budget */}
          <div>
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
          </div>

          {/* Select: Options */}
          <div>
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
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary text-black text-lg font-bold px-12 py-4 rounded-md hover:opacity-90 transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      {/* Brand Deals Section */}
      <div className="max-w-5xl mx-auto px-6 mt-28">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-center mb-12">
          Brands Deals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandDeals.map((deal, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden h-[300px]"
            >
              <img
                src={deal.image}
                alt={deal.alt}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormField({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white text-black rounded-lg px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}
