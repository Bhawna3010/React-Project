import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUsers(data)});
  }, []);

  return (
    <div>
      <h1>User Data</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.id}</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;