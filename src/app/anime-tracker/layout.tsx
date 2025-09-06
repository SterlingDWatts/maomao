import type { Metadata, Viewport } from "next";

import { theme } from "../theme";

export const metadata: Metadata = {
  title: "Anime Tracker | Watchlist",
  description: "Anime we have watched and great options for what is next.",
};

export const viewport: Viewport = {
  themeColor: theme.palette.secondary.dark,
};

export default function AnimeTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
