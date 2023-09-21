import React, { useEffect, useState } from 'react';
import './Search.css';
import { Data } from '../Data';

const Search = () => {
  const [data, setData] = useState('');
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (data.trim() === '') {
      // If the search input is empty, show all data
      setSearch(Data);
    } else {
      // Filter data based on the search input
      const res = Data.filter((item) =>
        item.first_name.toLowerCase().includes(data.toLowerCase())
      );
      setSearch(res);
    }
  }, [data]);

  return (
    <>
      <div className="container">
        <h3 style={{textAlign:"center",fontSize:"1.3rem"}}>  Search List</h3>
        <div style={{ textAlign: 'center' }}>
          <input
            type="text"
            placeholder="Enter Your Search Here"
            onChange={(e) => setData(e.target.value)}
          />
        </div>

        {search.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Result not found</p>
        ) : (
          <table id="customers">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Ip Address</th>
              </tr>
            </thead>
            <tbody>
              {search.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.ip_address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Search;
