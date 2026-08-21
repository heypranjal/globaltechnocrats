import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, FileText, Phone, Award, CheckCircle, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrochureModal from '../components/products/BrochureModal';

const OVERVIEW_IMAGE =
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290633/1_mpgiff.png';

const CAROUSEL_IMAGES = [
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775127/anticlimbing1_urt06c.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775127/anticlimbing2_kmuxz3.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290633/1_mpgiff.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290633/2_r0povb.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290634/3_wdp2hd.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290635/4-a_afa8rn.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290635/5_di7yqc.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290634/6_o9lrnw.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290634/78_exeyea.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290635/Difficult_to_Climb_vggfca.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290636/i_beam_with_anti_climb_fence_qxcdco.jpg',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290639/Strong_u7krp2.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290638/Modular-1_bqfwdn.png',
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1787290638/Long_Life_t2reuy.png',
];

const certBadges = [
  { label: 'ASTM M5', sub: 'Compliant' },
  { label: 'IS 4759', sub: 'Certified' },
  { label: 'ISO 9001', sub: 'Certified' },
  { label: 'Make in India', sub: 'Initiative' },
];

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our security consultants', cta: 'Call Now', href: 'tel:+911146067000', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specs and installation guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your project scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const overviewPoints = [
  '358 Security Mesh — 12.7mm apertures prevent finger penetration; cutting requires >10 minutes with standard tools',
  'Hot-dip galvanized per IS 4759 with 120+ micron powder coat for decades of maintenance-free operation',
  'Available from 2m (Standard) to 5m (Maximum Security) height configurations',
  'Rated for -40°C to +70°C — extreme climate deployment from high-altitude cold to coastal environments',
  'ISO 9001:2015 certified manufacturing compliant with Make in India and government standards',
  'Integration-ready with CCTV, motion sensors, and perimeter intrusion detection systems',
];

const specifications = [
  { name: 'Wire Diameter', value: '4mm high-tensile steel (IS 280 compliant)' },
  { name: 'Mesh Pattern', value: '358 Security — 76.2mm × 12.7mm apertures' },
  { name: 'Panel Dimensions', value: '2.5m W × 3.0m H standard (custom sizes available)' },
  { name: 'Weld Strength', value: '540–690 N/mm² resistance welded joints' },
  { name: 'Security Rating', value: 'ASTM M5 compliant high-security grade' },
  { name: 'Surface Treatment', value: 'Hot-dip galvanized (IS 4759) + 120+ micron powder coat' },
  { name: 'Height Range', value: '2.0m · 3.0m · 4.0m · 5.0m configurations' },
  { name: 'Temperature Range', value: '-40°C to +70°C (extreme climate capable)' },
];

const features = [
  'Anti-Cut Technology: cut-resistant mesh engineered to prevent breach with standard hand tools',
  'Security-Grade 358 Mesh: precision 12.7mm apertures maintain visibility for surveillance',
  'Superior Corrosion Protection: marine-grade coating for India\'s diverse coastal and inland conditions',
  'Electronic System Integration: seamless compatibility with CCTV, motion sensors, and perimeter detection',
  'Rapid Deployment System: engineered for efficient installation across varied terrain',
  'Multi-Height Configuration: 2m to 5m to meet varying security threat levels',
  'Critical Infrastructure Grade: meets stringent government and defense organization requirements',
  'All-Weather Design: engineered for extreme Indian climate from high-altitude cold to desert heat',
];

const applications = [
  'Border Security & International Perimeters',
  'Airports & Critical Infrastructure',
  'Nuclear Facilities & Space Centers',
  'Military & Defense Installations',
  'Oil Refineries & Power Plants',
  'Government & Legislative Buildings',
];

const AntiClimbFencePage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const go = (dir: 1 | -1) => {
    setCurrent(i => (i + dir + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <>
      <Helmet>
        <title>Anti Climb Fencing | 358 Security Mesh System | Global Technocrats</title>
        <meta
          name="description"
          content="Advanced 358 anti-climb fencing system — ASTM M5 compliant, IS 4759 certified. Designed for BSF, CISF, DRDO and critical infrastructure perimeter protection across India."
        />
        <meta name="keywords" content="anti climb fencing, 358 security mesh, anti cut fence, perimeter security, high security fencing, CISF fencing, BSF fencing" />
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
                <span className="text-gray-500">Anti Climb Fencing</span>
              </nav>

              <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <Shield className="w-3.5 h-3.5" /> ASTM M5 Compliant
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-3">
                Anti Climb<br />
                <span className="text-primary-900">Fencing System</span>
              </h1>
              <p className="text-lg font-medium text-primary-900 mb-5">358 Anti-Cut Anti-Climb Series</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                Advanced 358 security mesh fencing designed to meet the stringent requirements of India's defence and security organisations — BSF, CISF, and DRDO — for maximum perimeter protection of critical installations.
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
                      alt={`Anti climb fencing view ${current + 1}`}
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
                    <p className="text-[11px] text-gray-400 font-medium">Anti-Cut Certified</p>
                    <p className="text-sm font-bold text-gray-900">358 Security Mesh</p>
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

      {/* ── Overview ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">What Is Anti Climb Fencing?</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                Anti Climb Fencing —<br /> Advanced 358 Security Mesh System
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Global Technocrats' Anti-Climb Fencing is advanced perimeter security technology engineered to meet demanding defence and security requirements. The 358 security mesh system is purpose-built for high-security installations, suitable for deployment across India's diverse climate conditions from extreme cold to desert heat.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                The system employs proven Anti-Cut Anti-Climb design principles widely recognised by the Border Security Force (BSF), Central Industrial Security Force (CISF), and Defence Research and Development Organisation (DRDO).
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
              <img src={OVERVIEW_IMAGE} alt="Anti Climb Fencing installation view" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs + Features + Applications ─────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Specifications */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Technical Specifications</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-8">Engineering Standards</h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                {specifications.map(({ name, value }, i) => (
                  <div key={name} className={`flex gap-4 px-5 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <span className="text-sm font-semibold text-gray-700 w-40 flex-shrink-0">{name}</span>
                    <span className="text-sm text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features + Applications */}
            <div className="space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Key Features</span>
                <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">System Capabilities</h2>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-900 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Applications</span>
                <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Where It's Deployed</h2>
                <div className="grid grid-cols-2 gap-3">
                  {applications.map((app) => (
                    <div key={app} className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium">
                      <Shield className="w-4 h-4 text-primary-900 flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Secure Your Perimeter?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our team of defence security specialists will help you design and deploy the right Anti-Climb Fencing solution for your installation.
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

export default AntiClimbFencePage;
