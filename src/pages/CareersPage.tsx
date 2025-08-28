import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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

            {/* Job Listings */}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;