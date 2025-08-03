import React, { useState } from 'react';

const ConsumerRights = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      title: "Consumer Protection Overview",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-4">🛡️ YOUR CONSUMER RIGHTS ARE PROTECTED</h3>
            <p className="text-green-700">
              MEXAUSA operates under strict federal and state consumer protection laws. We are licensed, bonded, and committed to complete transparency in all our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-2">📋 NMLS Licensed</h4>
              <p className="text-blue-700 text-sm">License #337526 - Regulated by state and federal authorities</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-purple-800 mb-2">💰 No Hidden Fees</h4>
              <p className="text-purple-700 text-sm">All fees disclosed upfront - no surprises ever</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-orange-800 mb-2">⚖️ CFPB Compliant</h4>
              <p className="text-orange-700 text-sm">Full compliance with Consumer Financial Protection Bureau</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-bold text-indigo-800 mb-2">🔒 Data Protection</h4>
              <p className="text-indigo-700 text-sm">Bank-level security for all your information</p>
            </div>
          </div>
        </div>
      )
    },
    rights: {
      title: "Your Federal Rights",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-800 mb-3">🏠 RESPA - Real Estate Settlement</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Right to know all settlement costs</li>
              <li>Right to shop for settlement services</li>
              <li>Protection from kickbacks</li>
              <li>Escrow account analysis rights</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-800 mb-3">💰 TILA - Truth in Lending</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Know true cost of credit</li>
              <li>Cancel certain loans</li>
              <li>APR disclosure accuracy</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-800 mb-3">💳 FCBA - Fair Credit Billing</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Dispute billing errors</li>
              <li>Withhold payment on disputed charges</li>
              <li>Unauthorized charge protections</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-gray-800 mb-3">📞 FDCPA - Debt Collection</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Protection from abusive collections</li>
              <li>Right to dispute and verify debts</li>
              <li>Freedom from harassment</li>
            </ul>
          </div>
        </div>
      )
    },
    cfpb: {
      title: "CFPB Complaint Filing",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">⚖️ Consumer Financial Protection Bureau</h3>
