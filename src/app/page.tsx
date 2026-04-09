import Hero from '@/components/home/Hero';
import TrustBanner from '@/components/home/TrustBanner';
import BrandStatement from '@/components/home/BrandStatement';
import ShopSection from '@/components/home/ShopSection';
import CollectionLinks from '@/components/home/CollectionLinks';
import AboutDesigner from '@/components/home/AboutDesigner';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <BrandStatement />
      <ShopSection />
      <CollectionLinks />
      <AboutDesigner />
      <Newsletter />
    </>
  );
}
