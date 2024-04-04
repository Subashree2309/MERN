import React, { useState, useEffect } from 'react';
import DetailsList from './components/DetailsList';
import DetailForm from './components/DetailForm';
import './App.css';

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // Mock data for initial rendering
    const initialData = [
      { id: 1, username: 'JohnDoe', email: 'john.doe@example.com' },
      { id: 2, username: 'JaneSmith', email: 'jane.smith@example.com' }
    ];
    setDetails(initialData);
  }, []);

  const addDetail = (newDetail) => {
    setDetails([...details, newDetail]);
  };

  const editDetail = (id, updatedDetail) => {
    const updatedDetails = details.map(detail => {
      if (detail.id === id) {
        return { ...detail, ...updatedDetail };
      }
      return detail;
    });
    setDetails(updatedDetails);
  };

  const deleteDetail = (id) => {
    const updatedDetails = details.filter(detail => detail.id !== id);
    setDetails(updatedDetails);
  };

  return (
    <div className="container">
      <h1>User Details</h1>
      <DetailForm addDetail={addDetail} />
      <DetailsList details={details} editDetail={editDetail} deleteDetail={deleteDetail} />
    </div>
  );
}

export default App;