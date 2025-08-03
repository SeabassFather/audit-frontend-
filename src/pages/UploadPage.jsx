import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!email || !phone || files.length === 0) {
      setMessage('⚠️ Please enter your email, phone, and select files.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('phone', phone);
    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });

    try {
      const res = await axios.post('http://localhost:3002/api/upload', formData);
      setMessage(res.data.message || '✅ Files uploaded successfully!');
    } catch (err) {
      setMessage('❌ Upload failed. Try again.');
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem' }}>
      <h2>📤 Upload Documents</h2>
      <form onSubmit={handleUpload}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input
          type="tel"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br /><br />
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        /><br /><br />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default UploadPage;
