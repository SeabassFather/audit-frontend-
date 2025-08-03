import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <div className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-16 px-6 rounded-xl shadow-xl text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Welcome to Mexausa</h1>
          <p className="text-lg font-light">
            Trusted consumer protection audits for mortgage, insurance, telecom, and utility services. We fight for your rights — in your language.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Offer</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✅ Mortgage & Credit Report Audits</li>
            <li>✅ Insurance Overcharge Refunds</li>
            <li>✅ Utility Billing Corrections</li>
            <li>✅ Mobile & Internet Service Disputes</li>
            <li>✅ Multilingual Legal Support (EN/ES/...)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
