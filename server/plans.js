// Server-side source of truth for all purchasable plans.
// Prices are in the smallest currency unit (cents for USD).
// IMPORTANT: never trust prices from the client — always look them up here.
export const plans = {
  "youtube-basic": {
    name: "YouTube Growth Plan — Basic",
    description: "30–40 day campaign, 3–5 songs included.",
    amount: 50000,
    currency: "usd",
  },
  "youtube-standard": {
    name: "YouTube Growth Plan — Standard",
    description: "3 month campaign, 6–10 songs included.",
    amount: 150000,
    currency: "usd",
  },
  "youtube-pro": {
    name: "YouTube Growth Plan — PRO",
    description: "6 month campaign, 9–15 songs included.",
    amount: 350000,
    currency: "usd",
  },
  "tiktok": {
    name: "TikTok Growth Plan",
    description: "30 day campaign, follower & view growth.",
    amount: 29500,
    currency: "usd",
  },
  "instagram": {
    name: "Instagram Growth Plan",
    description: "30 day campaign, audience & engagement growth.",
    amount: 29500,
    currency: "usd",
  },
  "soundcloud": {
    name: "SoundCloud Growth Plan",
    description: "30 day campaign, 3–5 tracks included.",
    amount: 29500,
    currency: "usd",
  },
  "apple-music": {
    name: "Apple Music Growth Plan",
    description: "30 day campaign, 3–5 songs included.",
    amount: 50000,
    currency: "usd",
  },
  "spotify": {
    name: "Spotify Growth Plan",
    description: "30 day campaign, 3–5 songs included.",
    amount: 50000,
    currency: "usd",
  },
};
