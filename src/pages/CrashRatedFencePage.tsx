import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, FileText, Phone, Award, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CrashVariantShowcase } from '../components/products/CrashVariantShowcase';
import { CrashFenceDetails } from '../components/products/CrashFenceDetails';

const OVERVIEW_IMAGE =
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541223/strong_hold_k4_fence_nfpc22.png';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541129/gauntelt-_10_dhcwub.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541148/gauntelt-_8_nfrtlu.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541220/1.5mtr_crash_rated_fence_-strong_hold_avfxbi.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541223/strong_hold_k4_fence_nfpc22.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541241/TRIDENT_FENCE.png_tlhtje.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541241/TRIDENT_FENCE_sw0tg6.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1780551269/crash_rated_fence_t8ikes.jpg',
];

const certBadges = [
  { label: 'ASTM F2656', sub: 'Certified' },
  { label: 'PAS 68', sub: 'Compliant' },
  { label: 'K4 Rated', sub: 'Impact Class' },
  { label: 'Gov. Lab', sub: 'Verified' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our security consultants', cta: 'Call Now', href: 'tel:+911146067000' },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specs and variant selection guide', cta: 'Download PDF', href: '/contact' },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your project scope', cta: 'Get Quote', href: '/contact' },
];

const overviewPoints = [
  'Independently tested and certified to K4 impact class under ASTM F2656 and PAS 68',
  'Arrests and stops a 7,500 kg vehicle travelling at 48 km/h within the certified penetration distance',
  'Engineered palisade construction transfers crash energy directly into reinforced concrete foundations',
  'Three performance-matched variants — Gauntlet, Strong Hold, and Trident — for distinct threat environments',
  'Integrates with access control, CCTV, and perimeter intrusion detection systems',
  'Hot-dip galvanized finish with powder coat options for long-term corrosion resistance',
];

const CrashRatedFencePage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(i => (i + 1) % CAROUSEL_IMAGES.length);
    }, 2000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoPlay]);

  const go = (dir: 1 | -1) => {
    setCurrent(i => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
    startAutoPlay();
  };

  return (
    <>
      <Helmet>
        <title>K4 Crash Rated Fence | Kronos Palisade System | Global Technocrats</title>
        <meta
          name="description"
          content="K4 rated crash-rated palisade fence — ASTM F2656 &amp; PAS 68 certified. Available in Gauntlet, Strong Hold, and Trident variants for critical infrastructure and defence protection."
        />
        <meta name="keywords" content="crash rated fence, K4 fence, vehicle crash fence, palisade fence, ASTM F2656, PAS 68, perimeter security" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative -mt-20 min-h-[92vh] bg-gradient-to-br from-slate-900 via-slate-800 to-primary-950 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />

        <div className="container relative z-10 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-slate-500 mb-8">
                <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to="/products/fencing" className="hover:text-slate-300 transition-colors">Fencing Solutions</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-slate-400">Crash Rated Fence</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" /> K4 Impact Class
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-3">
                Crash Rated<br />
                <span className="text-primary-300">Fence System</span>
              </h1>
              <p className="text-lg font-medium text-blue-200 mb-5">Kronos Palisade Series</p>
              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
                Government lab-verified vehicle crash protection for data centres, defence installations, and critical national infrastructure. Available in three performance-matched variants.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="btn btn-primary py-3 px-7 text-sm font-bold rounded-xl">
                  Enquire Now
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-white/25 text-white text-sm font-semibold px-7 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  <FileText className="w-4 h-4" /> Download Specs
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-3 max-w-sm">
                {certBadges.map(({ label, sub }) => (
                  <div key={label} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-3 text-center">
                    <Award className="w-4 h-4 text-primary-300 mx-auto mb-1.5" />
                    <p className="text-white text-[11px] font-bold leading-tight">{label}</p>
                    <p className="text-blue-300 text-[10px] mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — carousel */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 aspect-[4/3] bg-slate-800 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={CAROUSEL_IMAGES[current]}
                    alt={`Crash rated fence variant ${current + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                {/* Arrow buttons */}
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {CAROUSEL_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setCurrent(i); startAutoPlay(); }}
                      aria-label={`Go to image ${i + 1}`}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating cert chip */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary-900" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Independently Tested</p>
                  <p className="text-sm font-bold text-gray-900">K4 Vehicle Impact</p>
                </div>
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
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">What Is a Crash Rated Fence?</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Crash Rated Fence —<br /> Certified Vehicle Intrusion Barrier
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                A crash rated fence is a purpose-engineered perimeter barrier independently certified to stop a vehicle of defined mass travelling at a defined speed within a maximum allowed penetration distance. Unlike standard security fencing, every structural element — paling, rail, post, and foundation — is designed and tested as a complete system to absorb and arrest vehicle kinetic energy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Global Technocrats' Crash Rated Fence achieves K4 impact class certification under ASTM F2656 and PAS 68, verified by government-accredited laboratories.
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
              <img src={OVERVIEW_IMAGE} alt="Crash Rated Fence installation view" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Variant Showcase ─────────────────────────────────────────────────── */}
      <CrashVariantShowcase />

      {/* ── Specs + Features + Applications + Comparison ─────────────────────── */}
      <CrashFenceDetails />

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Perimeter?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our team of defence security specialists will help you select the right Kronos variant and design a complete perimeter protection solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {ctaCards.map(({ Icon, label, sub, cta, href }) => (
              <a
                key={label}
                href={href}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/25 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold mb-1.5">{label}</h3>
                <p className="text-blue-200 text-xs mb-5 leading-relaxed">{sub}</p>
                <span className="inline-block text-xs font-bold text-white bg-primary-900/70 px-5 py-2 rounded-full group-hover:bg-primary-800 transition-colors">
                  {cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CrashRatedFencePage;
