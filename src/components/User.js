import { useEffect, useState } from "react";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/ErShubham4u");
    const json = await data.json();
    setUserInfo(json);
    console.log(json);
  };

  const { name, location, login, avatar_url } = userInfo;

  return (
    <div className="user-card">
      <img className="photo" src={avatar_url} alt="UserPhoto"/>
      <h1>Name : {name}</h1>
      <h2>Location : {location}</h2>
      <h3>Contact : {login}</h3>
    </div>
  );
};

export default User;
