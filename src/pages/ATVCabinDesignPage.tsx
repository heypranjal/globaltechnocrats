import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Shield,
  FileText,
  Phone,
  Award,
  CheckCircle,
  Mountain,
  Radar,
  Plane,
  Zap,
  Monitor,
  Crosshair,
  Camera,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792612006/11211_a4fff9.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792408809/Screenshot_2026-10-19_at_4.48.58_PM_sox6bn.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792408823/Screenshot_2026-10-19_at_4.49.32_PM_mek4s5.png',
];

const OVERVIEW_IMAGE = CAROUSEL_IMAGES[0];

const certBadges = [
  { label: 'All-Terrain', sub: 'Mobility' },
  { label: 'Day · Night', sub: 'Cameras' },
  { label: 'Radar', sub: 'Integrated' },
  { label: 'Counter-UAS', sub: 'Equipped' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our defence systems consultants', cta: 'Call Now', href: 'tel:+919810282636', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specifications and configuration guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your deployment scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const overviewPoints = [
  'All-terrain mobility across mountains, jungles, deserts and hostile environments',
  'Day camera (10 km range) and night camera (5 km range) on a telescopic mast',
  'Integrated radar for real-time situational awareness and perimeter monitoring',
  'Surveillance drone with onboard launch pad for aerial reconnaissance',
  'Compact DG set delivers reliable onboard power for extended deployments',
  'Dual-screen control room with full equipment control from inside the vehicle',
  'Anti-drone gun for counter-UAS defence within the operational perimeter',
];

const capabilities = [
  { Icon: Mountain, title: 'All-Terrain Mobility', text: 'Rugged ATV platform capable of operating across mountains, jungles, deserts and other hostile environments.' },
  { Icon: Camera, title: 'Day & Night Cameras · Telescopic Mast', text: 'Day camera (10 km range) and night camera (5 km range) mounted on a telescopic mast for elevated reconnaissance.' },
  { Icon: Radar, title: 'Integrated Radar', text: 'Onboard radar system for real-time situational awareness and perimeter monitoring.' },
  { Icon: Plane, title: 'Surveillance Drone with Launch Pad', text: 'Dedicated surveillance drone with onboard launch pad for rapid aerial reconnaissance and overwatch.' },
  { Icon: Zap, title: 'Compact DG Set', text: 'Onboard compact diesel generator keeps mission electronics and command equipment running during extended deployments.' },
  { Icon: Monitor, title: 'Dual-Screen Control Room', text: 'Integrated command cabin featuring two operator screens with full control of all onboard equipment from inside the vehicle.' },
  { Icon: Crosshair, title: 'Anti-Drone Gun', text: 'Equipped with a counter-drone system to neutralise aerial threats within the operational perimeter.' },
];

const payloadSummary = [
  'Day camera (10 km) and night camera (5 km) on telescopic mast',
  'Integrated radar for real-time situational awareness',
  'Surveillance drone with onboard launch pad',
  'Compact DG set for onboard power generation',
  'Dual-screen control room with full equipment control',
  'Anti-drone gun for counter-UAS defence',
  'All-terrain mobility across hostile environments',
];

const ATVCabinDesignPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const go = (dir: 1 | -1) => {
    setCurrent((i) => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>ATV Cabin Design | Mobile Command &amp; Surveillance Platform | Global Technocrats</title>
        <meta
          name="description"
          content="ATV Cabin Design — an all-terrain mobile command and surveillance platform with day/night cameras on a telescopic mast, radar, surveillance drone, dual-screen control room and anti-drone gun."
        />
        <meta name="keywords" content="ATV cabin design, mobile command vehicle, surveillance platform, anti drone gun, telescopic mast camera, defence tech, border surveillance" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
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
                <Link to="/products/defence" className="hover:text-gray-600 transition-colors">Defence Tech</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-500">ATV Cabin Design</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Monitor className="w-3.5 h-3.5" /> Mobile Command &amp; Surveillance Platform
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                ATV Cabin<br />
                <span className="text-primary-900">Design</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-3">All-Terrain Command &amp; Surveillance Cabin</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
                Mobility · Reconnaissance · Command · Counter-UAS
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                A purpose-engineered command and surveillance cabin integrated onto an all-terrain vehicle — bringing
                mast-mounted optics, radar, a surveillance drone, onboard power, a dual-screen control room and
                counter-drone capability into a single mission-ready platform.
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
                      alt={`ATV Cabin Design view ${current + 1}`}
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

                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-900" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Defence Tech Product</p>
                    <p className="text-sm font-bold text-gray-900">Mobile Command Cabin</p>
                  </div>
                </div>
              </div>

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

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Product Overview</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                ATV Cabin Design —<br /> A Complete Mobile Command Suite
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The ATV Cabin Design integrates a full mission payload onto a rugged all-terrain vehicle — enabling
                reconnaissance, command, control and counter-UAS operations from a single mobile platform. Deploys
                rapidly across any terrain and operates fully self-contained.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every subsystem — optics, radar, drone, DG set, control room and anti-drone gun — is operated from the
                dual-screen control cabin, keeping crew protected while maintaining full situational control.
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
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 aspect-video bg-gray-50 p-6">
              <img src={OVERVIEW_IMAGE} alt="ATV Cabin Design mobile command platform" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Platform Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Everything the Mission Needs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {capabilities.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Payload Summary ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Mission Payload</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">At a Glance</h2>
            </div>

            <ul className="grid md:grid-cols-2 gap-3">
              {payloadSummary.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-900 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy the ATV Cabin?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our defence systems specialists will help you specify the right payload mix and support deployment planning
              for your force.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {ctaCards.map(({ Icon, label, sub, cta, href, openModal }) => {
              const cardClass = 'bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:-translate-y-1 group';
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
                <button key={label} onClick={() => setIsModalOpen(true)} className={cardClass}>{inner}</button>
              ) : (
                <a key={label} href={href} className={cardClass}>{inner}</a>
              );
            })}
          </div>
        </div>
      </section>

      <BrochureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ATVCabinDesignPage;
