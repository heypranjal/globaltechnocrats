import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, FileText, Phone, Award, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChainLinkFenceDetails } from '../components/products/ChainLinkFenceDetails';
import BrochureModal from '../components/products/BrochureModal';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508206/1.chain_link_o6xyib.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508206/2.chain_-link_gdiezy.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508367/3_nxg2qp.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508201/4_k7cui9.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508201/5_pxmw63.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508202/6._chain_link_zlw6c0.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508202/8_s2syv1.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508201/9.chain_link_fence_u6zwka.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508202/10.chain_link_-gi_keaetq.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508203/11._chain_link_sirws2.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508203/12_asanah.png',
];

const OVERVIEW_IMAGE = 'https://res.cloudinary.com/dy93kgo03/image/upload/v1781508213/image_for_What_Is_a_Chain_Link_Fence13_obrktd.png';

const certBadges = [
  { label: 'IS 278',       sub: 'Compliant' },
  { label: 'BS EN 10223', sub: 'Certified' },
  { label: 'Hot-Dip Galv.', sub: 'Finish' },
  { label: 'PVC Coated',  sub: 'Option' },
];

const ctaCards = [
  { Icon: Phone,    label: 'Talk to an Expert',  sub: 'Speak with our security consultants',   cta: 'Call Now',      href: 'tel:+911146067000', openModal: false },
  { Icon: FileText, label: 'Download Brochure',  sub: 'Full specs and configuration guide',    cta: 'Download PDF',  href: undefined,           openModal: true  },
  { Icon: Shield,   label: 'Request a Quote',    sub: 'Custom pricing for your project scope', cta: 'Get Quote',     href: '/contact',          openModal: false },
];

const overviewPoints = [
  'Galvanized steel wire construction for all-weather corrosion resistance',
  'Available in 2.5 mm – 4 mm wire gauge across standard and heavy-duty grades',
  '50 mm × 50 mm mesh aperture — compliant with IS 278 and BS EN 10223',
  'Height options from 1.2 m to 3.6 m with customisable panel widths',
  'PVC coating available in RAL colour range for aesthetic installations',
  'Suitable for perimeter, industrial, agricultural, and residential applications',
];

const ChainLinkFencePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const go = (dir: 1 | -1) => {
    setCurrent(i => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Chain Link Fence | Galvanized & PVC Coated | Global Technocrats</title>
        <meta
          name="description"
          content="Heavy-duty chain link fencing — IS 278 &amp; BS EN 10223 compliant. Available in hot-dip galvanized and PVC coated finishes for industrial, residential, and government applications."
        />
        <meta name="keywords" content="chain link fence, galvanized chain link, PVC coated fence, perimeter fencing, security fencing India" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
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
                <span className="text-gray-500">Chain Link Fence</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" /> Security Fencing
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                Chain Link<br />
                <span className="text-primary-900">Fence System</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-5">Galvanized &amp; PVC Coated Range</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                Durable, cost-effective perimeter fencing for industrial, residential, and government sites. Available in standard and heavy-duty grades with hot-dip galvanized or PVC coated finish.
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

            {/* Right — image gallery */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 aspect-[4/3] bg-gray-50 relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current}
                      src={CAROUSEL_IMAGES[current]}
                      alt={`Chain link fence view ${current + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>

                  <button onClick={() => go(-1)} aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-900/40 hover:bg-gray-900/60 text-white flex items-center justify-center transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={() => go(1)} aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-900/40 hover:bg-gray-900/60 text-white flex items-center justify-center transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Floating cert chip */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-900" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">IS 278 Compliant</p>
                    <p className="text-sm font-bold text-gray-900">Chain Link Fencing</p>
                  </div>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
                {CAROUSEL_IMAGES.map((src, i) => (
                  <button key={i} onClick={() => setCurrent(i)} aria-label={`View image ${i + 1}`}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                      i === current ? 'ring-2 ring-primary-900 scale-105 opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}>
                    <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">What Is a Chain Link Fence?</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Chain Link Fence —<br /> Versatile Perimeter Solution
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                A chain link fence is a woven wire fencing type made from galvanized or PVC coated steel wire, forming a characteristic diamond pattern. Widely recognised for its strength, visibility, and low maintenance, it is one of the most deployed perimeter fencing systems globally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Global Technocrats' Chain Link Fence range is manufactured to IS 278 and BS EN 10223 standards, ensuring consistent wire gauge, mesh aperture, and coating quality across all grades.
              </p>
              <ul className="space-y-3">
                {overviewPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary-900 flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 aspect-video bg-gray-100">
              <img src={OVERVIEW_IMAGE} alt="Chain Link Fence installation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs + Features + Applications + Specification Table ─────────────── */}
      <ChainLinkFenceDetails />

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Perimeter?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our team will help you select the right chain link grade and design a complete perimeter fencing solution for your site.
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
                  <span className="inline-block text-xs font-bold text-white bg-primary-900/70 px-5 py-2 rounded-full group-hover:bg-primary-800 transition-colors">
                    {cta} →
                  </span>
                </>
              );
              return openModal ? (
                <button key={label} onClick={() => setIsModalOpen(true)} className={cardClass}>
                  {inner}
                </button>
              ) : (
                <a key={label} href={href} className={cardClass}>
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ChainLinkFencePage;
