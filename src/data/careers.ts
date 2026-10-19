export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobListings: JobListing[] = [];

export const getUniqueLocations = () => {
  return ['All Locations', ...new Set(jobListings.map(job => job.location.split(',')[0].trim()))];
};

export const getUniqueDepartments = () => {
  return ['All Departments', ...new Set(jobListings.map(job => job.department))];
};

export const getJobById = (id: string): JobListing | undefined => {
  return jobListings.find(job => job.id === id);
};