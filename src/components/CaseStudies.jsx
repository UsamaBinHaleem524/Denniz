export default function CaseStudies() {
  return (
    <section className="relative bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold uppercase mb-8">
              Our Case Studies
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-10">
              Our team have an extensive proven track record of gaining huge
              online and offline success and explosive targeted growth with
              artists globally from a plethora of genres including pop, rock,
              metal, EDM, folk, country, indie, singer-songwriter, reggaeton,
              R&B, afrobeat, drill and hip-hop.
            </p>

            {/* Store Buttons */}
            <div className="flex gap-6">
              <a
                href="#"
                className="border border-white/30 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-white/10 transition"
              >
                <span className="text-xl"></span>
                <div className="text-left">
                  <p className="text-[10px] uppercase">Get it on</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="border border-white/30 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-white/10 transition"
              >
                <span className="text-xl">▶</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            
            {/* Red Frame Background */}
            <div className="absolute w-[85%] h-[85%] border-[40px] border-red-900 rounded-3xl -z-10" />

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
              alt="Artists"
              className="relative z-10 w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}