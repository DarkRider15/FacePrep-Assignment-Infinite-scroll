import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../styles/Home.css';

const Home = ({ handleLogout }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadUsers();

    // Clean up
    return () => {
      setUsers([]);
      setLoading(false);
      setPage(1);
      setHasMore(true);
    };
  }, []);

  const loadUsers = () => {
    setLoading(true);

    // Replace the API URL with your preferred endpoint
    axios
      .get(`https://randomuser.me/api/?results=20&page=${page}`)
      .then((response) => {
        const newUsers = response.data.results;
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  const handleScroll = () => {
    if (!loading && hasMore && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadUsers();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <div className="grid-container">
      <h1 className="heading">Home Page</h1>

      <div className="grid">
        {users.map((user, index) => (
          <div key={index} className="grid-item">
            <img src={user.picture.thumbnail} alt="User" />
            <span>{`${user.name.first} ${user.name.last}`}</span>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Home;
