import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PatientGuideSection } from './components/PatientGuideSection';
import { ServicesSection } from './components/ServicesSection';
import { HowToRemit } from './components/HowToRemit';
import { VirtualOrderForm } from './components/VirtualOrderForm';
import { TechnologySection } from './components/TechnologySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { PatientPortalModal } from './components/PatientPortalModal';
import { ServiceDetailModal, ServiceDetail } from './components/ServiceDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { UserAudience } from './types';

export default function App() {
  const [audience, setAudience] = useState<UserAudience>('doctor');
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
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

  const handleOpenPortal = () => {
    window.open('https://sistema.maxilodentrx.com/accounts/login/?next=/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#F6F8F8] text-[#243638] flex flex-col font-sans selection:bg-[#188C8E] selection:text-white">
      {/* Fixed Top Header */}
      <Header
        audience={audience}
        onAudienceChange={setAudience}
        onOpenPortal={handleOpenPortal}
        onNavigate={scrollToSection}
      />

      {/* Main Content with top padding for fixed header */}
      <main className="w-full pt-28 bg-[#F6F8F8] flex-1">
        {/* Hero Section */}
        <Hero
          audience={audience}
          onOpenPortal={handleOpenPortal}
          onRemitClick={handleRemitClick}
        />

        {/* Trust Bar (4 pillars) */}
        <TrustBar />

        {/* Patient Guide banner if audience is set to patient */}
        {audience === 'patient' && (
          <PatientGuideSection
            onOpenPortal={handleOpenPortal}
            onOpenOrder={handleRemitClick}
          />
        )}

        {/* 6 Clinical Services */}
        <ServicesSection
          onSelectService={(svc) => setSelectedService(svc)}
          onRemitWithService={handleRemitWithService}
        />

        {/* How To Remit 3 Steps */}
        <HowToRemit
          onFillOrderClick={handleRemitClick}
          onOpenPortalClick={() => setIsPortalOpen(true)}
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
        onOpenPortal={handleOpenPortal}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Patient & Doctor Radiography Portal / DICOM Viewer Modal */}
      <PatientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRemitClick={handleRemitWithService}
      />
    </div>
  );
}
