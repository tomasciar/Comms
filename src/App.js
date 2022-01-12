import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import Login from "./components/Login";

// ChatEngine settings
const App = () => {
  // If user is not logged in, redirect to login page
  if (!localStorage.getItem("username")) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID="099d4ba3-0f22-4091-ace2-9b9f747d7adb"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
    />
  );
};

// Export for use in index.js
export default App;
