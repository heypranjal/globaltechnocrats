import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, FileText, Phone, Award, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const OVERVIEW_IMAGE =
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730063/main_photo_mjwbpg.png';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730040/1.a_wmnrwz.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730040/2_mdkij7.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730063/3_l8x5n5.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730062/4_fqxorb.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730066/5_mjzcww.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730065/6_bpgbkw.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730066/7_yngjva.jpg',
];

const certBadges = [
  { label: 'IS 4759', sub: 'Certified' },
  { label: 'ASTM A392', sub: 'Compliant' },
  { label: 'Hot-dip', sub: 'Galvanized' },
  { label: 'Anti-Cut', sub: 'Design' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our security consultants', cta: 'Call Now', href: 'tel:+919810282636', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specs and variant selection guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your project scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const overviewPoints = [
  'Razor-sharp welded mesh — combines cut-resistance with high through-visibility',
  'Available in Standard GI, Stainless Steel (SS304/SS316), and PVC-coated variants',
  'Mesh apertures from 50 × 50 mm to 100 × 50 mm — scalable to threat level',
  'Hot-dip galvanized finish per IS 4759 for long-term corrosion resistance',
  'Rapid clip-fix installation over standard mesh or independent post systems',
  'Compatible with fence-top additions, wall-crest defence, and standalone barriers',
];

const variants = [
  {
    name: 'Standard Razor Mesh',
    tagline: 'Galvanized Steel',
    description:
      'The core Razor Mesh product — high-tensile galvanized steel with sharpened blades welded into a rigid mesh grid. The go-to configuration for perimeter defence, industrial estates and secure facilities.',
    image:
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730040/2_mdkij7.png',
    features: [
      'High-tensile galvanized steel core',
      'Razor blades pressed and welded to the mesh',
      'Aperture 50 × 100 mm for through-visibility',
      'Ideal for industrial and defence perimeters',
    ],
  },
  {
    name: 'SS Razor Mesh',
    tagline: 'Stainless Steel (SS304/SS316)',
    description:
      'Stainless steel variant engineered for marine, coastal and chemically aggressive environments. Retains cut-resistance and appearance for decades where standard galvanizing would fail.',
    image:
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730063/3_l8x5n5.jpg',
    features: [
      'SS304 or SS316 grade options',
      'Superior corrosion resistance for coastal sites',
      'Retains cut-resistance and finish over time',
      'Preferred for ports, refineries and marine bases',
    ],
  },
  {
    name: 'PVC-Coated Razor Mesh',
    tagline: 'Bonded Polymer Finish',
    description:
      'Galvanized core with a bonded PVC outer sheath — maximum corrosion protection and a lower-profile appearance for high-visibility civil, commercial and airport perimeters.',
    image:
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1790730062/4_fqxorb.png',
    features: [
      'PVC sheath over galvanized core for dual protection',
      'Available in green, black and grey finishes',
      'Softer visual profile for civic and airport sites',
      'Extended service life over standard GI mesh',
    ],
  },
];

const RazorMeshFencePage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const go = (dir: 1 | -1) => {
    setCurrent(i => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Razor Mesh Fencing | Standard · SS · PVC-Coated | Global Technocrats</title>
        <meta
          name="description"
          content="Razor Mesh fencing in Standard, Stainless Steel (SS304/SS316) and PVC-coated variants. Cut-resistant, high-visibility perimeter barriers for defence, industrial and critical infrastructure."
        />
        <meta name="keywords" content="razor mesh fence, razor mesh fencing, SS razor mesh, PVC coated razor mesh, cut resistant fence, high security perimeter" />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative -mt-20 min-h-[92vh] bg-white flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #423c81 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container relative z-10 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-gray-400 mb-8">
                <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to="/products/fencing" className="hover:text-gray-600 transition-colors">Fencing Solutions</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-500">Razor Mesh Fencing</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" /> Cut-Resistant Barrier
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                Razor Mesh<br />
                <span className="text-primary-900">Fencing System</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-5">Standard · SS · PVC-Coated Series</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                A cut-resistant perimeter barrier available in three material variants — Standard Galvanized, Stainless Steel and PVC-Coated — for every environment from coastal ports to airport perimeters.
              </p>

              <div className="grid grid-cols-4 gap-3 max-w-sm">
                {certBadges.map(({ label, sub }) => (
                  <div key={label} className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
                    <Award className="w-4 h-4 text-primary-900 mx-auto mb-1.5" />
                    <p className="text-gray-900 text-[11px] font-bold leading-tight">{label}</p>
                    <p className="text-primary-900 text-[10px] mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image carousel */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 aspect-[4/3] bg-gray-50 relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current}
                      src={CAROUSEL_IMAGES[current]}
                      alt={`Razor mesh view ${current + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>
                  <button onClick={() => go(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-900/40 hover:bg-gray-900/60 text-white flex items-center justify-center transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={() => go(1)} aria-label="Next image" className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-900/40 hover:bg-gray-900/60 text-white flex items-center justify-center transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-900" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">3 Variants Available</p>
                    <p className="text-sm font-bold text-gray-900">Standard · SS · PVC</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
                {CAROUSEL_IMAGES.map((src, i) => (
                  <button key={i} onClick={() => setCurrent(i)} aria-label={`View image ${i + 1}`}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${i === current ? 'ring-2 ring-primary-900 scale-105 opacity-100' : 'opacity-50 hover:opacity-80'}`}>
                    <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">What Is Razor Mesh Fencing?</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Razor Mesh —<br /> Cut-Resistant Perimeter Barrier
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Razor mesh fencing combines the through-visibility of welded security mesh with the deterrence of integrated razor blades. The result is a perimeter barrier that is both cut-resistant and highly visible — perfect for sites that need to see out while stopping intrusion attempts at the fence line.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Global Technocrats supplies razor mesh in Standard Galvanized, Stainless Steel (SS304/SS316) for corrosive environments, and PVC-Coated for civic and commercial applications — each engineered for a specific environment and threat profile.
              </p>
              <ul className="space-y-3">
                {overviewPoints.map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary-900 flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 aspect-video bg-gray-100">
              <img src={OVERVIEW_IMAGE} alt="Razor mesh fencing installation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Variant Cards ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Choose Your Variant</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Three Purpose-Built Configurations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {variants.map((v) => (
              <div key={v.name} className="bg-white rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-100 flex flex-col">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-900 mb-2">{v.tagline}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{v.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{v.description}</p>
                  <ul className="space-y-2.5 mt-auto">
                    {v.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primary-900 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Perimeter?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our security specialists will help you select the right razor mesh variant and quantity for your installation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {ctaCards.map(({ Icon, label, sub, cta, href, openModal }) => {
              const cardClass = "bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:-translate-y-1 group";
              const inner = (
                <>
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-1.5">{label}</h3>
                  <p className="text-blue-200 text-xs mb-5 leading-relaxed">{sub}</p>
                  <span className="inline-block text-xs font-bold text-white bg-primary-900/70 px-5 py-2 rounded-full group-hover:bg-primary-800 transition-colors">{cta} →</span>
                </>
              );
              return openModal
                ? <button key={label} onClick={() => setIsModalOpen(true)} className={cardClass}>{inner}</button>
                : <a key={label} href={href} className={cardClass}>{inner}</a>;
            })}
          </div>
        </div>
      </section>

      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default RazorMeshFencePage;
