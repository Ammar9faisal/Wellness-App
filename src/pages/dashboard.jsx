import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// DIRECTLY USING API KEY HERE
const genAI = new GoogleGenerativeAI("AIzaSyBaG5TftGuhPkqVEr7bGCEhj438se6ZxNI"); // Make sure this is your valid key

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { text: input, sender: "user" }]);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(input);
      const response = await result.response.text();

      // Add AI response to chat
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { text: "Error retrieving response. Try again.", sender: "bot" }]);
    }

    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", color: "white" }}>
      <h1>Gemini AI Chatbot</h1>
      <div
        style={{
          height: "400px",
          overflowY: "scroll",
          border: "1px solid gray",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f9f9f9",
          color: "black",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <p
              style={{
                background: msg.sender === "user" ? "#007bff" : "#ddd",
                color: msg.sender === "user" ? "white" : "black",
                padding: "8px",
                borderRadius: "8px",
                display: "inline-block",
                maxWidth: "80%",
              }}
            >
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "80%", padding: "10px", fontSize: "16px" }}
      />
      <button onClick={sendMessage} style={{ padding: "10px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default Dashboard;