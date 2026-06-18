import Navigation from '@/components/navigation';

import HeroSection from '@/components/sections/hero-section';
import EducationSection from '@/components/sections/education-section';
import ExpertiseSection from '@/components/sections/expertise-section';
import PhilosophySection from '@/components/sections/philosophy-section';
import ResearchSection from '@/components/sections/research-section';
import OfficeHoursSection from '@/components/sections/office-hours-section';
import InsuranceSection from '@/components/sections/insurance-section';
import ContactSection from '@/components/sections/contact-section';
import FooterSection from '@/components/sections/footer-section';
import MapSection from '@/components/sections/map-section';
import { getMdxContent } from '@/lib/mdx';
// import { Button } from '@/components/ui/button';
// import { DESTRUCTION } from 'dns';

export default function HomePage() {
  const hero = getMdxContent('hero.mdx');
  const education = getMdxContent('education.mdx');
  const expertise = getMdxContent('expertise.mdx');
  const philosophy = getMdxContent('philosophy.mdx');
  const research = getMdxContent('research.mdx');
  const officeHours = getMdxContent('office-hours.mdx');
  const insurance = getMdxContent('insurance.mdx');

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navigation />

      <HeroSection content={hero.content} />

      <EducationSection content={education.content} />

      <ExpertiseSection content={expertise.content} />

      <PhilosophySection content={philosophy.content} />

      <ResearchSection content={research.content} />

      <OfficeHoursSection content={officeHours.content} />

      <InsuranceSection content={insurance.content} />

      <MapSection />

      <ContactSection />

      <FooterSection />
    </main>
  );
}
