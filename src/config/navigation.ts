import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
  { key: "achievements", path: "/achievements", isContentType: true },
  { key: "scores", path: "/scores", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "reviews", path: "/reviews", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
