import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, FileText, Phone, Award, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const OVERVIEW_IMAGE = 'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237328/3_bfy9x4.png';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237328/1_fcdkqr.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237332/2_e09s74.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237328/3_bfy9x4.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237328/4_ea8paj.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237331/5_ri4dp6.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237331/6_v17iyy.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1788237331/7_sbgacp.png',
];

const certBadges = [
  { label: 'Wrought Iron', sub: 'Available' },
  { label: 'Vinyl', sub: 'Available' },
  { label: 'Wooden', sub: 'Available' },
  { label: 'Custom', sub: 'Designs' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our security consultants', cta: 'Call Now', href: 'tel:+911146067000', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specs and design catalogue', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your project scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const overviewPoints = [
  'Available in wrought iron, vinyl, and wooden varieties',
  'Customisable designs to complement any architectural style',
  'Combines security and visual appeal for residential and commercial properties',
  'Weather-resistant finishes for long-term durability',
  'Professional installation with minimal maintenance requirements',
  'Wide range of styles from classic to contemporary',
];

const DecorativeFencingPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const go = (dir: 1 | -1) => {
    if (CAROUSEL_IMAGES.length === 0) return;
    setCurrent(i => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Decorative Fencing | Elegant Security Solutions | Global Technocrats</title>
        <meta
          name="description"
          content="Decorative fencing solutions combining elegance and security. Available in wrought iron, vinyl, and wood with customizable designs for residential and commercial properties."
        />
        <meta name="keywords" content="decorative fencing, wrought iron fence, vinyl fence, wooden fence, ornamental fencing, elegant security fence" />
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
                <span className="text-gray-500">Decorative Fencing</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" /> Elegant Security
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                Decorative<br />
                <span className="text-primary-900">Fencing System</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-5">Wrought Iron · Vinyl · Wood Series</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                Aesthetically pleasing fencing solutions that add elegance to any landscape while providing reliable perimeter security. Available in a wide range of styles and materials to suit every architectural requirement.
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
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 aspect-[4/3] bg-gray-100 relative flex items-center justify-center">
                  {CAROUSEL_IMAGES.length > 0 ? (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={current}
                          src={CAROUSEL_IMAGES[current]}
                          alt={`Decorative fencing view ${current + 1}`}
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
                    </>
                  ) : (
                    <p className="text-gray-300 text-sm font-medium">Images coming soon</p>
                  )}
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-900" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">3 Material Variants</p>
                    <p className="text-sm font-bold text-gray-900">Iron · Vinyl · Wood</p>
                  </div>
                </div>
              </div>

              {CAROUSEL_IMAGES.length > 0 && (
                <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
                  {CAROUSEL_IMAGES.map((src, i) => (
                    <button key={i} onClick={() => setCurrent(i)} aria-label={`View image ${i + 1}`}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${i === current ? 'ring-2 ring-primary-900 scale-105 opacity-100' : 'opacity-50 hover:opacity-80'}`}>
                      <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">What Is Decorative Fencing?</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Decorative Fencing —<br /> Elegant Perimeter Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Decorative fencing is a versatile and aesthetically pleasing option for homeowners and businesses looking to add a touch of elegance to their landscapes. Available in wrought iron, vinyl, and wooden varieties, these fences provide both security and visual appeal while complementing any architectural style.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Global Technocrats' decorative fencing solutions are engineered to combine beauty with durability, offering customisable designs that meet both aesthetic and security requirements across residential and commercial properties.
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
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 aspect-video bg-gray-100 flex items-center justify-center">
              {OVERVIEW_IMAGE ? (
                <img src={OVERVIEW_IMAGE} alt="Decorative fencing installation" className="w-full h-full object-cover" />
              ) : (
                <p className="text-gray-300 text-sm font-medium">Image coming soon</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Perimeter?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our team will help you choose the right decorative fencing style and material to complement your property's architecture.
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

export default DecorativeFencingPage;
