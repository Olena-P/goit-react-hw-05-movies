import React from "react";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            color: "#333",
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          Page Not Found
        </h1>
      </div>
    </>
  );
};

export default NotFound;
