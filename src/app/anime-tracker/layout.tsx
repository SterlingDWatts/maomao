import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anime Tracker | Watchlist",
  description: "Anime we have watched and great options for what is next.",
};

export default function AnimeTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
