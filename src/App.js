// import { useState } from "react";
// import axios from "axios";
import Sidebar from "./components/navbar/Sidebar";
import Chat from "./components/chat/Chat";
import { Login } from "./components/header/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { SignUp } from "./components/header/SignUp";

function App() {
  // const [message, setMessage] = useState("");
  // const [response, setResponse] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Sending message:", message);

  //   try {
  //     const res = await axios.post("http://localhost:3000/chat", { message: message });
  //     console.log("Server Response:", res.data);

  //     setResponse(res.data.reply);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setResponse("There was an error processing your request.");
  //   }
  // };

  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-72">
          <Sidebar />
        </div>
        <div className="flex-1 w-full table-cell bg-blue">
          {/* <form
          onSubmit={handleSubmit}
          className="inline-flex h-[full] w-[70%] mx-48"
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-hvrtxtscnd border border-2 rounded-[50px] p-4 w-full"
            placeholder="Message ChatGPT"
          ></textarea>
          <button type="submit" className="p-4">
            Submit
          </button>
        </form>
        <div>{response}</div> */}
          <Header />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
