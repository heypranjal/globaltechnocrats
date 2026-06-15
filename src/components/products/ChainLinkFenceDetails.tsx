import React from 'react';
import { CheckCircle2, Factory, Building2, Landmark, Shield, Home, Award } from 'lucide-react';

const specifications = [
  { name: 'Material',       value: 'Galvanized steel / PVC coated wire' },
  { name: 'Wire Gauge',     value: '2.5 mm – 4 mm' },
  { name: 'Mesh Aperture',  value: '50 mm × 50 mm' },
  { name: 'Height Range',   value: '1.2 m – 3.6 m' },
  { name: 'Post Type',      value: 'MS pipe / GI pipe' },
  { name: 'Finish',         value: 'Hot-dip galvanized / PVC coated' },
];

const features = [
  'IS 278 and BS EN 10223 compliant wire construction',
  'Hot-dip galvanized coating for long-term corrosion protection',
  'PVC colour-coated option available across standard RAL palette',
  'Heavy-duty grade available for high-security perimeter applications',
  'Flexible height and panel width configurations to suit any site',
  'Compatible with barbed wire and concertina coil topping systems',
  'Low maintenance with 20+ year service life in galvanized grade',
];

const applications = [
  { name: 'Industrial Perimeters', Icon: Factory },
  { name: 'Residential Boundaries', Icon: Home },
  { name: 'Government Facilities', Icon: Landmark },
  { name: 'Sports Enclosures', Icon: Award },
  { name: 'Defence & Security', Icon: Shield },
  { name: 'Construction Sites', Icon: Building2 },
];

export const ChainLinkFenceDetails: React.FC = () => (
  <>
    {/* Specifications + Features */}
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
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
            Chain link fencing is deployed wherever a durable, cost-effective perimeter solution is required.
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
            Available grades and configurations across the Chain Link Fence range.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-primary-900 text-white">
                <th className="text-left px-5 py-4 font-bold tracking-wide">Fence Height</th>
                <th className="text-center px-5 py-4 font-bold tracking-wide">Panel Width</th>
                <th className="text-center px-5 py-4 font-bold tracking-wide">Mesh Size</th>
                <th className="text-center px-5 py-4 font-bold tracking-wide">Wire Diameter (GI)</th>
                <th className="text-center px-5 py-4 font-bold tracking-wide">Wire Diameter (PVC Coated)</th>
                <th className="text-center px-5 py-4 font-bold tracking-wide">Fabric Roll Length</th>
                <th className="text-center px-5 py-4 font-bold tracking-wide">Post Sections</th>
                <th className="text-left px-5 py-4 font-bold tracking-wide">Surface Finish</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-5 py-5 font-medium text-gray-800">1.0 m – 3.5 m</td>
                <td className="px-5 py-5 text-center text-gray-700">1.5 m – 3.0 m</td>
                <td className="px-5 py-5 text-center text-gray-700">50×50 mm, 75×75 mm</td>
                <td className="px-5 py-5 text-center text-gray-700">2.0 mm – 5.0 mm</td>
                <td className="px-5 py-5 text-center text-gray-700">2.0 mm – 5.0 mm</td>
                <td className="px-5 py-5 text-center text-gray-700">7 m – 20 m</td>
                <td className="px-5 py-5 text-center text-gray-700">SHS, RHS, CHS Pipe</td>
                <td className="px-5 py-5 text-primary-900 font-semibold">Galvanized / PVC Coated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </>
);
