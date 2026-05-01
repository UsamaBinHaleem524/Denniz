import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// In production (Vercel) the API lives at /api/* on the same origin, so we use
// a relative URL. In dev we hit the local Express server on port 4242.
const API_URL = import.meta.env.PROD
  ? ""
  : import.meta.env.VITE_API_URL || "http://localhost:4242";

const youtubePlans = [
  {
    id: "youtube-basic",
    tier: "YouTube Growth Plan",
    name: "Basic",
    price: "$500",
    duration: "30–40 Day Campaign",
    songs: "3–5 Songs Included",
    badge: null,
    features: [
      { title: "Campaign Duration", text: "30–40 days, runs until fulfillment of subscribers, views, and results." },
      { title: "AI-Powered Marketing Strategy", text: "Targeting and engaging potential listeners using advanced AI tools." },
      { title: "Subscriber Growth", text: "Gain 3K – 10K organic subscribers." },
      { title: "YouTube Views", text: "60K – 300K organic views through Meta & Google Ads." },
      { title: "Content Creation", text: "Custom cover art provided for your songs." },
      { title: "Watch Time Boost", text: "Up to 4,000 hours to help monetize your channel." },
      { title: "Email Marketing", text: "Reach 20K – 50K emails daily for 30 days." },
      { title: "SMS Marketing", text: "Notify fans about releases, events, and exclusive offers." },
      { title: "AI Playlist Promotion", text: "Placement in relevant playlists using AI targeting." },
      { title: "Meta & Google Ads Campaigns", text: "Targeted ads with A/B testing, retargeting & optimization." },
    ],
  },
  {
    id: "youtube-standard",
    tier: "YouTube Growth Plan",
    name: "Standard",
    price: "$1200",
    duration: "3 Months Campaign",
    songs: "6–10 Songs Included",
    badge: "Most Popular",
    features: [
      { title: "Campaign Duration", text: "90–100 days, runs until fulfillment of subscribers, views, and results." },
      { title: "AI-Powered Marketing Strategy", text: "Targeting and engaging potential listeners using advanced AI tools." },
      { title: "Subscriber Growth", text: "Gain 6K – 20K organic subscribers." },
      { title: "YouTube Views", text: "120K – 600K organic views through Meta & Google Ads." },
      { title: "Industry Outreach", text: "Outreach to 100,000 artists and 1,500 record labels to boost exposure." },
      { title: "Content Creation", text: "Custom cover art provided for your songs." },
      { title: "Watch Time Boost", text: "Up to 4,000 hours to help monetize your channel." },
      { title: "Email Marketing", text: "Reach 25K – 60K emails daily for 90 days." },
      { title: "SMS Marketing", text: "Notify fans about releases, events, and exclusive offers." },
      { title: "AI Playlist Promotion", text: "Placement in relevant playlists using AI targeting." },
      { title: "Meta & Google Ads Campaigns", text: "Targeted ads with A/B testing, retargeting & optimization." },
    ],
  },
  {
    id: "youtube-pro",
    tier: "YouTube Growth Plan",
    name: "PRO",
    price: "$2500",
    duration: "6 Months Campaign",
    songs: "9–15 Songs Included",
    badge: "Premium",
    features: [
      { title: "Campaign Duration", text: "180 days, runs until fulfillment of subscribers, views, and results." },
      { title: "AI-Powered Marketing Strategy", text: "Targeting and engaging potential listeners using advanced AI tools." },
      { title: "Subscriber Growth", text: "Gain 9K – 30K organic subscribers." },
      { title: "YouTube Views", text: "180K – 1.5M organic views through Meta & Google Ads." },
      { title: "Content Creation", text: "Custom cover art provided for your songs." },
      { title: "Watch Time Boost", text: "Up to 4,000 hours to help monetize your channel." },
      { title: "Email Marketing", text: "Reach 30K – 75K emails daily for 180 days." },
      { title: "SMS Marketing", text: "Notify fans about releases, events, and exclusive offers." },
      { title: "AI Playlist Promotion", text: "Placement in relevant playlists using AI targeting." },
      { title: "Meta & Google Ads Campaigns", text: "Targeted ads with A/B testing, retargeting & optimization." },
      { title: "Mass Industry Outreach (Premium)", text: "Email blast to 350,000 artists and 12,000 record labels for collaborations and label interest." },
    ],
  },
];

const socialPlans = [
  {
    id: "tiktok",
    tier: "TikTok Growth Plan",
    name: "TikTok",
    price: "$295",
    priceSuffix: "/ month",
    duration: "30 Day Campaign",
    songs: "Consistent growth and visibility",
    accent: "from-pink-500/30 to-cyan-500/20",
    features: [
      { title: "Campaign Duration", text: "30 days focused on consistent growth and visibility." },
      { title: "AI-Powered Targeting", text: "Reach the right audience based on trends, interests & behavior." },
      { title: "Follower Growth", text: "Gain 2K – 8K organic followers." },
      { title: "Video Views Boost", text: "Get 100K – 1M views across your content with targeted promotion." },
      { title: "Engagement Growth", text: "Boost likes, comments, shares & overall interaction." },
      { title: "Content Optimization", text: "Guidance on hooks, captions & trending formats." },
      { title: "Trend Targeting", text: "Position your content within trending sounds and viral formats." },
      { title: "Paid Ads Strategy", text: "TikTok-focused ad campaigns to maximize exposure." },
      { title: "Audience Building", text: "Convert viewers into real followers and fans." },
      { title: "Performance Tracking", text: "Ongoing optimization based on campaign data." },
    ],
  },
  {
    id: "instagram",
    tier: "Instagram Growth Plan",
    name: "Instagram",
    price: "$295",
    priceSuffix: "",
    duration: "30 Day Campaign",
    songs: "Consistent growth & engagement",
    accent: "from-pink-500/30 to-orange-500/20",
    features: [
      { title: "Campaign Duration", text: "30 days focused on consistent growth and engagement." },
      { title: "AI-Powered Targeting", text: "Reach the right audience based on interests, behavior & niche." },
      { title: "Follower Growth", text: "Gain 1K – 5K organic followers." },
      { title: "Engagement Boost", text: "Increase likes, comments, shares & overall interaction." },
      { title: "Content Optimization", text: "Guidance on posts, captions & hashtags for better performance." },
      { title: "Meta Ads Campaign", text: "Targeted Instagram & Facebook ads for maximum reach." },
      { title: "Audience Targeting", text: "Niche-based targeting to attract real fans, not bots." },
      { title: "Story & Reel Promotion", text: "Boost visibility on high-performing content." },
      { title: "Performance Tracking", text: "Ongoing optimization based on campaign data." },
      { title: "Brand Awareness Growth", text: "Position your profile to attract long-term audience & collaborations." },
    ],
  },
  {
    id: "soundcloud",
    tier: "SoundCloud Growth Plan",
    name: "SoundCloud",
    price: "$295",
    priceSuffix: "/ month",
    duration: "30 Day Campaign",
    songs: "3–5 Tracks Included",
    accent: "from-orange-500/30 to-yellow-500/20",
    features: [
      { title: "Campaign Duration", text: "30 days of focused promotion to increase plays and visibility." },
      { title: "AI-Powered Targeting", text: "Reach listeners based on genre, behavior & interests." },
      { title: "Play Growth", text: "Get 50K – 300K plays on your tracks." },
      { title: "Follower Growth", text: "Gain 1K – 5K real followers." },
      { title: "Engagement Boost", text: "Increase likes, reposts, and comments." },
      { title: "Playlist & Repost Network", text: "Targeted placements to expand your reach." },
      { title: "Email & SMS Promotion", text: "Notify audiences and drive traffic to your tracks." },
      { title: "Audience Building", text: "Convert listeners into long-term fans." },
      { title: "Performance Tracking", text: "Ongoing optimization for better results." },
    ],
  },
];

const streamingPlans = [
  {
    id: "apple-music",
    tier: "Apple Music Growth Plan",
    name: "Apple Music",
    price: "$500",
    priceSuffix: "/ month",
    duration: "30 Day Campaign",
    songs: "3–5 Songs Included",
    accent: "from-red-500/30 to-pink-500/20",
    features: [
      { title: "Campaign Duration", text: "30 days of focused promotion to boost streams and reach." },
      { title: "AI-Powered Targeting", text: "Reach listeners most likely to engage with your music." },
      { title: "Stream Growth", text: "Increase plays on Apple Music organically." },
      { title: "Playlist Placement Support", text: "Targeted outreach to relevant playlists for better visibility." },
      { title: "Content Optimization", text: "Guidance on artwork, track metadata, and release strategy." },
      { title: "Email & SMS Promotion", text: "Notify fans and potential listeners about your release." },
      { title: "Engagement Tracking", text: "Monitor performance and optimize for better results." },
      { title: "Audience Expansion", text: "Convert listeners into long-term fans." },
      { title: "Ads Campaign", text: "Optional paid promotion on Apple Music & Meta platforms for extra reach." },
    ],
  },
  {
    id: "spotify",
    tier: "Spotify Growth Plan",
    name: "Spotify",
    price: "$500",
    priceSuffix: "/ month",
    duration: "30 Day Campaign",
    songs: "3–5 Songs Included",
    accent: "from-green-500/30 to-emerald-500/20",
    features: [
      { title: "Campaign Duration", text: "30 days of focused promotion to boost streams and visibility." },
      { title: "AI-Powered Targeting", text: "Reach listeners most likely to engage with your music." },
      { title: "Stream Growth", text: "Get 100K – 1M streams on your tracks." },
      { title: "Playlist Placement Support", text: "Targeted outreach to relevant Spotify playlists to maximize exposure." },
      { title: "Content Optimization", text: "Guidance on artwork, track metadata, and release strategy." },
      { title: "Email & SMS Promotion", text: "Notify fans and potential listeners about your release." },
      { title: "Engagement Tracking", text: "Monitor performance and optimize for better results." },
      { title: "Audience Expansion", text: "Convert listeners into long-term fans." },
      { title: "Ads Campaign", text: "Optional paid promotion on Spotify & Meta platforms for extra reach." },
    ],
  },
];

function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PlanCard({ plan, featured = false, index, onCheckout, loadingId }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isLoading = loadingId === plan.id;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl overflow-hidden flex flex-col ${
        featured
          ? "bg-gradient-to-b from-primary/20 via-[#1a1a1a] to-[#0d0d0d] border-2 border-primary shadow-[0_0_60px_rgba(242,143,49,0.25)] lg:scale-105 lg:-my-4"
          : "bg-[#141414] border border-white/10"
      }`}
    >
      {plan.badge && (
        <div
          className={`absolute top-0 right-0 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest rounded-bl-2xl ${
            featured ? "bg-primary text-black" : "bg-white/10 text-primary"
          }`}
        >
          {plan.badge}
        </div>
      )}

      <div className="p-8 pb-6 border-b border-white/10">
        <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
          {plan.tier}
        </p>
        <h3 className="text-white text-3xl font-extrabold uppercase mb-6">
          {plan.name}
        </h3>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-white text-5xl font-extrabold">
            {plan.price}
          </span>
          {plan.priceSuffix && (
            <span className="text-gray-400 text-sm">{plan.priceSuffix}</span>
          )}
        </div>

        <div className="space-y-1 mt-4">
          <p className="text-gray-400 text-xs uppercase tracking-wide">
            {plan.duration}
          </p>
          <p className="text-gray-500 text-xs">{plan.songs}</p>
        </div>
      </div>

      <ul className="p-8 space-y-4 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex gap-3">
            <span
              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                featured ? "bg-primary text-black" : "bg-primary/20 text-primary"
              }`}
            >
              <CheckIcon className="w-3 h-3" />
            </span>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">
                {f.title}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed mt-1">
                {f.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="p-8 pt-0">
        <motion.button
          onClick={() => onCheckout(plan.id)}
          disabled={isLoading || !!loadingId}
          whileHover={!loadingId ? { scale: 1.03 } : {}}
          whileTap={!loadingId ? { scale: 0.97 } : {}}
          className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wide transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
            featured
              ? "bg-primary text-black hover:opacity-90"
              : "bg-white/10 text-white hover:bg-primary hover:text-black"
          }`}
        >
          {isLoading ? "Redirecting…" : "Get Started"}
        </motion.button>
      </div>
    </motion.div>
  );
}

function SectionHeader({ inView, eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight max-w-3xl mx-auto">
        {title}
      </h2>
    </motion.div>
  );
}

export default function Promotions() {
  const ytRef = useRef(null);
  const ytInView = useInView(ytRef, { once: true, margin: "-50px" });
  const socialRef = useRef(null);
  const socialInView = useInView(socialRef, { once: true, margin: "-50px" });
  const streamRef = useRef(null);
  const streamInView = useInView(streamRef, { once: true, margin: "-50px" });

  const [loadingId, setLoadingId] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  // Auto-dismiss the banner after 6s
  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => {
      searchParams.delete("status");
      searchParams.delete("session_id");
      setSearchParams(searchParams, { replace: true });
    }, 6000);
    return () => clearTimeout(t);
  }, [status, searchParams, setSearchParams]);

  const handleCheckout = async (planId) => {
    setError(null);
    setLoadingId(planId);
    try {
      const res = await fetch(`${API_URL}/api/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      console.error(err);
      setError("Could not start checkout. Please try again.");
      setLoadingId(null);
    }
  };

  return (
    <>
      {/* Status Banner */}
      {(status || error) && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[60] w-full max-w-md px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl px-5 py-4 text-sm font-semibold shadow-2xl border ${
              error
                ? "bg-red-500/95 text-white border-red-400"
                : status === "success"
                ? "bg-emerald-500/95 text-black border-emerald-400"
                : "bg-yellow-500/95 text-black border-yellow-400"
            }`}
          >
            {error
              ? error
              : status === "success"
              ? "Payment successful! Our team will reach out shortly."
              : "Payment was canceled. You can try again anytime."}
          </motion.div>
        </div>
      )}

      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80"
            alt="Promotions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4"
          >
            Our Promo Packages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide max-w-4xl mx-auto leading-tight"
          >
            Plans Built To Grow Your Sound
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6"
          >
            Pick the campaign that fits your stage. Every plan is data-driven,
            organic, and engineered to deliver real, measurable results.
          </motion.p>
        </div>
      </section>

      {/* YouTube Plans */}
      <section
        ref={ytRef}
        className="relative bg-[#0d0d0d] py-24 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute left-1/4 top-0 w-72 h-72 bg-primary blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-red-600 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            inView={ytInView}
            eyebrow="YouTube Growth"
            title="Take Your Channel To The Next Level"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {youtubePlans.map((plan, i) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                featured={plan.name === "Standard"}
                index={i}
                onCheckout={handleCheckout}
                loadingId={loadingId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Growth Plans (TikTok / Instagram / SoundCloud) */}
      <section
        ref={socialRef}
        className="relative bg-black py-24 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-pink-500 blur-[140px]" />
          <div className="absolute right-1/3 bottom-1/4 w-96 h-96 bg-cyan-500 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            inView={socialInView}
            eyebrow="Social Growth"
            title="Build A Loyal Audience Across Socials"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {socialPlans.map((plan, i) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                index={i}
                onCheckout={handleCheckout}
                loadingId={loadingId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Plans (Apple Music / Spotify) */}
      <section
        ref={streamRef}
        className="relative bg-[#0d0d0d] py-24 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute left-1/4 top-0 w-96 h-96 bg-green-500 blur-[140px]" />
          <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-red-500 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            inView={streamInView}
            eyebrow="Streaming Platforms"
            title="Boost Streams Where It Matters Most"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {streamingPlans.map((plan, i) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                index={i}
                onCheckout={handleCheckout}
                loadingId={loadingId}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
