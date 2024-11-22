import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated API call
  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserSelect = (userId) => {
    const user = users.find(u => u.id === userId);
    fetchUserDetails(userId);
  };

  const fetchUserDetails = async (userId) => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const details = await response.json();
    setSelectedUser(details);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <div>
        <div>
          <h2>User List</h2>
          {users.map(user => (
            <button
              key={user.id}
              onClick={() => handleUserSelect(user.id)}
            >
              {user.name}
            </button>
          ))}
        </div>
        <div>
          <h2>Selected User Details</h2>
          {selectedUser && (
            <div>
              <p>Name: {selectedUser.name}</p>
              <p>Email: {selectedUser.email}</p>
              <p>Role: {selectedUser.role}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;