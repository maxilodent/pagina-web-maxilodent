import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PatientGuideSection } from './components/PatientGuideSection';
import { ServicesSection } from './components/ServicesSection';
import { ServicesBanner } from './components/ServicesBanner';
import { HowToRemit } from './components/HowToRemit';
import { VirtualOrderForm } from './components/VirtualOrderForm';
import { TechnologySection } from './components/TechnologySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ServiceDetailModal, ServiceDetail } from './components/ServiceDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FinancialStatementsButton } from './components/FinancialStatementsButton';
import { UserAudience } from './types';

export default function App() {
  const [audience, setAudience] = useState<UserAudience>('doctor');
  const [animateAudienceChange, setAnimateAudienceChange] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [animateServiceOpen, setAnimateServiceOpen] = useState(false);
  const [preselectedStudy, setPreselectedStudy] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRemitClick = () => {
    scrollToSection('orden-virtual');
  };

  const handleRemitWithService = (serviceTitle: string) => {
    setPreselectedStudy(serviceTitle);
    scrollToSection('orden-virtual');
  };

  return (
    <div className="min-h-screen bg-[#F6F8F8] text-[#243638] flex flex-col font-sans selection:bg-[#188C8E] selection:text-white">
      {/* Fixed Top Header */}
      <Header
        audience={audience}
        onAudienceChange={(nextAudience, animate) => {
          setAudience(nextAudience);
          setAnimateAudienceChange(animate);
        }}
        onNavigate={scrollToSection}
      />

      {/* Main Content with top padding for fixed header */}
      <main className="w-full pt-28 bg-[#F6F8F8] flex-1">
        <section
          aria-label="Identidad de Maxilodent"
          className="w-full bg-[#126F72] px-5 py-8 text-center text-white sm:py-10"
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/aistudio/logo-maxilodent-contraste.png`}
            alt="Logo de Maxilodent"
            width={435}
            height={150}
            fetchPriority="high"
            className="mx-auto mb-3 h-20 w-auto object-contain sm:mb-4 sm:h-28"
          />
          <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-white/95 sm:mt-4 sm:text-xl">
            Diagnóstico por imágenes para odontología
          </p>
        </section>

        {/* Hero Section */}
        <Hero
          audience={audience}
          animateAudienceChange={animateAudienceChange}
          onRemitClick={handleRemitClick}
        />

        {/* Trust Bar (4 pillars) */}
        <TrustBar />

        {/* Patient Guide banner if audience is set to patient */}
        {audience === 'patient' && (
          <PatientGuideSection animate={animateAudienceChange} />
        )}

        {/* Diagnostic Services */}
        <ServicesSection
          onSelectService={(svc, animate) => {
            setAnimateServiceOpen(animate);
            setSelectedService(svc);
          }}
          onRemitWithService={handleRemitWithService}
        />

        <ServicesBanner />

        {/* How To Remit 3 Steps */}
        <HowToRemit
          onFillOrderClick={handleRemitClick}
        />

        {/* Interactive Virtual Order Form */}
        <VirtualOrderForm preselectedStudy={preselectedStudy} />

        {/* Technology OP300 Section */}
        <TechnologySection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Interactive FAQ Accordion */}
        <FaqSection />

        {/* Final CTA Banner */}
        <CtaBanner onRemitClick={handleRemitClick} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
      <FinancialStatementsButton />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        animateOnOpen={animateServiceOpen}
        onClose={() => setSelectedService(null)}
        onRemitClick={handleRemitWithService}
      />
    </div>
  );
}
