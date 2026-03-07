const services = [
  "Playlist Pitching",
  "Online Blog Features",
  "Social Media Strategy",
  "Paid Ad Campaign",
  "Press Release Creation",
  "Promotional Videos",
  "Promotional Graphics",
  "Social Banners",
  "Perks & Priority Support",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white pt-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)),
          url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
        
        {/* Subtitle */}
        <p className="text-primary font-semibold tracking-widest text-sm mb-6 uppercase">
          Madmen Records
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 uppercase">
          <span className="block">“ Music Promotion</span>
          <span className="block">Made Easy ”</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-sm tracking-wide leading-relaxed mb-14 uppercase">
          Playlisting. Online Press. Social Strategy. Sponsored Ads And Custom Graphics.
          Launch A High-Impact, Budget-Friendly Music Marketing Campaign Managed By
          Our Industry Pros.
        </p>

        {/* Services Container */}
        <div className="bg-[#111111] rounded-2xl py-12 px-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16 text-left">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center justify-between group cursor-pointer"
              >
                <span className="text-lg font-semibold uppercase tracking-wide">
                  {service}
                </span>
                <span className="text-primary text-2xl font-bold group-hover:translate-x-1 transition-transform">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}