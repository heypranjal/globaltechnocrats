import React from 'react';
import { CheckCircle2, Shield, Building2, Database, Factory, Server, Landmark } from 'lucide-react';

const specifications = [
  { name: 'Impact Rating', value: 'K4 — ASTM F2656 / PAS 68' },
  { name: 'Impact Resistance', value: 'High-velocity vehicle impact certified' },
  { name: 'Material', value: 'High-strength structural steel palisade' },
  { name: 'Height Options', value: '2 – 4 metres (custom heights available)' },
  { name: 'Foundation', value: 'Reinforced concrete footing required' },
  { name: 'Certification', value: 'Government laboratory verified' },
];

const features = [
  'K4 rating per ASTM F2656 and PAS 68 international standards',
  'Vehicle crash tested and independently certified',
  'High-impact collision resistance across all three variants',
  'Government laboratory verified structural design',
  'Customisable panel configuration and height options',
  'Integration-ready with access control and surveillance systems',
  'Aesthetic design options to complement architectural context',
];

const applications = [
  { name: 'Data Centres', Icon: Server },
  { name: 'Government Facilities', Icon: Landmark },
  { name: 'Critical Infrastructure', Icon: Building2 },
  { name: 'Defence Installations', Icon: Shield },
  { name: 'High-Security Commercial', Icon: Factory },
  { name: 'Industrial Facilities', Icon: Database },
];

const comparisonRows = [
  {
    feature: 'Palisade Profile',
    gauntlet: 'Tapered spear-tip',
    stronghold: 'Reinforced flat-top',
    trident: 'Triple-tip head',
  },
  {
    feature: 'Crash Absorption',
    gauntlet: 'High',
    stronghold: 'Maximum',
    trident: 'High',
  },
  {
    feature: 'Anti-Climb Rating',
    gauntlet: 'Excellent',
    stronghold: 'Good',
    trident: 'Superior',
  },
  {
    feature: 'Primary Application',
    gauntlet: 'Government & Corporate',
    stronghold: 'Critical Infrastructure',
    trident: 'Defence & Military',
  },
  {
    feature: 'Aesthetic Grade',
    gauntlet: 'Professional',
    stronghold: 'Utilitarian',
    trident: 'Premium Defence',
  },
  {
    feature: 'K4 Certified',
    gauntlet: '✓ Yes',
    stronghold: '✓ Yes',
    trident: '✓ Yes',
  },
];

export const CrashFenceDetails: React.FC = () => (
  <>
    {/* Specifications + Features */}
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Specifications */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Technical Data</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">Specifications</h2>
            <dl className="divide-y divide-gray-100">
              {specifications.map(({ name, value }) => (
                <div key={name} className="flex items-start justify-between gap-6 py-4">
                  <dt className="text-sm font-semibold text-gray-400 uppercase tracking-wide w-36 flex-shrink-0 pt-0.5">
                    {name}
                  </dt>
                  <dd className="text-sm font-medium text-gray-900 text-right leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Features */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Capabilities</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">Key Features</h2>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Applications */}
    <section className="py-20 bg-primary-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Deployment</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Typical Applications</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            The Kronos Crash Rated Fence is deployed wherever a vehicle-borne threat cannot be tolerated.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {applications.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary-900" />
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-tight">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Specification Table */}
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Product Range</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Specification Table</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Available configurations across the Kronos Crash Rated Fence range with certified security ratings.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 text-white">
                <th className="text-left px-6 py-4 font-bold tracking-wide">Product Name</th>
                <th className="text-center px-6 py-4 font-bold tracking-wide">Height Range (m)</th>
                <th className="text-center px-6 py-4 font-bold tracking-wide">Pale Type</th>
                <th className="text-center px-6 py-4 font-bold tracking-wide">Impact Rating</th>
                <th className="text-left px-6 py-4 font-bold tracking-wide">Available Styles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'K04P1/KRONOS',    height: '1.5 – 3.0', pale: 'W', rating: 'P1', styles: 'Gauntlet, Strong Hold, Trident' },
                { name: 'K04P2/KRONOS',    height: '1.5 – 3.0', pale: 'W', rating: 'P2', styles: 'Gauntlet, Strong Hold, Trident' },
                { name: 'K04P1IB/KRONOS',  height: '1.5 – 3.0', pale: 'W', rating: 'P1', styles: 'Gauntlet, Strong Hold, Trident' },
              ].map((row, i) => (
                <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-semibold text-gray-800">{row.name}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{row.height}</td>
                  <td className="px-6 py-4 text-center text-gray-700 font-medium">{row.pale}</td>
                  <td className="px-6 py-4 text-center text-primary-900 font-semibold">{row.rating}</td>
                  <td className="px-6 py-4 text-gray-700">{row.styles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Impact Classification */}
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Certified Performance</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Impact Classification</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Independent crash test results demonstrating certified penetration distances at defined vehicle weights and speeds.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm max-w-2xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 text-white">
                <th className="text-left px-6 py-4 font-bold tracking-wide">Parameter</th>
                <th className="text-left px-6 py-4 font-bold tracking-wide">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { param: 'Vehicle Weight (Kg)', value: '6800' },
                { param: 'Vehicle Type', value: 'N2' },
                { param: 'Test Speed (kph)', value: '48' },
                { param: 'Impact Angle (°)', value: '90' },
                { param: 'Penetration (m)', value: '1.01-7' },
                { param: 'Dispersion of Major Debris (m)', value: '0' },
              ].map(({ param, value }, i) => (
                <tr key={param} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-semibold text-gray-700">{param}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Comparison table */}
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-900">Side-by-Side</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Variant Comparison</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            All three variants share K4-class crash certification — select based on your threat profile and deployment context.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="text-left px-6 py-4 font-semibold text-gray-300 w-48">Feature</th>
                <th className="text-center px-6 py-4 font-bold text-primary-300">Gauntlet Style</th>
                <th className="text-center px-6 py-4 font-bold text-slate-300">Strong Hold Style</th>
                <th className="text-center px-6 py-4 font-bold text-red-300">Trident Style</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                  <td className="px-6 py-4 font-semibold text-gray-600 text-xs uppercase tracking-wide">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-800 font-medium">{row.gauntlet}</td>
                  <td className="px-6 py-4 text-center text-gray-800 font-medium">{row.stronghold}</td>
                  <td className="px-6 py-4 text-center text-gray-800 font-medium">{row.trident}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </>
);
