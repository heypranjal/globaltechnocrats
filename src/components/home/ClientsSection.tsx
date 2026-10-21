import React from 'react';
import { Shield, Landmark, Building2 } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

type OrganisationGroup = {
  Icon: React.ComponentType<{ className?: string }>;
  heading: string;
  organisations: string[];
  cols?: 1 | 2;
};

const organisationGroups: OrganisationGroup[] = [
  {
    Icon: Shield,
    heading: 'Defence Forces & Security',
    organisations: [
      'Indian Army',
      'Indian Navy',
      'Central Reserve Police Force (CRPF)',
      'Border Security Force (BSF)',
      'Indian Railways',
    ],
  },
  {
    Icon: Landmark,
    heading: 'Government Enterprises',
    organisations: [
      'Bharat Electronics Limited (BEL)',
      'Bharat Heavy Electricals Limited (BHEL)',
      'National Thermal Power Corporation (NTPC)',
      'Indian Oil Corporation Limited (IndianOil)',
      'GAIL (India) Limited',
    ],
  },
  {
    Icon: Building2,
    heading: 'Private Sector & Technology Partners',
    cols: 2,
    organisations: [
      'Mahindra Defence Systems',
      'New Technologies Global Systems (NTGS)',
      'Microsoft',
      'Google',
      'Adani Group',
      'AECOM',
      'Suroj Buildcon',
      'Tata Projects',
      'Larsen & Toubro',
      'Bearys Group',
      'NCC Limited',
      'Kalpataru Power Transmission Limited',
    ],
  },
];

const ClientsSection: React.FC = () => {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="trusted-by-heading"
      className={`py-10 md:py-12 section-alternate-luxury section-luxury opacity-0 transition-all duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="lg:col-span-1">
            <h2
              id="trusted-by-heading"
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight"
            >
              Trusted by Leading Organizations
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our solutions serve India's defence forces, government organizations, public-sector
              enterprises, and leading private companies across defence, infrastructure, energy, and
              technology.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {organisationGroups.map(({ Icon, heading, organisations, cols }) => (
              <div key={heading}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider leading-tight">
                    {heading}
                  </h3>
                </div>
                <ul
                  className={`text-sm text-gray-600 leading-snug ${
                    cols === 2 ? 'grid grid-cols-2 gap-x-4 gap-y-1.5' : 'space-y-1.5'
                  }`}
                >
                  {organisations.map((name) => (
                    <li key={name} className="hover:text-primary-700 transition-colors">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
