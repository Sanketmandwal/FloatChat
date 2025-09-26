import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Ocean",
      role: "Lead Oceanographer",
      email: "sarah.ocean@floatchat.org",
      expertise: "ARGO Data Analysis, Marine Physics"
    },
    {
      name: "Alex Maritime",
      role: "AI Systems Engineer",
      email: "alex.maritime@floatchat.org",
      expertise: "Machine Learning, Data Visualization"
    },
    {
      name: "Maya Current",
      role: "Research Coordinator",
      email: "maya.current@floatchat.org",
      expertise: "Project Management, Stakeholder Relations"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'collaboration', label: 'Research Collaboration' },
    { value: 'data', label: 'Data Access Request' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <Header />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mt-10 text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about ARGO data, need technical support, or want to collaborate on ocean research? 
            We're here to help you navigate the depths of oceanographic data discovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-sky-500/20 p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center mr-3">
                  📧
                </span>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-300"
                      placeholder="University, Institute, or Company"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-300"
                    >
                      {inquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <div className="flex items-center text-green-300">
                      <span className="mr-2">✅</span>
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-sky-500/20 p-6 shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center mr-3">
                  📍
                </span>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    📧
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Email</p>
                    <p className="text-sky-400">contact@floatchat.org</p>
                    <p className="text-sky-400">support@floatchat.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    🏢
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Office</p>
                    <p className="text-slate-400 text-sm">
                      Ocean Research Institute<br />
                      Marine Sciences Building<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-sky-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    🕒
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">Response Time</p>
                    <p className="text-slate-400 text-sm">
                      We typically respond within<br />
                      24 hours on business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
           

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Contact;