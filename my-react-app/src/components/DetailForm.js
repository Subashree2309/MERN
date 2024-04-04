import React, { useState } from 'react';

function DetailForm({ addDetail }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email) return;
    const newDetail = {
      id: Date.now(),
      username,
      email
    };
    addDetail(newDetail);
    setUsername('');
    setEmail('');
  };

  return (
    <div>
      <h2>Add New Detail</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Add Detail</button>
      </form>
    </div>
  );
}

export default DetailForm;