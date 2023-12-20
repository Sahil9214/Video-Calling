import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleJoinRoom = () => {
    navigate(`/room/${value}`);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="enter your room code"
      />
      <button onClick={handleJoinRoom}>join</button>{" "}
    </div>
  );
};

export default Home;
