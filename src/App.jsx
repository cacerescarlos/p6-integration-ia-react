import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App} >
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" alt="chat" />
        <h2 className={styles.Title}>IA Chatbot</h2>
      </header>
      <div className={styles.ChatContainer} >

      </div>
    </div>
  )
}

export default App
