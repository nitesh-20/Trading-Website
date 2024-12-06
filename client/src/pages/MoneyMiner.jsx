import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./MoneyMiner.css";

function MoneyMiner() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  // Scroll to the bottom of the chat history whenever it updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion(""); // Clear the input immediately

    // Add user's question to chat history
    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB5XF-6Evb4_2oB5e2Feajp7JJu1T14WNI`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      // Extract AI's response from the API response
      const aiResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";

      // Add AI's response to chat history
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }]);
    } catch (error) {
      console.error("Error generating answer:", error);
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: "Error: Unable to fetch response. Please try again." },
      ]);
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>MoneyMiner</h1>
      </header>

      {/* Chat History */}
      <div className="chat-history" ref={chatContainerRef}>
        {chatHistory.length === 0 ? (
          <p className="welcome-message">Welcome to MoneyMiner! Ask me anything.</p>
        ) : (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`chat-bubble ${chat.type === "question" ? "question" : "answer"}`}
            >
              {chat.content}
            </div>
          ))
        )}
        {generatingAnswer && <div className="chat-bubble answer">Typing...</div>}
      </div>

      {/* Input Form */}
      <form className="chat-input-form" onSubmit={generateAnswer}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows="2"
          disabled={generatingAnswer}
        ></textarea>
        <button type="submit" disabled={generatingAnswer}>
          Send
        </button>
      </form>
    </div>
  );
}

export default MoneyMiner;
