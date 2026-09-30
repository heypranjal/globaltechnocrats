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
  Settings,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const OVERVIEW_IMAGE =
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726780/0.Solutions-main_photo_ey7crc.png';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726780/1._i9nefi.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726780/2_qky6aq.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726781/3_bmdq6d.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726785/4_ruc5d1.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790728327/5_rnx5um.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726783/6_qj1vim.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726784/7_tac17i.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726786/8_x5qeai.jpg',
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
  'Two purpose-built configurations — Swing and Cantilever — for every site geometry',
  'Heavy-duty box-section frames with hot-dip galvanized finish for corrosion resistance',
  'CE-marked automation with IP 55 rated motors, safety edges and photoelectric sensors',
  'Integrates with access-control readers, RFID, ANPR cameras and intercoms',
  'Manual override with mechanical release for uninterrupted operation during power loss',
  'Custom widths, panel infills and finishes to match architectural and security requirements',
];

const variants = [
  {
    name: 'Swing Gates',
    tagline: 'Single or Double Leaf',
    description:
      'Traditional hinged swing gates offering the widest choice of styles and finishes. Ideal for driveways, industrial gatehouses and residential entrances where clearance in front of and behind the gate is available.',
    image:
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726780/2_qky6aq.png',
    features: [
      'Single or twin-leaf configurations up to 6 m clear opening',
      'Underground or arm-mounted electromechanical operators',
      'Solar-ready 24V DC drive options for remote sites',
      'Ornamental, palisade, mesh or solid panel infills',
    ],
  },
  {
    name: 'Cantilever Gates',
    tagline: 'Track-Free Sliding',
    description:
      'Track-free sliding gates that cantilever across the opening on a counterbalanced beam. The perfect solution where a ground track is impractical — uneven terrain, snow, drainage channels or heavy vehicular traffic.',
    image:
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1790726781/3_bmdq6d.jpg',
    features: [
      'No ground track — smooth operation over debris, snow or uneven surfaces',
      'Clear openings up to 12 m for wide industrial and logistics access',
      'Precision-machined roller assemblies with sealed bearings',
      'Optional crash-rated variants for high-threat perimeters',
    ],
  },
];

const specs: Array<{ label: string; value: string }> = [
  { label: 'Opening Width', value: 'Swing: up to 6 m per leaf · Cantilever: up to 12 m' },
  { label: 'Frame', value: 'MS box section, IS 4923 grade, hot-dip galvanized' },
  { label: 'Panel Infill', value: 'Mesh, palisade, aluminium slat, or solid sheet' },
  { label: 'Finish', value: 'HDG + 80–120 µm polyester powder coat' },
  { label: 'Operators', value: 'CE-marked, IP 55, 230V AC or 24V DC (solar option)' },
  { label: 'Safety', value: 'Photocells, safety edges, obstacle detection, warning lamp' },
  { label: 'Control', value: 'Remote, RFID, keypad, ANPR, intercom integration' },
  { label: 'Standards', value: 'ISO 9001, IS 4759, EN 12453, EN 12604' },
];

const SwingCantileverGatesPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const go = (dir: 1 | -1) => {
    setCurrent((i) => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Swing &amp; Cantilever Gates | Global Technocrats</title>
        <meta
          name="description"
          content="Swing &amp; Cantilever Gates for secure vehicular access — CE-marked automation, hot-dip galvanized frames, and site-tailored configurations for industrial, commercial and high-security perimeters."
        />
        <meta name="keywords" content="swing gates, cantilever gates, sliding gates, automated gates, industrial gates, perimeter access control" />
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
                <Link to="/products/gates" className="hover:text-gray-600 transition-colors">Gates &amp; Barriers</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-500">Swing &amp; Cantilever Gates</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Settings className="w-3.5 h-3.5" /> Automated Access Control
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                Swing &amp;<br />
                <span className="text-primary-900">Cantilever Gates</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-5">Precision-Engineered Vehicular Access</p>
              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg">
                Robust, automated gate systems for industrial estates, defence installations, data centres and premium commercial sites. Choose the configuration that matches your site geometry — no compromise on security or reliability.
              </p>

              {/* Variant icon strip */}
              <div className="flex gap-5 mb-8">
                {variants.map((v) => (
                  <div key={v.name} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-md">
                      <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-gray-600 text-[11px] font-medium text-center leading-tight max-w-[72px]">{v.name}</p>
                  </div>
                ))}
              </div>

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
                      alt={`Gate view ${current + 1}`}
                      className="absolute inset-0 w-full h-full object-contain"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>

                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-900/40 hover:bg-gray-900/60 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gray-900/40 hover:bg-gray-900/60 text-white flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-900" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">CE Marked Automation</p>
                    <p className="text-sm font-bold text-gray-900">Site-Tuned Reliability</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
                {CAROUSEL_IMAGES.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                      i === current ? 'ring-2 ring-primary-900 scale-105 opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
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
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Access With Confidence</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Swing &amp; Cantilever Gates —<br /> One System, Two Configurations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Every site is different. Swing gates are the most versatile choice where clearance is available; cantilever gates are the answer where a ground track is impossible or undesirable. Global Technocrats manufactures both to a single engineering standard, so specifiers can select the configuration that fits the site — not the other way around.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every gate ships with CE-marked automation, safety devices to EN 12453, and a manual override for uninterrupted operation.
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
              <img src={OVERVIEW_IMAGE} alt="Automated gate installation view" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Variants ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Choose Your Configuration</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Two Purpose-Built Variants</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

      {/* ── Specs ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Engineering Specifications</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Built to a Single Standard</h2>
            </div>

            <div className="rounded-2xl overflow-hidden ring-1 ring-gray-200">
              {specs.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-3 px-6 py-4 text-sm ${
                    i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="font-semibold text-gray-900">{label}</div>
                  <div className="sm:col-span-2 text-gray-700">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Entry?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our access-control specialists will help you select the right configuration and design a complete automated gate solution for your site.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {ctaCards.map(({ Icon, label, sub, cta, href, openModal }) => {
              const cardClass =
                'bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:-translate-y-1 group';
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

export default SwingCantileverGatesPage;
