import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  //? using async/await to fetch data from API
  const getUsers = async () => {
    const response = await fetch("http://localhost:4000/user");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    // getUsers();

    fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className='text-red-500'>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default App;
