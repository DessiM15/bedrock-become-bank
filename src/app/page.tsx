import HomeContent from "@/components/HomeContent";
import { getLatestArticles } from "@/lib/articles";

export const revalidate = 86400;

export default function HomePage() {
  const latestArticles = getLatestArticles(3);

  return <HomeContent latestArticles={latestArticles} />;
}
