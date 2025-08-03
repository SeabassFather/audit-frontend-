import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParams } from 'react-router-dom';

const DynamicLegalPage = () => {
  const { docType } = useParams();
  const { language } = useLanguage();
  const [html, setHtml] = useState('');

  useEffect(() => {
    const fetchDoc = async () => {
      const res = await fetch(`http://localhost:3001/api/legal-documents?docType=${docType}&lang=${language}`);
      const data = await res.json();
      setHtml(data.html || '<p>Not found</p>');
    };
    fetchDoc();
  }, [docType, language]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default DynamicLegalPage;
