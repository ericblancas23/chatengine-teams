import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => (
  <ChatEngine
    height="100vh"
    projectID="579aeb99-2657-4d41-ae39-839b639c4b4a"
    userName="ericb"
    userSecret="ocean"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  />
);

export default App;
