import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VARIANT_IMAGES: Record<string, string[]> = {
  gauntlet: [
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541149/gauntelt-_9_rutgni.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541148/gauntelt-_8_nfrtlu.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541147/gauntelt-_7_spxduj.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541147/gauntelt-_6_h2huh1.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541129/gauntelt-_11_ow0k2w.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541129/gauntelt-_10_dhcwub.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541128/gauntelt-_4_cyoi4f.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780978652/climb44_iv6wig.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541128/gauntelt-_2_i9hkuu.jpg',
  ],
  stronghold: [
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977778/stronghold4_f7owtb.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977789/strong_hold_k4_rated.jpeg_4_b0jzbk.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977786/strong_hold_k4_fence_abh6r4.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977785/strong_hold_k4_fence_2_qtvhor.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977784/strong_hold_k4_fence_3_onlq2c.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977783/1.5mtr_crash_rated_fence_-strong_hold_fxbnbh.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977778/stronghold3_dxdyqh.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977777/stronghold2_yqnhnz.png',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780977776/stronghold1_k2ehaj.png',
  ],
  trident: [
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541241/TRIDENT_FENCE.png_tlhtje.jpg',
    'https://res.cloudinary.com/dy93kgo03/image/upload/v1780541241/TRIDENT_FENCE_sw0tg6.png',
  ],
};

interface Variant {
  key: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  bestFor: string;
  accentBorder: string;
  badgeBg: string;
}

const variants: Variant[] = [
  {
    key: 'gauntlet',
    name: 'Gauntlet Style Fence',
    badge: 'Precision Defence',
    tagline: 'Tapered Spear-Tip Palisade',
    description:
      'Engineered with aggressive tapered spear-tip palings, the Gauntlet delivers optimal crash resistance alongside a commanding visual deterrent. The tapered profile maximises anti-climb performance while maintaining a professional, architectural appearance.',
    features: [
      'Tapered spear-tip palisade design',
      'Superior anti-climb paling profile',
      'Balanced security-to-aesthetic ratio',
      'K4 crash impact certified',
    ],
    bestFor: 'Government campuses, embassies & corporate HQ',
    accentBorder: 'border-primary-900',
    badgeBg: 'bg-primary-900',
  },
  {
    key: 'stronghold',
    name: 'Strong Hold Style Fence',
    badge: 'Maximum Impact',
    tagline: 'Reinforced Flat-Top Palisade',
    description:
      "Built for absolute structural supremacy. The StrongHold's reinforced flat-top palisade construction maximises energy absorption during vehicle impact — the definitive choice for data centres and critical national infrastructure where resilience is non-negotiable.",
    features: [
      'Reinforced flat-top palisade construction',
      'Maximum crash energy absorption',
      'Heavy-gauge structural steel core',
      'Optimised for high-risk installations',
    ],
    bestFor: 'Data centres, power plants & water treatment facilities',
    accentBorder: 'border-slate-800',
    badgeBg: 'bg-slate-800',
  },
  {
    key: 'trident',
    name: 'Trident Style Fence',
    badge: 'Triple Deterrent',
    tagline: 'Triple-Tip Security Head',
    description:
      "The Trident features a three-point security head that simultaneously maximises anti-intrusion capability, crash resistance, and visual deterrence. Its unmistakable silhouette communicates high-threat response before contact is ever made.",
    features: [
      'Triple-tip security head design',
      'Enhanced anti-cut and anti-climb',
      'Premium defence-grade aesthetics',
      'Preferred for military applications',
    ],
    bestFor: 'Military bases, armories & high-value defence installations',
    accentBorder: 'border-red-700',
    badgeBg: 'bg-red-700',
  },
];

interface VariantCardProps {
  variant: Variant;
}

const VariantCard: React.FC<VariantCardProps> = ({ variant }) => {
  const images = VARIANT_IMAGES[variant.key];
  const hasImages = images.length > 0;
  const [current, setCurrent] = useState(0);

  const go = (dir: 1 | -1) => {
    setCurrent(i => (i + dir + images.length) % images.length);
  };

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-md border-t-4 ${variant.accentBorder} flex flex-col h-full`}>
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        {hasImages ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt={`${variant.name} — view ${current + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Image ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === current ? 'bg-white w-3 h-1.5' : 'bg-white/50 w-1.5 h-1.5'}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 gap-3">
            <ImageIcon className="w-10 h-10 text-slate-300" />
            <div className="text-center">
              <p className="text-xs font-semibold text-slate-400">{variant.name}</p>
              <p className="text-[11px] text-slate-300 mt-0.5">Product image coming soon</p>
            </div>
          </div>
        )}

        <span className={`absolute top-3 left-3 ${variant.badgeBg} text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide z-10`}>
          {variant.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{variant.tagline}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{variant.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{variant.description}</p>

        <ul className="space-y-2 mb-5">
          {variant.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-primary-900 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Best For</p>
          <p className="text-sm text-gray-700 mb-4">{variant.bestFor}</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 w-full bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-900 transition-colors"
          >
            Enquire <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CrashVariantShowcase: React.FC = () => (
  <section className="py-24 bg-gray-50">
    <div className="container">
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Product Variants</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          Three Distinctive Styles,<br className="hidden md:block" /> One K4 Standard
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Every variant shares the same government-certified K4 crash resistance. Choose the profile that matches your threat model, installation context, and aesthetic requirements.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {variants.map((variant) => (
          <VariantCard key={variant.key} variant={variant} />
        ))}
      </div>
    </div>
  </section>
);
