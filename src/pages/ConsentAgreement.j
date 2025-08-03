import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsentAgreement = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/legal-documents?docType=consent&lang=en')
      .then(res => setContent(res.data.htmlContent))
      .catch(() => setError('Could not load Consent Agreement'));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Consent to Contact & Data Use Agreement</h1>
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default ConsentAgreement;
