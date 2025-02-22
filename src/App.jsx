import { useState } from "react";
import styles from "./App.module.css";
import { Chat } from "./components/Chat/Chat";
import { Controls } from "./components/Chat/Controls/Controls";


function App() {
const [messages, setMessages] = useState(MESSAGES);


  return (
    <div className={styles.App} >
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" alt="chat" />
        <h2 className={styles.Title}>IA Chatbot</h2>
      </header>
      <div className={styles.ChatContainer} >
        <Chat messages={messages} />
      </div>
      <Controls />
    </div>
  )
}

const MESSAGES = [
  {
    role: 'user',
    content:'Lorem test'
  },
  {
    role: 'assistant',
    content:'Lorem test2'
  },
  {
    role: 'user',
    content:'Lorem test'
  },
  {
    role: 'assistant',
    content:'Lorem test2'
  },
  {
    role: 'user',
    content:'Lorem test'
  },
  {
    role: 'assistant',
    content:'Lorem test2'
  }
];

export default App
