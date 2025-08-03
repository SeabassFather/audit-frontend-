import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UploadHistoryPage = () => {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const res = await axios.get('http://localhost:3002/api/upload/history');
        setUploads(res.data);
      } catch (err) {
        console.error('Failed to fetch upload history:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUploads();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Upload History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.thtd}>Filename</th>
              <th style={styles.thtd}>Date</th>
              <th style={styles.thtd}>S3 Link</th>
            </tr>
          </thead>
          <tbody>
            {uploads.map((upload) => (
              <tr key={upload._id}>
                <td style={styles.thtd}>{upload.filename}</td>
                <td style={styles.thtd}>
                  {new Date(upload.uploadedAt).toLocaleString()}
                </td>
                <td style={styles.thtd}>
                  <a
                    href={upload.s3Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View File
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '80px auto',
    padding: '30px',
    background: '#f4f4f4',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thtd: {
    border: '1px solid #ddd',
    padding: '8px',
  },
};

export default UploadHistoryPage;
