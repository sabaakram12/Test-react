import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportViewer = ({ companyId, role }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get(`/api/reports`, { params: { companyId, role } })
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
      });
  }, [companyId, role]);

  return (
    <div>
      <h2>Reports</h2>
      {reports.map(report => (
        <div key={report.id}>
          <h3>{report.title}</h3>
          <p>{report.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportViewer;
