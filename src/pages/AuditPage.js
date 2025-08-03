import React, { useState } from 'react';
import axios from 'axios';

const AuditPage = () => {
  const [formData, setFormData] = useState({
    serviceType: 'mortgage',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    lenderName: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert('You must agree to the legal terms before continuing.');
      return;
    }

    try {
      // Replace with your actual backend API call
      await axios.post('/api/audits/create', formData);
      alert('Audit submitted successfully!');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Start Your Audit</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">

        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Property Address</label>
          <input
            name="propertyAddress"
            value={formData.propertyAddress}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Lender Name</label>
          <input
            name="lenderName"
            value={formData.lenderName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {/* ✅ LEGAL CONSENT CHECKBOX */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <label className="flex items-start space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mt-1"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData({ ...formData, agreeToTerms: e.target.checked })
              }
            />
            <span>
              I agree to the&nbsp;
              <a href="/privacy-policy" target="_blank" className="text-blue-600 underline">Privacy Policy</a>,&nbsp;
              <a href="/terms-of-service" target="_blank" className="text-blue-600 underline">Terms of Service</a>, and&nbsp;
              <a href="/consent-agreement" target="_blank" className="text-blue-600 underline">Consent to Contact</a>.
            </span>
          </label>
        </div>

        {/* ✅ SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={!formData.agreeToTerms}
          className={`mt-4 w-full py-2 px-4 rounded-lg font-bold transition-colors ${
            formData.agreeToTerms
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Submit Audit
        </button>
      </form>
    </div>
  );
};

export default AuditPage;
