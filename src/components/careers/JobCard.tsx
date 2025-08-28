import React from 'react';
import { Briefcase, MapPin, ChevronDown, Users, GraduationCap } from 'lucide-react';
import type { JobListing } from '../../data/careers';

interface JobCardProps {
  job: JobListing;
  isActive: boolean;
  onToggle: (jobId: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isActive, onToggle }) => {
  return (
    <div 
      className={`border border-gray-200 rounded-lg transition-all duration-200 ${
        isActive ? 'bg-white shadow-lg' : 'bg-white hover:shadow-md'
      }`}
    >
      <div 
        className="p-6 cursor-pointer" 
        onClick={() => onToggle(job.id)}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                {job.department}
              </span>
              <span className="text-gray-500 text-sm">{job.posted}</span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{job.title}</h3>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                {job.type}
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                {job.experience}
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>
          
          <ChevronDown 
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ml-4 flex-shrink-0 ${
              isActive ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>
      
      {isActive && (
        <div className="border-t border-gray-100 p-6 bg-gray-50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary-600" />
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-primary-600" />
                Requirements
              </h4>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <a 
              href={`mailto:careers@globaltechnocrats.in?subject=Application for ${job.title}&body=Dear Hiring Manager,%0A%0AI am writing to express my interest in the ${job.title} position (${job.id}). Please find my resume attached.%0A%0ABest regards`}
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;