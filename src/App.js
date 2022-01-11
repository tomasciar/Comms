import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";

// ChatEngine settings
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="099d4ba3-0f22-4091-ace2-9b9f747d7adb"
      userName="master"
      userSecret="sillygoose"
    />
  );
};

export default App;
