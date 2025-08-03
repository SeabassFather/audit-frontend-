import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to AuditDNA</h1>
      <p className="text-lg mb-6">Elite AI-powered Consumer Audit Platform</p>
      <div className="space-y-4">
        <Link to="/login" className="block text-xl text-white bg-blue-600 px-4 py-2 rounded shadow hover:bg-blue-700 w-max">
           Launch Secure Portal
        </Link>
        <Link to="/upload" className="block text-lg text-blue-600 underline"> Upload Documents</Link>
        <Link to="/loan" className="block text-lg text-blue-600 underline"> Loan Application</Link>
        <Link to="/legal" className="block text-lg text-blue-600 underline"> Legal Disclosures</Link>
      </div>
    </div>
  );
}
export default HomePage;
