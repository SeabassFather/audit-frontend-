import React, { useState } from 'react';

export default function App() {
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showAuditModal, setShowAuditModal] = useState(false);

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f1f5f9'}}>
      <div style={{backgroundColor: '#2d3748', padding: '40px', textAlign: 'center'}}>
        <div style={{width: '80px', height: '80px', backgroundColor: '#3b82f6', borderRadius: '40px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px'}}>🧬</div>
        <h1 style={{fontSize: '36px', fontWeight: 'bold', color: '#3b82f6', margin: '0 0 10px 0'}}>AuditDNA Platform</h1>
        <h2 style={{fontSize: '20px', color: '#94a3b8', margin: '0 0 20px 0'}}>Consumer Protection Platform</h2>
        <div style={{backgroundColor: '#10b981', padding: '12px 25px', borderRadius: '30px', display: 'inline-block', color: 'white', fontWeight: 'bold'}}>🎯 DEPLOYED & OPERATIONAL</div>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'white', padding: '15px'}}>
        <button onClick={() => setShowAuditModal(true)} style={{background: 'none', border: 'none', color: '#475569', fontWeight: '600', cursor: 'pointer'}}>Submit Audit</button>
        <button onClick={() => alert('Track Progress Active!')} style={{background: 'none', border: 'none', color: '#475569', fontWeight: '600', cursor: 'pointer'}}>Track Progress</button>
        <button onClick={() => setShowPartnerModal(true)} style={{backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer'}}>PARTNER ACCESS</button>
        <button onClick={() => alert('Legal Documentation Available!')} style={{background: 'none', border: 'none', color: '#475569', fontWeight: '600', cursor: 'pointer'}}>Legal</button>
      </div>

      <div style={{padding: '30px', textAlign: 'center', backgroundColor: 'white'}}>
        <h1 style={{fontSize: '28px', fontWeight: 'bold', color: '#059669', marginBottom: '15px'}}>🎉 AUDITDNA IS LIVE! 🎉</h1>
        <p style={{fontSize: '18px', color: '#64748b', marginBottom: '30px'}}>Your consumer protection platform is now operational!</p>
        <button onClick={() => alert('🚀 AUDITDNA IS LIVE!')} style={{backgroundColor: '#10b981', color: 'white', border: 'none', padding: '20px 40px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer'}}>🚀 PLATFORM IS LIVE! 🚀</button>
      </div>

      {showPartnerModal && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}}>
          <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '30px', width: '90%', maxWidth: '500px'}}>
            <h2 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e293b', textAlign: 'center', marginBottom: '20px'}}>🤝 Partner Access</h2>
            <div style={{fontSize: '16px', color: '#1e293b', lineHeight: '1.6'}}>✅ All modules operational<br/>✅ Professional licensing verified<br/>✅ Complete regulatory compliance</div>
            <button onClick={() => setShowPartnerModal(false)} style={{backgroundColor: '#1e293b', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px'}}>Close</button>
          </div>
        </div>
      )}

      {showAuditModal && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000}}>
          <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '30px', width: '90%', maxWidth: '500px'}}>
            <h2 style={{fontSize: '24px', fontWeight: 'bold', color: '#1e293b', textAlign: 'center', marginBottom: '20px'}}>📋 Audit System</h2>
            <div style={{fontSize: '16px', color: '#1e293b', lineHeight: '1.6'}}>🎯 AuditDNA is LIVE with:<br/><br/>• AI Validation System<br/>• Complete regulatory compliance<br/>• Professional partner network</div>
            <button onClick={() => setShowAuditModal(false)} style={{backgroundColor: '#1e293b', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px'}}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}