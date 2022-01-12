import { useState } from "react";
import axios from "axios";

// Login function for multiple simultaneous users
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Authenticate a user after login form submission
    const authObject = {
      "Project-ID": "099d4ba3-0f22-4091-ace2-9b9f747d7adb",
      "User-Name": username,
      "User-Secret": password
    };

    try {
      // Login on success
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject
      });

      // Save user settings in the browser
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      // Error message if credentials don't match current user
      setError("Invalid credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Comms</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Enter username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Enter password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
