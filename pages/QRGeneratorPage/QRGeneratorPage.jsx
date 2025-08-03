import React, { useState } from 'react';
import axios from 'axios';

const QRGeneratorPage = () => {
  const [text, setText] = useState('');
  const [qrImage, setQrImage] = useState(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/qr/generate', { text });
      setQrImage(response.data.qrCode);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to generate QR code. Check server.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for QR code"
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleGenerate} style={{ padding: '0.5rem 1rem' }}>
        Generate QR
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {qrImage && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Generated QR Code:</h3>
          <img src={qrImage} alt="QR Code" />
        </div>
      )}
    </div>
  );
};

export default QRGeneratorPage;
