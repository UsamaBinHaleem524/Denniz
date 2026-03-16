import Reviews from "../components/Reviews";

const stats = [
  { number: "35M+", label: "Downloads" },
  { number: "55+", label: "Music Videos" },
  { number: "90+", label: "Music Albums" },
  { number: "108M+", label: "Subscribers" },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&q=80"
            alt="Concert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold uppercase tracking-wide">
          About Us
        </h1>
      </section>

      {/* Our Introduction */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-12">
            Our Introduction
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <p className="text-gray-400 text-sm leading-relaxed">
              Id ornare mattis amet consectetur ante integer corporis, impeit
              placerat totam curabitur pretium adipisci molestie pellentesque
              tetuer ante integer corporis, impeit placerat totam curabitur
              pretu mole.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quisquam porta necessitatibus magno blandit arcu ad nesciunt
              liberor magna animi dictumst ratione placerat, quasi provident eum
              quasi, commodo irure. Earum litora id quis recendos conque
              explicabo. Imperdiet ipsa erat. Eius elementum aperiam irure,
              aliquo nascenas ac alias nesciunt illumquat habitant.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-white text-4xl md:text-5xl font-extrabold">
                  {stat.number}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Media Section - Video + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Card */}
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/kJQP7kiw5Fk"
                title="YouTube video"
                className="w-full h-[350px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Image Card */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                alt="Band"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Banner */}
      <section className="bg-primary py-14">
        <p className="text-white text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-center">
          We Are Proud Vendors Of These Iconic Records Label
        </p>
      </section>

      {/* Reviews */}
      <Reviews />
    </>
  );
}
