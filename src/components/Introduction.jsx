const stats = [
  { number: "35M+", label: "Downloads" },
  { number: "55+", label: "Music Videos" },
  { number: "90+", label: "Music Albums" },
  { number: "108M+", label: "Subscribers" },
];

export default function Introduction() {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold uppercase mb-8">
              Our Introduction
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-16">
              Welcome to Madman Records! For nearly six years, we’ve been the
              go-to agency for artists seeking to amplify their presence and
              monetize their talent. From building a devoted fanbase with
              organic strategies to crafting stunning content and launching
              targeted ad campaigns, we offer a 360-degree solution.
            </p>

            {/* Stats 2x2 Grid */}
            <div className="grid grid-cols-2 gap-y-12 relative max-w-lg mb-16">
              
              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
              {/* Horizontal Divider */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />

              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-white text-4xl font-extrabold">
                    {stat.number}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            
            {/* Quote */}
            <p className="text-gray-400 italic text-sm mb-6 max-w-md">
              “Music is the great uniter. An incredible force. Something that
              people who differ on everything and anything else can have in
              common.”
            </p>

            {/* Button */}
            <button className="bg-primary text-black font-semibold px-6 py-3 rounded-md mb-12 hover:opacity-90 transition">
              More About Us
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                alt="Our Team"
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-1/3 top-0 bottom-0 w-40 bg-red-600 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 top-1/3 w-40 bg-red-600 blur-3xl" />
      </div>
    </section>
  );
}