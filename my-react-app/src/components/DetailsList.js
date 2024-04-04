import React, { useState } from 'react';

function DetailsList({ details, editDetail, deleteDetail }) {
  const [editId, setEditId] = useState(null);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  const handleEdit = (id, username, email) => {
    setEditId(id);
    setEditedUsername(username);
    setEditedEmail(email);
  };

  const handleSaveEdit = () => {
    editDetail(editId, { username: editedUsername, email: editedEmail });
    setEditId(null);
    setEditedUsername('');
    setEditedEmail('');
  };

  return (
    <div>
      <h2>Details List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {details.map(detail => (
            <tr key={detail.id}>
              <td>{editId === detail.id ? <input type="text" value={editedUsername} onChange={(e) => setEditedUsername(e.target.value)} /> : detail.username}</td>
              <td>{editId === detail.id ? <input type="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} /> : detail.email}</td>
              <td>
                {editId === detail.id ? (
                  <button onClick={handleSaveEdit}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(detail.id, detail.username, detail.email)}>Edit</button>
                    <button onClick={() => deleteDetail(detail.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailsList;