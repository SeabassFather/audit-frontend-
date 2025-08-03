import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to AuditDNA</h1>
        <p className="text-lg">Elite Consumer Audit Platform</p>
      </header>

      <main className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        <Link to="/dashboard" className="block p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">📊 Dashboard</h2>
          <p className="text-sm text-gray-600">View audit reports, insights, and activity.</p>
        </Link>
        <Link to="/upload" className="block p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">📁 Upload Documents</h2>
          <p className="text-sm text-gray-600">Submit financial records for analysis.</p>
        </Link>
        <Link to="/loan-form" className="block p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">📝 Loan Application</h2>
          <p className="text-sm text-gray-600">Apply for a consumer or business loan.</p>
        </Link>
        <Link to="/legal" className="block p-6 border rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">⚖️ Legal Disclosures</h2>
          <p className="text-sm text-gray-600">View our terms, privacy, and compliance info.</p>
        </Link>
      </main>

      <footer className="mt-12 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} AuditDNA. All rights reserved.
      </footer>
    </div>
  );
}
