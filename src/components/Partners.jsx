import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const logos = [logo1, logo2, logo3, logo4];

export default function Partners() {
  const doubled = [...logos, ...logos];

  return (
    <section className="bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase mb-14 font-semibold">
          We Are Proud Vendors Of These Iconic Records Label
        </p>

        {/* Sliding Logos */}
        <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex items-center gap-16 md:gap-24 w-max animate-marquee">
            {doubled.map((logo, index) => (
              <div key={index} className="shrink-0 opacity-50 hover:opacity-80 transition duration-300">
                <img
                  src={logo}
                  alt="partner logo"
                  className="h-12 md:h-40 object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
