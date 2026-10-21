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
  Zap,
  Mountain,
  Battery,
  Gauge,
  Volume2,
  Leaf,
  Settings,
  Compass,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792566449/slider-1_eidvh9.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792566452/slider-2_iya14v.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792566462/slider-3_htl6nx.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792566460/slider-4_sqxv5w.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792408994/Screenshot_2026-10-19_at_4.51.58_PM_jjlgtb.png',
];

const OVERVIEW_IMAGE = CAROUSEL_IMAGES[0];

const certBadges = [
  { label: 'Military', sub: 'Grade' },
  { label: '2WD · 4WD', sub: 'Configs' },
  { label: '60V Li-ion', sub: 'Battery' },
  { label: 'All-Terrain', sub: 'Mobility' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our mobility systems consultants', cta: 'Call Now', href: 'tel:+919810282636', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specifications and configuration guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your deployment scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const overviewPoints = [
  'Military-grade all-terrain electric mobility platform with electric hub motors',
  'Reliable, silent, stealth and powerful mobility across mountains, jungles and industrial zones',
  '2WD and 4WD drivetrain options to match terrain and payload requirements',
  'High-performance 60V lithium battery system for extended range and fast charging',
  '4-wheel disc brake safety with LED display and advanced ride controls',
  'Eco-friendly electric drivetrain — zero emissions and low maintenance',
];

const keyFeatures = [
  { Icon: Shield, title: 'Military-Grade Construction', text: 'Rugged, mission-ready build engineered for the harshest operational environments.' },
  { Icon: Settings, title: '2WD & 4WD Configurations', text: 'Two drivetrain options to match terrain difficulty and payload requirements.' },
  { Icon: Battery, title: 'Lithium Battery System', text: 'High-performance 60V lithium pack for extended range and rapid field recharging.' },
  { Icon: Volume2, title: 'Silent Electric Drive', text: 'Near-silent operation ideal for stealth patrols and sensitive deployments.' },
  { Icon: Mountain, title: 'All-Terrain Mobility', text: 'Tackles sand, rocks, mud, snow and rough landscapes without compromise.' },
  { Icon: Gauge, title: '4-Wheel Disc Brake Safety', text: 'Precision disc braking on all four wheels delivers confident control at speed.' },
  { Icon: Compass, title: 'LED Display & Smart Controls', text: 'Intuitive instrumentation with LED display and advanced ride-control electronics.' },
  { Icon: Leaf, title: 'Eco-Friendly & Low Maintenance', text: 'Zero-emission electric drivetrain with minimal moving parts for a long service life.' },
];

const applications = [
  'Police and paramilitary mobility',
  'Military patrol and tactical operations',
  'Border security and surveillance',
  'Industrial and plant mobility',
  'Security patrol in large facilities',
  'Off-road inspection and maintenance',
  'Urban and private mobility',
];

const baseSpecs: Array<{ label: string; value: string }> = [
  { label: 'Weight', value: '70 kg' },
  { label: 'Height', value: '127 cm' },
  { label: 'Length', value: '161 cm' },
  { label: 'Width', value: '66 cm' },
  { label: 'Max Speed', value: '45 km/h' },
  { label: 'Battery', value: '60V, 50 Ah' },
  { label: 'Load Capacity', value: '300 kg' },
  { label: 'Range', value: '60 km per charge (expandable)' },
  { label: 'Max Slope Climbing', value: '25° (degrees)' },
];

const technicalTable: Array<{ spec: string; twd: string; fwd: string }> = [
  { spec: 'Motor', twd: '2 × 1200W Brushless', fwd: '4 × 1500W Brushless' },
  { spec: 'Battery', twd: '60V 50Ah Lithium', fwd: '60V 60Ah Lithium' },
  { spec: 'Top Speed', twd: '50 km/h', fwd: '60 km/h' },
  { spec: 'Range', twd: '50–60 km', fwd: '50–60 km' },
  { spec: 'Charging Time', twd: '4–6 hours', fwd: '4–6 hours' },
  { spec: 'Brakes', twd: '4 Wheel Disc Brake', fwd: '4 Wheel Disc Brake' },
  { spec: 'Load Capacity', twd: '90 kg', fwd: '90 kg' },
];

const PantherPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const go = (dir: 1 | -1) => {
    setCurrent((i) => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>ATV Panther | All Terrain Warrior Mobility System | Global Technocrats</title>
        <meta
          name="description"
          content="ATV Panther — a military-grade all-terrain electric mobility platform with 2WD and 4WD configurations, lithium battery system and silent electric drive for defence, security, industrial and urban applications."
        />
        <meta name="keywords" content="panther, all terrain mobility, electric mobility platform, military mobility, 4WD electric vehicle, border security mobility, defence tech" />
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
                <span className="text-gray-500">ATV Panther</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5" /> All-Terrain Mobility Platform
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                ATV<br />
                <span className="text-primary-900">Panther</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-3">All Terrain Warrior Mobility System</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
                Military · Industrial · Security · Urban Mobility
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                Military-grade all-terrain electric mobility platform engineered for reliable, silent, stealth and
                powerful mobility across mountains, jungles and industrial environments.
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
                      alt={`ATV Panther view ${current + 1}`}
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
                    <p className="text-sm font-bold text-gray-900">All-Terrain Mobility</p>
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
                ATV Panther —<br /> Reliable, Silent &amp; Stealth Mobility
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                ATV Panther is a military-grade all-terrain electric mobility platform developed by Global Technocrats Ltd
                with electric hub motors. Designed for reliable, silent, stealth and powerful mobility across extreme
                terrains including mountains, jungles and industrial environments.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Engineered for defence forces, law enforcement and professional applications that demand uncompromising
                durability and performance in the field.
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
              <img src={OVERVIEW_IMAGE} alt="ATV Panther all-terrain mobility platform" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Key Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Engineered for the Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyFeatures.map(({ Icon, title, text }) => (
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

      {/* ── Applications + Specs ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Applications */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Applications</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Where ATV Panther Delivers</h2>
              <ul className="space-y-3">
                {applications.map((item) => (
                  <li key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary-900 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform Specs */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Platform Specifications</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">At a Glance</h2>
              <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200">
                {baseSpecs.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-3 px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <div className="font-semibold text-gray-900">{label}</div>
                    <div className="text-gray-700">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Specification Table ────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Technical Specifications</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">2WD vs 4WD Configuration</h2>
            </div>

            <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-200 shadow-sm bg-white">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 text-white">
                    <th className="text-left px-6 py-4 font-bold">Specification</th>
                    <th className="text-left px-6 py-4 font-bold">2WD Model</th>
                    <th className="text-left px-6 py-4 font-bold">4WD Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {technicalTable.map(({ spec, twd, fwd }, i) => (
                    <tr key={spec} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{spec}</td>
                      <td className="px-6 py-4 text-gray-700">{twd}</td>
                      <td className="px-6 py-4 text-gray-700">{fwd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Deploy ATV Panther?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our mobility systems specialists will help you select the right configuration and support deployment
              planning for your force.
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

export default PantherPage;
