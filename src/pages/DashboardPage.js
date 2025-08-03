import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">📊 Client Dashboard</h1>
      <p className="text-gray-700 mb-8">Track your submitted audits, document uploads, and case progress.</p>

      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Recent Audits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Service:</strong> Mortgage Audit</p>
            <p><strong>Status:</strong> Under Review</p>
            <p><strong>Submitted:</strong> July 12, 2025</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>Service:</strong> Utility Bill Review</p>
            <p><strong>Status:</strong> Awaiting Docs</p>
            <p><strong>Submitted:</strong> July 11, 2025</p>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          For assistance, contact <strong>support@mexausa.com</strong> or call <strong>1-844-853-9300</strong>.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
