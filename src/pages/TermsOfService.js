import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-2">
        By accessing Mexausa, you agree to our Terms of Service. This includes consent to audits, consumer advocacy,
        and electronic communications. All legal disputes will be governed by California law and relevant federal statutes.
      </p>
      <p className="mb-2">
        Mexausa is not a law firm. We provide audit and consumer protection services only. For legal advice, consult an attorney.
      </p>
      <p className="mb-2">
        Data collected is used solely for audit processing and complaint filings. We do not sell or rent your personal info.
      </p>
      <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Mexausa. All rights reserved.</p>
    </div>
  );
};

export default TermsOfServicePage;
