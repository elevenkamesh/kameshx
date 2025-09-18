import React, { useState } from "react";
import key from "../config";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);

    fetch(`${key.backend}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
        localStorage.setItem("token", data.data.token);
        alert("Login Successful");
        window.location.href = "/"; // Redirect to admin page  
      })
      .catch((error) => {
        console.error("Error:", error);
      });
};

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Login</h2>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: 8 }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: 8 }}
        />
      </div>
      <button type="submit" style={{ padding: "8px 16px" }}>
        Login
      </button>
    </form>
  );
};

export default LoginComponent;