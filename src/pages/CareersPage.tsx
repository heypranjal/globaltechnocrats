import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Briefcase, Mail } from 'lucide-react';
import { jobListings, getUniqueLocations, getUniqueDepartments } from '../data/careers';
import CareersHero from '../components/careers/CareersHero';
import JobFilters from '../components/careers/JobFilters';
import JobCard from '../components/careers/JobCard';

const CareersPage: React.FC = () => {
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');
  const [showFilters, setShowFilters] = useState(false);
  
  // Get unique locations and departments for filters
  const locations = getUniqueLocations();
  const departments = getUniqueDepartments();
  
  // Filter job listings based on search term and filters
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = 
      locationFilter === 'All Locations' || 
      job.location.includes(locationFilter);
    
    const matchesDepartment = 
      departmentFilter === 'All Departments' || 
      job.department === departmentFilter;
    
    return matchesSearch && matchesLocation && matchesDepartment;
  });
  
  const toggleJobDetails = (jobId: string) => {
    setActiveJobId(activeJobId === jobId ? null : jobId);
  };
  
  return (
    <>
      <Helmet>
        <title>Careers | Global Technocrats</title>
        <meta name="description" content="Explore career opportunities at Global Technocrats. Join our team and work on cutting-edge defense and security technologies." />
      </Helmet>
      
      <CareersHero />

      {/* Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-lg text-gray-600">
                Discover your next career opportunity and help us build the future of defense technology.
              </p>
            </div>

            {jobListings.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-10 md:p-14 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-primary-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No Open Positions Right Now</h3>
                <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
                  We don't have any active openings at the moment. New roles will be posted here as they become
                  available — do check back soon, or send us your profile and we'll keep it on file.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="mailto:info@globaltechnocrats.in?subject=Expression of Interest"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-900 text-white font-semibold hover:bg-primary-800 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Send Us Your Profile
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary-900 font-semibold ring-1 ring-primary-200 hover:bg-primary-50 transition-colors"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <JobFilters
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  locationFilter={locationFilter}
                  onLocationChange={setLocationFilter}
                  departmentFilter={departmentFilter}
                  onDepartmentChange={setDepartmentFilter}
                  locations={locations}
                  departments={departments}
                  showFilters={showFilters}
                  onToggleFilters={() => setShowFilters(!showFilters)}
                />

                <div className="space-y-6 mt-8">
                  {filteredJobs.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                      <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
                    </div>
                  ) : (
                    filteredJobs.map((job) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        isActive={activeJobId === job.id}
                        onToggle={toggleJobDetails}
                      />
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;