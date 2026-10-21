import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Shield,
  FileText,
  Phone,
  Target,
  Zap,
  Flame,
  CheckCircle,
  Anchor,
  ServerCog,
  Radio,
  ImageIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792576122/Screenshot_2026-10-21_at_3.18.27_PM_jc4xro.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792576024/Screenshot_2026-10-21_at_3.14.07_PM_uuxlnd.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792576018/Screenshot_2026-10-21_at_3.13.48_PM_uoyzii.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792576058/zant_edubii.png',
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our critical-infra consultants', cta: 'Call Now', href: 'tel:+919810282636', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specifications and configuration guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your deployment scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const impactStats = [
  { Icon: Zap, title: 'Material Strength', value: '700 MPa', text: 'High-tensile wires engineered for extreme load tolerance.' },
  { Icon: Target, title: 'Impact Resistance', value: '80 kg @ 250 km/h', text: 'Arrests drones of up to 80 kg travelling at 250 km/h.' },
  { Icon: Flame, title: 'Payload Mitigation', value: '~5 kg', text: 'Contains explosive payloads of approximately 5 kg.' },
];

const keyFeatures = [
  'Heavy-duty steel structure with corrosion-resistant coating',
  'High-impact anti-drone cage/fence built on 700 MPa tensile wires',
  'Designed and tested for explosive-payload resistance',
  'Interlocked twisted-wire mesh combined with steel wire rope for superior load distribution',
  'Fully compliant with IS structural and coating standards',
  'Suited to outdoor industrial, defence and coastal environments',
];

const applications = [
  {
    Icon: Flame,
    title: 'Oil & Gas / Refineries',
    text: 'Refineries, tank farms, petrochemical complexes and bunded fuel depots.',
  },
  {
    Icon: Shield,
    title: 'Defence & Critical Infra',
    text: 'Military bases, airports, power generation and desalination plants.',
  },
  {
    Icon: Anchor,
    title: 'Ports & Logistics',
    text: 'Seaports, LNG terminals, bonded yards and fuel transfer corridors.',
  },
  {
    Icon: ServerCog,
    title: 'Data Centres & Utilities',
    text: 'Data centres, grid substations, GB telecom towers and control rooms.',
  },
];

const AntiDroneCagePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const go = (dir: 1 | -1) => {
    setCurrent((i) => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Anti Drone Protection Cage | Woven Hexagonal Wire Mesh | Global Technocrats</title>
        <meta
          name="description"
          content="Anti Drone Protection Cage — woven, double-twisted hexagonal wire mesh for critical infrastructure. 700 MPa tensile wires that arrest drones up to 80 kg at 250 km/h and contain ~5 kg explosive payloads."
        />
        <meta name="keywords" content="anti drone cage, anti drone fence, hexagonal wire mesh, fuel storage cage, counter UAS, critical infrastructure protection, defence tech" />
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
                <span className="text-gray-500">Anti Drone Cage</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" /> Counter-UAS Protection
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-4">
                Anti Drone Protection Cage
              </h1>
              <p className="text-sm font-semibold text-primary-900 uppercase tracking-widest mb-5">
                Woven · Double-Twisted · Hexagonal Wire Mesh
              </p>
              <p className="text-gray-600 text-base leading-relaxed max-w-lg mb-8">
                A high-tensile, impact-resistant perimeter and roof barrier engineered to arrest airborne intrusion
                before it reaches the asset — purpose-built for critical infrastructure, defence installations and
                high-risk industrial environments.
              </p>

              {/* Compact Applications grid */}
              <div className="max-w-lg">
                <h2 className="text-sm md:text-base font-extrabold uppercase tracking-widest text-primary-900 mb-4">
                  High-Value Application Areas
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {applications.map(({ Icon, title, text }) => (
                    <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-primary-900 flex-shrink-0" />
                        <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-wide leading-tight">{title}</h3>
                      </div>
                      <p className="text-gray-600 text-[11px] leading-snug">{text}</p>
                    </div>
                  ))}
                </div>
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
                      alt={`Anti Drone Cage view ${current + 1}`}
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
                    <p className="text-[11px] text-gray-400 font-medium">Counter-UAS Barrier</p>
                    <p className="text-sm font-bold text-gray-900">Hexagonal Wire Mesh</p>
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

      {/* ── Impact Stats ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Impact &amp; Payload Resistance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Tested to Stop What Flies</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {impactStats.map(({ Icon, title, value, text }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-8 ring-1 ring-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-primary-900" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{title}</p>
                <p className="text-2xl font-bold text-primary-900 mb-3">{value}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Overview ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">System Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Integrated Fuel Storage &amp; Anti-Drone Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Engineered for critical infrastructure, defence installations, hazardous storage zones, refineries and
                high-risk industrial environments. The system integrates a heavy-duty <strong>Fuel Storage Cage</strong>
                — a structural enclosure protecting tanks and bunded areas — with an <strong>Anti-Drone Cage / Fence</strong>,
                a high-tensile, impact-resistant perimeter and roof barrier that arrests airborne intrusion before it
                reaches the asset.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 aspect-video bg-gray-50">
              <img
                src="https://res.cloudinary.com/dy93kgo03/image/upload/v1792578001/WhatsApp_Image_2026-10-21_at_15.47.17_htod4z.jpg"
                alt="Integrated Fuel Storage and Anti-Drone Protection system"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Features ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Key Features</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Mesh With Horizontal Steel Wire Rope</h2>
            </div>

            <ul className="grid md:grid-cols-2 gap-4">
              {keyFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-900 flex-shrink-0 mt-1" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Protect Critical Assets From the Air</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our specialists can share detailed specifications and discuss deployment options tailored to your site.
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

export default AntiDroneCagePage;
