import React from 'react';
import { MessageCircle, MapPin, Briefcase, Calendar, DollarSign } from 'lucide-react';

export default function BhushanRecruitment() {
  const phoneNumber = '919945936560';

  const jobs = [
    {
      id: 1,
      title: 'OYO International Process',
      company: 'OYO',
      type: 'International Process',
      shift: 'Day & Night Available',
      location: 'Kolkata, West Bengal',
      salary: '₹26K CTC',
      interview: 'Tomorrow at 10:00 AM',
      training: 'After Selection from Monday',
    },
    {
      id: 2,
      title: 'AVRIDE Process',
      company: 'AVRIDE',
      type: 'International Process',
      shift: 'Day & Night Available',
      location: 'Kolkata, West Bengal',
      salary: '₹26K CTC',
      interview: 'Tomorrow at 10:00 AM',
      training: 'After Selection from Monday',
    },
    {
      id: 3,
      title: 'Domestic Voice Process',
      company: 'Domestic BPO',
      type: 'Customer Support',
      shift: 'Day & Night Available',
      location: 'Kolkata, West Bengal',
      salary: '₹26K CTC',
      interview: 'Tomorrow at 10:00 AM',
      training: 'After Selection from Monday',
    },
    {
      id: 4,
      title: 'Business Analyst',
      company: 'Wave Wire Solution',
      type: 'IT & Tech Support',
      shift: 'Day Shift',
      location: 'Kolkata, West Bengal',
      salary: '₹28K-35K CTC',
      interview: 'Walk-in Interview Available',
      training: 'Immediate Joining',
    },
    {
      id: 5,
      title: 'Customer Care Executive',
      company: 'Customer Support',
      type: 'Voice Process',
      shift: 'Night Shift',
      location: 'Kolkata, West Bengal',
      salary: '₹24K-26K CTC',
      interview: 'Tomorrow at 10:00 AM',
      training: 'After Selection from Monday',
    },
    {
      id: 6,
      title: 'Data Entry Specialist',
      company: 'Data Processing',
      type: 'Back Office',
      shift: 'Day Shift',
      location: 'Kolkata, West Bengal',
      salary: '₹20K-23K CTC',
      interview: 'Walk-in Interview',
      training: 'Immediate Joining',
    }
  ];

  const handleWhatsAppClick = (job) => {
    const message = `Hi! I'm interested in the *${job.title}* position.

📋 *Job Details:*
🏢 Company: ${job.company}
📍 Location: ${job.location}
💰 Salary: ${job.salary}
⏰ Interview: ${job.interview}
🎓 Training: ${job.training}
🕐 Shift: ${job.shift}

Please provide me more details about this position. I'm a fresher/experienced professional interested in this opportunity.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f1929 0%, #1a2847 100%)' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-opacity-80" style={{ backgroundColor: 'rgba(15, 25, 41, 0.9)' }}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-amber-400">B</span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">BHUSHAN</h1>
              <p className="text-amber-400 text-lg font-semibold">Talent Acquisition Specialist</p>
              <p className="text-gray-300 text-sm flex items-center gap-2 mt-1">
                <MapPin size={14} className="text-amber-400" />
                International & Domestic BPO Hiring | Kolkata
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            🚀 Multiple Job Openings Available
          </h2>
          <p className="text-2xl text-amber-400 font-semibold mb-3">
            Click on any job to apply via WhatsApp
          </p>
          <p className="text-lg text-gray-300">
            Immediate hiring | Walk-in interviews | Freshers & Experienced welcome
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="group rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
                border: '2px solid rgba(255, 193, 7, 0.4)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                  <p className="text-amber-400 text-lg font-bold">{job.company}</p>
                </div>

                {/* Details */}
                <div className="space-y-3 flex-grow mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-amber-400 rounded-full"></span>
                    <span className="text-gray-200 font-medium">{job.type}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-amber-400" />
                    <span className="text-gray-200 font-medium">{job.shift}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-amber-400" />
                    <span className="text-gray-200 font-medium">{job.location}</span>
                  </div>

                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 bg-opacity-20 border border-amber-400 rounded-lg p-3">
                    <p className="text-amber-300 font-bold text-lg">💰 {job.salary}</p>
                  </div>

                  <div className="text-sm text-gray-300 space-y-1">
                    <p><span className="text-amber-400 font-semibold">📅 Interview:</span> {job.interview}</p>
                    <p><span className="text-amber-400 font-semibold">🎓 Training:</span> {job.training}</p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsAppClick(job)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle size={24} />
                  Apply via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h3>
          <p className="text-lg text-amber-50 mb-6">
            Click on any job card above to send your inquiry directly to WhatsApp
          </p>
          <div className="flex items-center justify-center gap-3 text-white font-bold text-xl">
            <MessageCircle size={28} />
            <span>WhatsApp: +91 99459 36560</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 mt-16 py-12 bg-opacity-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <h4 className="text-amber-400 font-bold text-lg mb-3">📱 Contact</h4>
              <p className="text-gray-300 text-lg">+91 99459 36560</p>
            </div>
            <div>
              <h4 className="text-amber-400 font-bold text-lg mb-3">📍 Location</h4>
              <p className="text-gray-300 text-lg">Kolkata, West Bengal</p>
            </div>
            <div>
              <h4 className="text-amber-400 font-bold text-lg mb-3">🏢 Company</h4>
              <p className="text-gray-300 text-lg">Wave Wire Solution</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-slate-700">
            <p className="text-gray-400 text-sm">
              © 2024 BHUSHAN - Talent Acquisition Specialist | All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Apply now and get hired! Freshers & Experienced professionals welcome
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add Clock icon since lucide-react might not have it
const Clock = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);