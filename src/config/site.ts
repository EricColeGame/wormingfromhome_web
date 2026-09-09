export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Worming from Home Wiki",
  shortName: "Worming from Home",
  logoText: "WFH",
  tagline: "Guides, Achievements, Controls & Upgrades",
  description: "Explore Worming from Home with beginner guides, controls, task tips, upgrades, achievements, gameplay mechanics, and the latest Steam details.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wormingfromhome.top",
  gameUrl: "https://store.steampowered.com/app/3547270/Worming_from_Home/",
  heroVideoId: "Kf9tZoVLPk4", // Worming from Home Official Launch / Announcement Trailer
  social: {
    discord: "https://discord.gg/K3xFTRFrcY",
    youtube: "https://www.youtube.com/@WormingFromHome",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
