import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const teamMembers = [
    {
      name: 'Saul Garcia',
      role: 'President',
      email: 'saul@financelend.me',
      phone: '1-844-853-9300',
      license: 'NMLS #337526',
      initials: 'SG'
    },
    {
      name: 'Florencio Marquez',
      role: 'Account Executive',
      email: 'florencio@financelend.me',
      phone: '1-844-853-9300',
      license: 'Licensed Professional',
      initials: 'FM'
    },
    {
      name: 'Osvaldo Gutierrez',
      role: 'Operations Manager',
      email: 'osvaldo@financelend.me',
      phone: '1-844-853-9300',
      license: 'Operations Specialist',
      initials: 'OG'
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact MEXAUSA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about mortgage recovery? Our licensed experts are here to help. 
            Contact us anytime for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-blue-600 font-bold text-lg">1-844-853-9300</p>
                    <p className="text-sm text-gray-600">Mon-Fri 8AM-6PM CST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-blue-600">saul@financelend.me</p>
                    <p className="text-sm text-gray-600">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <button 
                      onClick={() => window.open('https://wa.me/18448539300')}
                      className="text-blue-600 hover:underline"
                    >
                      Chat with us instantly
                    </button>
                    <p className="text-sm text-gray-600">Real-time support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Contact */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Our Expert Team</h3>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{member.initials}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{member.name}</h4>
                        <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                        <p className="text-xs text-gray-600">{member.license}</p>
                        <div className="mt-2 space-x-2">
                          <button
                            onClick={() => window.open(`tel:${member.phone}`)}
                            className="text-xs bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded"
                          >
                            Call
                          </button>
                          <button
                            onClick={() => window.open(`mailto:${member.email}`)}
                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
                          >
                            Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Monday - Friday:</span>
                  <span className="font-medium text-blue-900">8:00 AM - 6:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Saturday:</span>
                  <span className="font-medium text-blue-900">9:00 AM - 2:00 PM CST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Sunday:</span>
                  <span className="font-medium text-blue-900">Closed</span>
                </div>
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <p className="text-blue-700 text-xs">
                    <strong>Emergency Support:</strong> Call 1-844-853-9300 anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-red-800 mb-2">Urgent Mortgage Issues?</h3>
            <p className="text-red-700 mb-4">
              Facing foreclosure or urgent mortgage problems? Call immediately for priority assistance.
            </p>
            <button
              onClick={() => window.open('tel:1-844-853-9300')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              🚨 Emergency Hotline: 1-844-853-9300
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;