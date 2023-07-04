import './App.css';
import './normalize.css';
import chatgptlogo from './ChatGPT.svg';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      user: 'gpt',
      message: 'How can I help you today',
    },
    {
      user: 'me',
      message: 'I want to use Chat GPT!',
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setChatLog([...chatLog, { user: 'me', message: input }]);
    setInput('');
  };

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+ </span>New Chat
        </div>
      </aside>

      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((chat, index) => {
            return (
              <div
                className={`chat-message ${chat.user === 'gpt' && 'chatgpt'}`}
              >
                <div className="chat-message-center">
                  <div className={`avatar ${chat.user === 'gpt' && 'chatgpt'}`}>
                    {chat.user === 'gpt' && (
                      <img
                        className="avatar_img"
                        src={chatgptlogo}
                        alt="chatgpt"
                      />
                    )}
                  </div>
                  <div className="message">{chat.message}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea"
              rows="1"
              placeholder="Type your message here"
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
