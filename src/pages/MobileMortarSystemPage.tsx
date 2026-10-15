import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Shield,
  FileText,
  Phone,
  Crosshair,
  Target,
  Zap,
  Cpu,
  MoveHorizontal,
} from 'lucide-react';
import BrochureModal from '../components/products/BrochureModal';

const ctaCards = [
  { Icon: Phone, label: 'Talk to an Expert', sub: 'Speak with our defence technology consultants', cta: 'Call Now', href: 'tel:+919810282636', openModal: false },
  { Icon: FileText, label: 'Download Brochure', sub: 'Full specifications and configuration guide', cta: 'Download PDF', href: undefined, openModal: true },
  { Icon: Shield, label: 'Request a Quote', sub: 'Custom pricing for your deployment scope', cta: 'Get Quote', href: '/contact', openModal: false },
];

const highlights = [
  {
    Icon: MoveHorizontal,
    title: 'Rapid Deployment',
    text: 'Compact, mobile platform designed for swift response and strategic positioning across diverse terrains.',
  },
  {
    Icon: Zap,
    title: 'Potent Firepower',
    text: 'State-of-the-art mortar engineered to deliver effective indirect fire support with high reliability.',
  },
  {
    Icon: Crosshair,
    title: 'Precision Engagement',
    text: 'Advanced targeting with precision-guided munitions — accuracy that minimises collateral damage.',
  },
  {
    Icon: Target,
    title: 'Operational Flexibility',
    text: 'Integrated mobility features ensure strategic manoeuvring and adaptability in dynamic scenarios.',
  },
  {
    Icon: Cpu,
    title: 'Intelligent Fire Control',
    text: 'User-friendly interface and intuitive controls streamline target acquisition and engagement.',
  },
  {
    Icon: Shield,
    title: 'Combat-Ready Design',
    text: 'Robust engineering built around the operational realities of the modern battlefield.',
  },
];

const MobileMortarSystemPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Mobile Mortar System | Defence Tech | Global Technocrats</title>
        <meta
          name="description"
          content="Mobile Mortar System — a next-generation mobile artillery platform combining mobility, firepower and precision for the modern battlefield."
        />
        <meta name="keywords" content="mobile mortar system, mobile artillery, precision guided mortar, indirect fire support, defence technology, military platform" />
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
              <span className="text-gray-500">Mobile Mortar System</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-primary-900 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
              <Crosshair className="w-3.5 h-3.5" /> Mobile Artillery Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-[1.1] mb-5">
              Mobile Mortar System
            </h1>
            <p className="text-lg font-medium text-primary-900 mb-5">
              A Paradigm Shift in Mobile Artillery
            </p>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              A cutting-edge advancement in mobile artillery technology, developed under collaboration — seamlessly
              combining mobility, firepower and precision to provide a versatile solution for dynamic military scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Introducing a cutting-edge advancement in mobile artillery technology, the Mobile Mortar System under
              collaboration represents a paradigm shift in the modern battlefield. This sophisticated system seamlessly
              combines mobility, firepower, and precision to provide a versatile solution for dynamic military scenarios.
              Designed for rapid deployment, the Mobile Mortar System embodies the evolution of artillery platforms,
              delivering enhanced agility and adaptability to ground forces.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Crafted with state-of-the-art engineering, this system boasts a compact yet potent mortar, enabling swift
              response to emerging threats. Its integrated mobility features empower military units to traverse diverse
              terrains with ease, ensuring strategic positioning and operational flexibility. The system's advanced
              targeting capabilities, coupled with precision-guided munitions, redefine accuracy in mortar systems,
              minimising collateral damage and maximising mission success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Incorporating cutting-edge technology, the Mobile Mortar System exemplifies the commitment to innovation in
              defence. The system's user-friendly interface and intuitive controls enhance the operational efficiency of
              military personnel, streamlining target acquisition and engagement processes. As the next frontier in
              artillery evolution, this groundbreaking system reflects the ongoing pursuit of excellence in military
              technology, poised to redefine the landscape of modern warfare.
            </p>
          </div>
        </div>
      </section>

      {/* ── Highlights ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Capabilities at a Glance</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Engineered for the Modern Battlefield</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlights.map(({ Icon, title, text }) => (
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

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-primary-950">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in the Mobile Mortar System?</h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Our defence technology specialists can share detailed specifications and discuss deployment requirements.
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

export default MobileMortarSystemPage;
