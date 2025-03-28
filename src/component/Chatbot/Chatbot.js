import React, { useState } from "react";
import "./Contact2.css";
import Groq from 'groq-sdk';
import { useEffect, useRef } from "react";


const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});



const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() =>{
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages] );

  const sendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message
    // setMessages([...messages, { text: input, sender: "user" }]);
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // Simulate chatbot response (replace this with API call)
    // setTimeout(() => {
    //   setMessages((prev) => [
    //     ...prev,
    //     { text: "This is a chatbot response!", sender: "bot" },
    //   ]);
    // }, 1000);



    try {
      // Call the chatbot API (replace with your actual API request)
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
        model: "llama3-8b-8192",
      });
  
      // Extract chatbot response
      const responseText =
        chatCompletion.choices?.[0]?.message?.content || "No response from chatbot";
  
      // Add chatbot response to chat
      setMessages((prev) => [...prev, { text: responseText, sender: "bot" }]);
    }catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unable to get response from chatbot.", sender: "bot" },
      ]);
    }

  };

  return (
    <section className="Contact" id="chatbot">
      <div className="container top">
        <div className="heading text-center">
          <h4>CHATBOT</h4>
          <h1>Ask Me Anything</h1>
        </div>

        <div className="content d_flex">
          <div className="right box_shadow">
              <div className="btn_shadow text-center scrollclass">
                {messages.map((msg, index) => (
                  <div key={index} className={`${msg.sender === "user" ? "questions" : "replies"}`} ref={messagesEndRef}>
                    <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                  </div>
                ))}
              </div>
              <div className="text-center input">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  style={{textAlign: "center"}}
                />
                <button className="btn_shadow" onClick={sendMessage}>
                  ASK <i className="fa fa-long-arrow-right"></i>
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
