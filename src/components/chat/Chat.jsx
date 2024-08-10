import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 7 * 24)}px`;
    }
  }, [input]);

  const sendMessage = async () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      console.log("User message added:", input);
      const userMessage = input;
      setInput("");

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/davinci-codex/completions",
          {
            prompt: userMessage,
            max_tokens: 50,
            n: 1,
            stop: null,
            temperature: 0.9,
          },
          {
            headers: {
              Authorization: `Bearer sk-eWxxWdHnahHBz_PtcZBE0uI3L5Hybvd9JZ9eFsDNFNT3BlbkFJHBTe688X4Y72e_8BcPpsAWXBkyi4Q09H3WEEXk3wwA`,
              "Content-Type": "application/json",
            },
          }
        );

        const botMessage = response.data.choices[0].text.trim();
        console.log("Bot response received:", botMessage);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botMessage },
        ]);
      } catch (error) {
        console.error("Error while fetching bot response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, something went wrong." },
        ]);
      }
    }
  };

  return (
    <div className="flex flex-col w-full justify-center align-center bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: "80vh" }}>
      <div className="flex-1 p-4 overflow-y-auto" style={{ height: "300px" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 py-2 px-4 rounded-lg ${
              message.sender === "bot"
                ? "bg-gray"
                : "bg-hvrblk text-white self-end"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 sm:left-72 right-0 flex flex-col justify-center bg-white">
        <div className="mx-auto px-4 py-2 bg-gray w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] inline-flex rounded-full items-center">
          <button
            className="h-8 w-8 rounded-lg text-textsecond focus-visible:outline-black"
            aria-disabled="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
              ></path>
            </svg>
          </button>
          <textarea
            ref={textareaRef}
            className="flex-1 py-2 px-4 w-[60%] bg-gray rounded-xl "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? sendMessage() : null)}
            placeholder="Type your message..."
            rows="1"
            style={{ maxHeight: "168px" }}
          />
          <button
            className="p-2 mt-2 ml-4 h-full bg-hvrblk text-white rounded-full"
            onClick={sendMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 32 32"
              className="icon-2xl"
            >
              <path
                fill="currentColor"
                d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
              ></path>
            </svg>
          </button>
        </div>
        <p className="flex items-center justify-center text-textsecond p-2 text-xs sm:text-sm md:text-base">
          ChatGPT can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default Chat;
