import React, { useState } from 'react';
import axios from 'axios';

const QRGeneratorPage = () => {
  const [formData, setFormData] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/qr/generate', { data: formData });
      setQrCode(res.data.qrCode);
    } catch (err) {
      console.error('QR generation error:', err);
      alert('Error generating QR code. Please try again.');
    }
  };

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h2>📲 QR Code Generator</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <input
          type="text"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          placeholder="Enter a link, text, or tracking ID..."
          required
          style={{ width: '80%', padding: '0.5rem', fontSize: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>Generate</button>
      </form>

      {qrCode && (
        <div style={{ marginTop: '2rem' }}>
          <h3>✅ QR Code:</h3>
          <img src={qrCode} alt="Generated QR Code" style={{ border: '1px solid #ccc', padding: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default QRGeneratorPage;
