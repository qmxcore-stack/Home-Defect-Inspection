/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProblemSection from './components/ProblemSection';
import SolutionGallerySection from './components/SolutionGallerySection';
import ScopeSection from './components/ScopeSection';
import ProcessSection from './components/ProcessSection';
import TrustPricingSection from './components/TrustPricingSection';
import ContactSection from './components/ContactSection';
import NewsletterPopup from './components/NewsletterPopup';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProblemSection />
      <SolutionGallerySection />
      <ScopeSection />
      <ProcessSection />
      <TrustPricingSection />
      <ContactSection />
      <NewsletterPopup />
      
      {/* Footer inline since it is simple */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs mb-3">Hak Cipta Terpelihara &copy; {new Date().getFullYear()} DefectInspect Profesional.</p>
          <p className="text-xs text-slate-500">Membantu pemilik rumah mengenal pasti kecacatan hartanah dengan tepat dan profesional.</p>
        </div>
      </footer>
    </div>
  );
}
