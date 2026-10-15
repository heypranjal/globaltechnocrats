import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Shield,
  FileText,
  Phone,
  Zap,
  CheckCircle,
  Users,
  Radio,
  Lightbulb,
  Battery,
  Target,
  Flame,
  Wrench,
  Siren,
  ChevronDown,
} from 'lucide-react';
import BrochureModal from '../components/products/BrochureModal';

const HERO_IMAGE =
  'https://res.cloudinary.com/dy93kgo03/image/upload/v1792065017/Vajra-1-1536x768_av33ow.png';

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our DRDO TOT consultants', cta: 'Call Now', href: 'tel:+919810282636', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specifications and configuration guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your deployment scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const features = [
  { Icon: Users, title: 'Capacity for 26 Troops', text: 'Spacious interior for comfortable transport of up to 26 troops — enabling rapid deployment and swift response.' },
  { Icon: Siren, title: 'Multi-Tube Tear Gas Launchers', text: 'Two roof-mounted multi-tube launchers deliver non-lethal, highly effective crowd and riot control.' },
  { Icon: Shield, title: 'Riot Gear & Rifle Storage', text: 'Dedicated compartments and racks keep riot gear and rifles securely stowed and ready to deploy.' },
  { Icon: Lightbulb, title: 'Four Flood Lights', text: 'High-output flood lights illuminate the surroundings for low-light and night-time operations.' },
  { Icon: Radio, title: 'Intercom & PA System', text: 'Integrated intercom and public-address equipment enable clear communication inside and outside the vehicle.' },
  { Icon: Battery, title: 'In-Built 2.4 kVA Power Source', text: 'Reliable onboard power keeps electronics and mission equipment running during prolonged deployments.' },
  { Icon: Target, title: 'Firing Ports', text: 'Tactical firing ports allow personnel inside to retaliate while maintaining a secure position.' },
  { Icon: Flame, title: 'Explosive-Suppression Fuel Tank', text: 'Fuel tank lined with explosive-suppression material adds a critical layer of safety in high-risk operations.' },
  { Icon: Wrench, title: 'Additional Accessories', text: 'Fire extinguishers, foldable stretchers for medical emergencies, and a wind-direction indicator for tactical decisions.' },
];

const faqs = [
  {
    q: 'Are the Vajra and Mini Vajra vehicles armoured?',
    a: 'They are not fully armoured, but are constructed with reinforced materials to withstand the various threats encountered during law enforcement operations.',
  },
  {
    q: 'Can tear gas be fired from inside the vehicle?',
    a: 'No. The roof-mounted tear gas launchers can only be operated externally to disperse crowds or control riotous situations.',
  },
  {
    q: 'How is passenger capacity distributed inside the vehicle?',
    a: 'The seating arrangement is optimised for the comfort and safety of the troops. The exact layout may vary depending on specific customisation requirements.',
  },
  {
    q: 'What fuel type do these vehicles use?',
    a: 'Both Vajra and Mini Vajra primarily run on diesel — chosen for its fuel efficiency and wide availability across operational regions.',
  },
  {
    q: 'Are these vehicles suitable for military use?',
    a: 'While tailored for law enforcement and security forces, they can be adapted for certain military applications such as peacekeeping missions and internal security operations.',
  },
];

const VajraPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>Vajra &amp; Mini Vajra | Anti-Riot Law Enforcement Vehicle | Global Technocrats</title>
        <meta
          name="description"
          content="Vajra and Mini Vajra — purpose-built light vehicles for law enforcement and security forces. 26-troop capacity, roof-mounted tear gas launchers, firing ports, 2.4 kVA power and explosive-suppression fuel tank."
        />
        <meta name="keywords" content="vajra, mini vajra, anti riot vehicle, law enforcement vehicle, security forces transport, tear gas launcher, riot control, DRDO TOT" />
      </Helmet>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative -mt-20 min-h-[70vh] bg-white flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #423c81 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-8">
              <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/products/defence" className="hover:text-gray-600 transition-colors">Defence Tech</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-500">Vajra</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <Zap className="w-3.5 h-3.5" /> Anti-Riot &amp; Troop Carrier
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-5">
              Vajra &amp; Mini Vajra
            </h1>
            <p className="text-lg font-medium text-primary-900 mb-5">
              Revolutionising Law Enforcement &amp; Security-Force Transportation
            </p>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              In an ever-evolving landscape of security challenges, law enforcement agencies need robust, versatile and
              efficient vehicles to carry out their duties effectively. The Vajra and Mini Vajra light vehicles are
              purpose-built for exactly that — rapid deployment, crowd control and safe transport of security forces
              into affected areas.
            </p>
          </div>

          {/* Hero image */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 bg-gray-50">
              <img
                src={HERO_IMAGE}
                alt="Vajra anti-riot law enforcement vehicle"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Salient Features ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Salient Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Purpose-Built for the Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map(({ Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">FAQs</h2>
            </div>
            <div className="space-y-3">
              {faqs.map(({ q, a }, i) => {
                const open = openFaq === i;
                return (
                  <div key={q} className="bg-gray-50 rounded-2xl ring-1 ring-gray-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-gray-900">{q}</span>
                      <ChevronDown className={`w-5 h-5 text-primary-900 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </button>
                    {open && (
                      <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Conclusion ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Conclusion</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              An Indispensable Asset in Modern Operations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Vajra and Mini Vajra light commercial vehicles represent a significant advancement in law enforcement
              and security-force transportation. Packed with cutting-edge features, they give agencies the means to
              swiftly respond to emergencies, maintain public order and ensure the safety of both officers and
              civilians. With their versatility and purpose-built design, the Vajra and Mini Vajra have become
              indispensable assets in modern-day law enforcement and security operations.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Vajra?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our specialists can share detailed specifications, variant options and support deployment planning for
              your force.
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

export default VajraPage;
