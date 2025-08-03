import React, { useState } from 'react';
import axios from 'axios';
import './UploadPage.css';

const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => setFiles(e.target.files);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let file of files) formData.append('files', file);
    formData.append('email', email);
    formData.append('phone', phone);

    try {
      const res = await axios.post('http://localhost:3002/api/upload', formData);
      setMessage('✅ Upload successful!');
    } catch (err) {
      console.error(err);
      setMessage('❌ Upload failed. Please try again.');
    }
  };

  return (
    <div className="upload-container">
      <h2>📤 Upload Documents</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="file" multiple onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {message && <p className="upload-message">{message}</p>}
    </div>
  );
};

export default UploadPage;
