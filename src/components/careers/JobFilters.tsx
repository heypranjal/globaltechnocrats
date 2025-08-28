import React from 'react';
import { Search, Filter } from 'lucide-react';

interface JobFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  locationFilter: string;
  onLocationChange: (location: string) => void;
  departmentFilter: string;
  onDepartmentChange: (department: string) => void;
  locations: string[];
  departments: string[];
  showFilters: boolean;
  onToggleFilters: () => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({
  searchTerm,
  onSearchChange,
  locationFilter,
  onLocationChange,
  departmentFilter,
  onDepartmentChange,
  locations,
  departments,
  showFilters,
  onToggleFilters
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search jobs by title, description, or department..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        />
      </div>

      {/* Filter Toggle */}
      <button
        onClick={onToggleFilters}
        className="flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-4"
      >
        <Filter className="w-4 h-4 mr-2" />
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filters */}
      {showFilters && (
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <select
              value={locationFilter}
              onChange={(e) => onLocationChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select
              value={departmentFilter}
              onChange={(e) => onDepartmentChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobFilters;