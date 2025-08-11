import React from 'react';
import { Helmet } from 'react-helmet';
import { TrendingUp, Download, Calendar, ArrowRight, Briefcase, FileText, PieChart, BarChart4 } from 'lucide-react';

const InvestorRelationsPage: React.FC = () => {
  // Mock financial data
  const financialHighlights = [
    { id: 1, title: 'Revenue', value: '$285M', change: '+18%', year: 'FY 2024' },
    { id: 2, title: 'EBITDA', value: '$68M', change: '+22%', year: 'FY 2024' },
    { id: 3, title: 'Net Income', value: '$42M', change: '+15%', year: 'FY 2024' },
    { id: 4, title: 'R&D Investment', value: '$35M', change: '+30%', year: 'FY 2024' }
  ];

  // Mock reports data
  const reports = [
    { id: 1, title: 'Annual Report', year: '2024', fileType: 'PDF', fileSize: '8.5 MB', date: 'March 15, 2024' },
    { id: 2, title: 'Q4 Financial Results', year: '2024', fileType: 'PDF', fileSize: '3.2 MB', date: 'January 30, 2024' },
    { id: 3, title: 'Q3 Financial Results', year: '2023', fileType: 'PDF', fileSize: '3.0 MB', date: 'October 28, 2023' },
    { id: 4, title: 'Q2 Financial Results', year: '2023', fileType: 'PDF', fileSize: '2.8 MB', date: 'July 30, 2023' },
    { id: 5, title: 'Q1 Financial Results', year: '2023', fileType: 'PDF', fileSize: '2.7 MB', date: 'April 28, 2023' },
    { id: 6, title: 'Annual Report', year: '2023', fileType: 'PDF', fileSize: '7.9 MB', date: 'March 10, 2023' }
  ];

  // Mock events data
  const upcomingEvents = [
    { id: 1, title: 'Q1 2025 Earnings Call', date: 'April 25, 2025', time: '10:00 AM IST', location: 'Virtual Event' },
    { id: 2, title: 'Annual Shareholders Meeting', date: 'June 15, 2025', time: '11:00 AM IST', location: 'Corporate Headquarters, New Delhi' },
    { id: 3, title: 'Defense Technology Summit', date: 'September 15-17, 2025', time: 'All Day', location: 'New Delhi, India' }
  ];

  return (
    <>
      <Helmet>
        <title>Investor Relations | Global Technocrats</title>
        <meta name="description" content="Financial information, annual reports, and investor resources for Global Technocrats - a leading defense technology company." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-secondary-900 py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Financial information, reports, and resources for investors and stakeholders of Global Technocrats.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-1" /> Financial Performance
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Highlights</h2>
            
            <p className="text-lg text-gray-600">
              Key financial metrics demonstrating our strong performance and growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {financialHighlights.map(highlight => (
              <div 
                key={highlight.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-gray-500 font-medium mb-2">{highlight.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900 mr-2">{highlight.value}</span>
                  <span className={`text-sm font-medium ${highlight.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {highlight.change}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2">{highlight.year}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <PieChart className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Revenue by Region</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">India</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">45%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Middle East</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">35%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Southeast Asia</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '15%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">15%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Other Regions</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '5%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">5%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <BarChart4 className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Revenue by Business Unit</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Security Systems</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">40%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Defence Technology</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '30%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">30%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">AI & Surveillance</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Services & Support</span>
                  <div className="flex items-center">
                    <div className="w-48 h-3 bg-gray-200 rounded-full overflow-hidden mr-3">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '10%'}}></div>
                    </div>
                    <span className="text-gray-900 font-medium">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Presentations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <FileText className="w-4 h-4 mr-1" /> Financial Documents
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reports & Presentations</h2>
            
            <p className="text-lg text-gray-600">
              Access our latest financial reports, annual reports, and investor presentations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reports.map(report => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{report.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{report.year}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{report.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{report.fileType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{report.fileSize}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="flex items-center text-primary-600 hover:text-primary-800">
                          <Download className="w-4 h-4 mr-1" /> Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="btn btn-secondary">
              View All Reports
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-1" /> Events
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Upcoming Events</h2>
            
            <p className="text-lg text-gray-600">
              Stay informed about our upcoming investor events, earnings calls, and presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <div 
                key={event.id}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary-500 rounded-full w-12 h-12 flex items-center justify-center text-white">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Add to Calendar
                  </button>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{event.date}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                </div>
                
                <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                  Event Details <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Earnings Call Webcasts</h3>
                <p className="text-gray-600 mb-6">
                  Access live webcasts or recordings of our quarterly earnings calls and investor presentations. Stay updated on our financial performance and strategic initiatives.
                </p>
                <button className="btn btn-primary">
                  Access Webcasts
                </button>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Earnings Call" 
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 rounded-full py-1 px-3 mb-5 text-sm font-medium">
              <Briefcase className="w-4 h-4 mr-1" /> Leadership
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Corporate Governance</h2>
            
            <p className="text-lg text-gray-600">
              Information about our governance structure, board of directors, and corporate policies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Board of Directors</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                      alt="Dr. Rajiv Mehta" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold">Dr. Rajiv Mehta</h4>
                      <p className="text-primary-600">Founder & Executive Chairman</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Founded Global Technocrats in 2010 and has led the company's strategic vision and growth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                      alt="Arjun Sharma" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold">Arjun Sharma</h4>
                      <p className="text-primary-600">Chief Financial Officer</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Oversees the company's financial strategy and investor relations activities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                      alt="Dr. Sanjay Gupta" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold">Dr. Sanjay Gupta</h4>
                      <p className="text-primary-600">Independent Director</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Former Secretary of Defense Research with extensive experience in defense technology policy.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    View All Board Members <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Corporate Documents</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300">
                    <FileText className="w-6 h-6 text-primary-500 mr-3" />
                    <div>
                      <h4 className="font-bold">Corporate Governance Guidelines</h4>
                      <p className="text-sm text-gray-600">Framework for governance and board practices</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 ml-auto" />
                  </a>
                  
                  <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300">
                    <FileText className="w-6 h-6 text-primary-500 mr-3" />
                    <div>
                      <h4 className="font-bold">Code of Business Conduct</h4>
                      <p className="text-sm text-gray-600">Ethical standards and business practices</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 ml-auto" />
                  </a>
                  
                  <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300">
                    <FileText className="w-6 h-6 text-primary-500 mr-3" />
                    <div>
                      <h4 className="font-bold">Board Committee Charters</h4>
                      <p className="text-sm text-gray-600">Responsibilities of board committees</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 ml-auto" />
                  </a>
                  
                  <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300">
                    <FileText className="w-6 h-6 text-primary-500 mr-3" />
                    <div>
                      <h4 className="font-bold">Environmental & Social Policy</h4>
                      <p className="text-sm text-gray-600">Our commitment to sustainability and social responsibility</p>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact IR Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Investor Contact</h2>
            <p className="text-lg text-primary-100 mb-8">
              For investor inquiries, please contact our Investor Relations team.
            </p>
            <div className="bg-primary-700 rounded-xl p-8 inline-block">
              <p className="mb-2 text-primary-100">Email:</p>
              <p className="text-xl font-bold mb-4">investors@globaltechnocrats.com</p>
              <p className="mb-2 text-primary-100">Phone:</p>
              <p className="text-xl font-bold">+91 1234 567 890</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorRelationsPage;