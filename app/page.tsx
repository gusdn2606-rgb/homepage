import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import RecipeIdeas from "@/components/RecipeIdeas";
import OrderSection from "@/components/OrderSection";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { getFeaturedProduct } from "@/lib/product";

export default async function Home() {
  const product = await getFeaturedProduct();

  return (
    <>
      <Hero product={product} />
      <TrustBadges />
      <RecipeIdeas />
      <OrderSection product={product} />
      <Reviews product={product} />
      <Faq />
      <Footer />
    </>
  );
}
