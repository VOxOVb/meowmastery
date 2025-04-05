import CTAButton from "../components/landing/CTAButton";
import Description from "../components/landing/Description";
import HeroSubtitle from "../components/landing/HeroSubtitle";
import HeroTitle from "../components/landing/HeroTitle";
import HeroVisual from "../components/landing/HeroVisual";

export default function Landing() {
  return (
    <>
      <HeroSubtitle />
      <HeroTitle />
      <HeroVisual />
      <Description />
      <CTAButton />
    </>
  );
}
