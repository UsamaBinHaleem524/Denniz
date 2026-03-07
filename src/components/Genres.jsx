const genres = [
  {
    number: "01",
    title: "Music PR & Press",
    description:
      "Phasellus nulla dictumst quae optio vitae illum varius lacinia, magnam pharetra.",
  },
  {
    number: "02",
    title: "Music Charting",
    description:
      "Phasellus nulla dictumst quae optio vitae illum varius lacinia, magnam pharetra.",
  },
  {
    number: "03",
    title: "Artist Branding",
    description:
      "Phasellus nulla dictumst quae optio vitae illum varius lacinia, magnam pharetra.",
  },
];

export default function Genres() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading (Left Aligned) */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-24">
          Our Expertise Spans All Genres
        </h2>

        {/* 3 Columns Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Vertical Divider Lines (Desktop Only) */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/10" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/10" />

          {genres.map((genre) => (
            <div key={genre.number} className="flex items-start gap-6">
              
              {/* Red Number Box */}
              <div className="w-20 h-20 flex items-center justify-center border-4 border-red-900 text-white text-2xl font-bold">
                {genre.number}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-white text-lg font-bold uppercase mb-4">
                  {genre.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {genre.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}