const packages = [
  {
    name: "Starter Boost",
    price: "$100",
    description:
      "A 10-day sprint to amplify your sound and connect with your audience, without breaking the bank.",
    features: [
      "YouTube Ads (via Google Ads)",
      "TikTok Ads",
      "Instagram Ads",
      "Creative Assets Provided:",
      "2 Custom Cover Art",
      "1 Reel, Instagram or",
      "TikTok-Style Edit",
      "1 Motion Artwork or Custom",
      "Logo or Banner (Your Choice)",
    ],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
  },
  {
    name: "Double Impact",
    price: "$200",
    description:
      "A 20-day, double-long campaign for artists who want maximum exposure and custom content without breaking the bank.",
    features: [
      "YouTube Ads (via Google Ads)",
      "TikTok Ads",
      "Instagram Ads",
      "Option to Run Split Targeting or Combine",
      "Efforts Depending on Your Campaign",
      "Goals",
      "Creative Assets Provided (for Each Song):",
      "2 Custom Cover Arts",
      "2 Reels (1 Per Song)",
      "2 Motion Artworks or Logo and 1 Banner",
    ],
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
  },
  {
    name: "Momentum Builder",
    price: "$369",
    description:
      "4 week all-in-one campaign for artists who want an affordable and effective music marketing package.",
    features: [
      "4 Week Campaign",
      "Playlist Pitching",
      "Music Blog Features",
      "Social Posting Plan",
      "PR & Playlisting Guide",
      "Custom Graphics Pack",
      "Press Release",
      "Reports & Analytics",
      "Priority Support",
      "2x Video Ads",
    ],
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
  {
    name: "Artist Launchpad",
    price: "$499",
    description:
      "4 week all-in-one campaign for artists who want an affordable and effective music marketing package.",
    features: [
      "6 Week Campaign",
      "Playlist Pitching",
      "Music Blog Features",
      "Social Posting Plan",
      "PR & Playlisting Guide",
      "Custom Graphics Pack",
      "Press Release",
      "Reports & Analytics",
      "Priority Support",
      "2x Video Ads",
    ],
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
  },
];

export default function Promotions() {
  return (
    <section className="bg-[#0d0d0d] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary text-black text-xs font-bold px-5 py-2 rounded-md uppercase tracking-wide mb-6">
            Our Promo Packages
          </span>
          <h1 className="text-3xl font-extrabold uppercase leading-tight max-w-2xl mx-auto">
            We Know Music Marketing Inside Out. Work With Us To Raise Your
            Profile.
          </h1>
        </div>

        {/* Packages Grid - Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {packages.slice(0, 3).map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>

        {/* Bottom package - single card left aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.slice(3).map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/75 group-hover:bg-black/65 transition duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-2">
          {pkg.name}
        </h3>
        <p className="text-4xl md:text-5xl font-extrabold mb-4">{pkg.price}</p>
        <p className="text-gray-300 text-xs leading-relaxed mb-6 max-w-xs">
          {pkg.description}
        </p>

        <ul className="space-y-1 mb-8">
          {pkg.features.map((feature, i) => (
            <li
              key={i}
              className="text-white text-xs font-semibold uppercase tracking-wide"
            >
              {feature}
            </li>
          ))}
        </ul>

        <button className="bg-primary text-black text-sm font-bold px-6 py-3 rounded-md hover:opacity-90 transition uppercase">
          Buy Now
        </button>
      </div>
    </div>
  );
}
