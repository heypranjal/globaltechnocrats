import React, { useState } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = [
  {
    key: 'standard',
    name: 'Concertina Coil Fence',
    badge: 'Standard Security',
    tagline: 'Single & Double Coil Configuration',
    description:
      'High-tensile galvanized steel concertina coil available in single, double, and razor blade variants. Dense crossed-spiral configuration provides a formidable physical and psychological deterrent for military, border, and industrial installations.',
    features: [
      'Single and double coil configurations available',
      'Razor blade concertina option for maximum deterrence',
      'High-tensile galvanized steel construction',
      'Clip fastener installation system',
    ],
    specs: [
      { name: 'Material', value: 'High-tensile galvanized steel' },
      { name: 'Wire Diameter', value: '2.5mm high-carbon steel' },
      { name: 'Coil Diameter', value: '450mm, 600mm, 700mm, 980mm' },
      { name: 'Finish', value: 'Hot-dip galvanized' },
    ],
    bestFor: 'Military, border security & correctional facilities',
    accentColor: 'border-primary-900',
    badgeBg: 'bg-primary-900',
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777398/ConcertinaCoilFence1_truxp8.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777433/ConcertinaCoilFence2_rqdlc7.png',
    ],
  },
  {
    key: 'ss',
    name: 'SS Concertina Coil',
    badge: 'Marine Grade',
    tagline: 'Stainless Steel SS304 / SS316',
    description:
      'Stainless steel concertina coil engineered for harsh coastal and chemical environments. SS304/SS316 construction delivers exceptional corrosion resistance and a lifespan far exceeding galvanized alternatives — ideal for premium long-term installations.',
    features: [
      'SS304/SS316 stainless steel construction',
      'Excellent corrosion and rust resistance in marine environments',
      'High tensile strength 1270–1570 N/mm²',
      'Operational range -40°C to +120°C',
    ],
    specs: [
      { name: 'Material', value: 'Stainless steel SS304 / SS316' },
      { name: 'Wire Diameter', value: '2.5mm stainless steel' },
      { name: 'Coil Diameter', value: '450mm, 600mm, 700mm' },
      { name: 'Tensile Strength', value: '1270–1570 N/mm²' },
    ],
    bestFor: 'Coastal installations, chemical plants & marine environments',
    accentColor: 'border-slate-700',
    badgeBg: 'bg-slate-700',
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779775911/SSConcertinaCoil1_uwgha6.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779776018/SsImage2_lgojr8.png',
    ],
  },
  {
    key: 'gi',
    name: 'GI Concertina Coil',
    badge: 'Cost-Effective',
    tagline: 'Galvanized Iron — Best Value',
    description:
      'Galvanized iron concertina coil delivering reliable perimeter protection at an economical price point. High-quality GI wire with hot-dip galvanized coating provides excellent weather resistance and 10–15+ years of service life with minimal maintenance.',
    features: [
      'High-quality galvanized iron (GI) construction',
      'Hot-dip galvanized for weather resistance',
      'Multiple coil diameter options (450–980mm)',
      'Easy installation and low maintenance',
    ],
    specs: [
      { name: 'Material', value: 'Galvanized iron (GI)' },
      { name: 'Wire Gauge', value: '12–16 gauge' },
      { name: 'Coil Diameter', value: '450mm, 600mm, 700mm, 980mm' },
      { name: 'Lifespan', value: '10–15+ years with maintenance' },
    ],
    bestFor: 'Residential, commercial & agricultural security',
    accentColor: 'border-amber-600',
    badgeBg: 'bg-amber-600',
    images: [
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777398/ConcertinaCoilFence1_truxp8.png',
      'https://res.cloudinary.com/dy93kgo03/image/upload/v1779777433/ConcertinaCoilFence2_rqdlc7.png',
    ],
  },
];

const VariantCard: React.FC<{ v: typeof variants[0] }> = ({ v }) => {
  const [current, setCurrent] = useState(0);
  const go = (dir: 1 | -1) =>
    setCurrent(i => (i + dir + v.images.length) % v.images.length);

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-md border-t-4 ${v.accentColor} flex flex-col h-full`}>
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={v.images[current]}
            alt={`${v.name} view ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-10">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={() => go(1)} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center z-10">
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {v.images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? 'bg-white w-3 h-1.5' : 'bg-white/50 w-1.5 h-1.5'}`} />
          ))}
        </div>
        <span className={`absolute top-3 left-3 ${v.badgeBg} text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide z-10`}>
          {v.badge}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{v.tagline}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{v.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{v.description}</p>
        <ul className="space-y-2 mb-4">
          {v.features.map(f => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-primary-900 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
        <div className="rounded-xl overflow-hidden border border-gray-100 mb-4">
          {v.specs.map(({ name, value }, i) => (
            <div key={name} className={`flex gap-3 px-4 py-2.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <span className="font-semibold text-gray-700 w-32 flex-shrink-0">{name}</span>
              <span className="text-gray-600">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Best For</p>
          <p className="text-sm text-gray-700">{v.bestFor}</p>
        </div>
      </div>
    </div>
  );
};

export const ConcertinaVariantCards: React.FC = () => (
  <section className="py-24 bg-gray-50">
    <div className="container">
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Product Variants</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          Three Variants,<br className="hidden md:block" /> One Proven Security System
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Choose the concertina coil type that matches your environment, threat model, and budget. All variants share the same proven crossed-spiral design principle.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {variants.map(v => <VariantCard key={v.key} v={v} />)}
      </div>
    </div>
  </section>
);
