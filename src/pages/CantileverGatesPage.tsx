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
  MoveHorizontal,
  Mountain,
  Lock,
  Gauge,
  Wrench,
  RadioTower,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const OVERVIEW_IMAGE =
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726780/1._i9nefi.png';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726780/1._i9nefi.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726783/6_qj1vim.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726784/7_tac17i.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726783/9_qs5nos.jpg',
];

const certBadges = [
  { label: 'ISO 9001', sub: 'Certified' },
  { label: 'IS 4759', sub: 'Compliant' },
  { label: 'CE Mark', sub: 'Automation' },
  { label: 'IP 55', sub: 'Rated Motors' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our access-control consultants', cta: 'Call Now', href: 'tel:+919810282636', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specifications and configuration guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your site conditions', cta: 'Get Quote', href: '/contact', openModal: false },
];

const overviewPoints = [
  'Track-free sliding gates — no ground rail required',
  'Clear openings up to 12 m for wide industrial and logistics access',
  'Counterbalanced beam design with precision-machined roller assemblies',
  'Operates smoothly over debris, snow, drainage channels and uneven surfaces',
  'Optional crash-rated variants for high-threat perimeter protection',
  'Manual release override for uninterrupted operation during power loss',
];

const features = [
  { Icon: MoveHorizontal, title: 'No Ground Track', text: 'Cantilevered beam removes the need for a floor rail or guide.' },
  { Icon: Mountain, title: 'Uneven Terrain Ready', text: 'Sliding motion unaffected by debris, snow or sloping surfaces.' },
  { Icon: Lock, title: 'Access Control Ready', text: 'Direct integration with RFID, keypad, ANPR and intercom systems.' },
  { Icon: Gauge, title: 'IP 55 Motors', text: 'Weather-sealed drives engineered for continuous daily cycling.' },
  { Icon: Wrench, title: 'Manual Override', text: 'Mechanical release lets you operate the gate when power is out.' },
  { Icon: RadioTower, title: 'Remote Monitoring', text: 'Optional cellular modules for status reporting and diagnostics.' },
];

const specs: Array<{ label: string; value: string }> = [
  { label: 'Opening Width', value: 'Up to 12 m clear opening — track-free cantilever beam' },
  { label: 'Frame', value: 'MS box section with reinforced bottom beam, hot-dip galvanized' },
  { label: 'Panel Infill', value: 'Mesh, palisade, aluminium slat or solid sheet' },
  { label: 'Roller System', value: 'Precision-machined roller assemblies with sealed bearings' },
  { label: 'Finish', value: 'HDG + 80–120 µm polyester powder coat' },
  { label: 'Operators', value: 'CE-marked rack-and-pinion drive, 230V AC or 24V DC' },
  { label: 'Safety', value: 'Photocells, safety edges, obstacle detection, warning lamp' },
  { label: 'Control', value: 'Remote, RFID, keypad, ANPR, intercom integration' },
  { label: 'Standards', value: 'ISO 9001, IS 4759, EN 12453, EN 12604' },
];

const CantileverGatesPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const go = (dir: 1 | -1) => {
    setCurrent((i) => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Cantilever Gates | Track-Free Sliding Gates | Global Technocrats</title>
        <meta
          name="description"
          content="Cantilever sliding gates — track-free design, clear openings up to 12 m, CE-marked automation, and crash-rated options for industrial, logistics and high-security perimeters."
        />
        <meta name="keywords" content="cantilever gates, sliding gates, track-free gates, industrial gates, logistics gates, crash rated cantilever" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative -mt-20 min-h-[92vh] bg-white flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #423c81 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container relative z-10 py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-gray-400 mb-8">
                <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to="/products/gates" className="hover:text-gray-600 transition-colors">Engineered Gate Solutions</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-500">Cantilever Gates</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <MoveHorizontal className="w-3.5 h-3.5" /> Track-Free Sliding
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                Cantilever<br />
                <span className="text-primary-900">Gates</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-5">Track-Free Sliding Access</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                Track-free sliding gates that cantilever across the opening on a counterbalanced beam. The perfect solution where a ground track is impractical — uneven terrain, snow, drainage channels or heavy vehicular traffic.
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

            {/* Right — carousel */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 aspect-[4/3] bg-gray-50 relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current}
                      src={CAROUSEL_IMAGES[current]}
                      alt={`Cantilever gate view ${current + 1}`}
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
                    <p className="text-[11px] text-gray-400 font-medium">Up to 12 m Clear</p>
                    <p className="text-sm font-bold text-gray-900">Track-Free Design</p>
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

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Access With Confidence</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Cantilever Gates —<br /> Where a Ground Track Won't Work
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Cantilever gates slide horizontally across an opening without ever touching the ground. A counterbalanced beam carries the gate on precision roller assemblies, so the installation is immune to debris, snow, drainage channels and uneven terrain.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The result is a smooth, reliable, long-service access solution for sites where traditional sliding gates would fail — logistics yards, industrial estates, heavy-vehicle entrances and high-security perimeters.
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
              <img src={OVERVIEW_IMAGE} alt="Cantilever gate installation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Why Choose Cantilever Gates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Engineered for Hard-Use Sites</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-8 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Specs ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Engineering Specifications</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Specification Sheet</h2>
            </div>

            <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200">
              {specs.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-3 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <div className="font-semibold text-gray-900">{label}</div>
                  <div className="sm:col-span-2 text-gray-700">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Entry?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our access-control specialists will help you specify the right cantilever-gate configuration for your site.
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

export default CantileverGatesPage;
