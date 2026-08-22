import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, FileText, Phone, Award, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConcertinaVariantCards } from '../components/products/ConcertinaVariantCards';
import BrochureModal from '../components/products/BrochureModal';

const OVERVIEW_IMAGE =
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777398/ConcertinaCoilFence1_truxp8.png';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777398/ConcertinaCoilFence1_truxp8.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777433/ConcertinaCoilFence2_rqdlc7.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775911/SSConcertinaCoil1_uwgha6.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776018/SsImage2_lgojr8.png',
];

const certBadges = [
  { label: 'SS304/316', sub: 'Grade Option' },
  { label: 'IS 4759', sub: 'Certified' },
  { label: 'Hot-dip', sub: 'Galvanized' },
  { label: 'Multi-Config', sub: 'Available' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our security consultants', cta: 'Call Now', href: 'tel:+911146067000', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specs and variant selection guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your project scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const overviewPoints = [
  'Crossed-spiral design maintains structural integrity even when individual strands are cut',
  'Available in Standard GI, Stainless Steel (SS304/SS316), and heavy-duty razor blade configurations',
  'Coil diameters from 450mm to 980mm — scalable to threat level and installation type',
  'Hot-dip galvanized finish per IS 4759 for long-term weather and corrosion resistance',
  'Rapid deployment with clip fastener system across varied terrain conditions',
  'Compatible with existing fence-top, ground-level, and standalone barrier applications',
];

const ConcertinaCoilPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const go = (dir: 1 | -1) => {
    setCurrent(i => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Concertina Coil Fencing | Standard · SS · GI | Global Technocrats</title>
        <meta
          name="description"
          content="Concertina coil fencing in Standard, Stainless Steel (SS304/SS316), and Galvanized Iron variants. High-security perimeter barriers for defence, border, industrial, and residential applications."
        />
        <meta name="keywords" content="concertina coil fence, SS concertina coil, GI concertina coil, razor coil fence, perimeter security, high security barrier" />
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
                <span className="text-gray-500">Concertina Coil</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" /> High-Security Barrier
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                Concertina Coil<br />
                <span className="text-primary-900">Fencing System</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-5">Standard · SS Concertina · GI Concertina Series</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                A formidable perimeter barrier available in three material variants — Standard Galvanized, Stainless Steel, and Galvanized Iron — for every security requirement from border defence to residential protection.
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
                      alt={`Concertina coil view ${current + 1}`}
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
                    <p className="text-sm font-bold text-gray-900">Standard · SS · GI</p>
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
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">What Is Concertina Coil Fencing?</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Concertina Coil —<br /> Rapid-Deployment Security Barrier
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Concertina coil fences provide an unmatched level of protection and act as a strong deterrent to potential intruders. The razor-sharp crossed-spiral design is engineered to entangle and delay any intrusion attempt while remaining highly visible as a psychological deterrent.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Global Technocrats supplies concertina coil in Standard (high-tensile galvanized steel), SS Concertina (stainless steel for marine and corrosive environments), and GI Concertina (galvanized iron for cost-effective wide-area deployment).
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
              <img src={OVERVIEW_IMAGE} alt="Concertina coil fencing installation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Variant Cards ────────────────────────────────────────────────────── */}
      <ConcertinaVariantCards />

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Perimeter?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our security specialists will help you select the right concertina coil variant and quantity for your installation.
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

export default ConcertinaCoilPage;
