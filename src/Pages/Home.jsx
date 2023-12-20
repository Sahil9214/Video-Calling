import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleJoinRoom = () => {
    navigate(`/room/${value}`);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Optional: Adjust the height as needed
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Optional: If you want to stack input and button vertically
          alignItems: "center",

          padding: "20px", // Optional: Add padding for better appearance
        }}
      >
        <input
          style={{
            padding: "15px 40px",
            borderRadius: "20px",
            border:"none"
          }}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="enter your room code"
        />
        <button style={{
          padding:"8px 20px",
          fontSize:"24px",
          color:"#fff",
          fontWeight:"700",
          border:"none",
          borderRadius:"30px",
          backgroundColor:"green"
        }} onClick={handleJoinRoom}>join</button>{" "}
      </div>
    </div>
  );
};

export default Home;
