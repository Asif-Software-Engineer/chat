import { useEffect, useState } from "react";
// import axios from "axios";
import Chat from "./components/chat/Chat";
import { Login } from "./components/header/Login";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { SignUp } from "./components/header/SignUp";
import ProfileMenu from "./components/header/ProfileMenu";

function App() {
  const [sidebarWidth, setSidebarWidth] = useState("max-w-72");
  const [mainWidth, setMainWidth] = useState("w-full");
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(true);
  const [ loging, setLoging] = useState(() => {
    return localStorage.getItem('authToken') !== null;
  });
  const navigate = useNavigate();
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

  const toggleWidth = () => {
    setSidebarWidth(open ? "max-w-72" : "w-72");
    setMainWidth(open ? "ml-20" : "ml-0");
    setOpen(!open);
  };
// login & profile buttons show and hide
  // useEffect(() => {
  //   const token = localStorage.getItem('authToken');
  //   console.log('Token:', token)
  //   if (token) {
  //     setLoging(true);
  //     console.log('user is logged in');
  //   } else {
  //     console.log('user is not logged in');
  //   }
  // }, []);
  // const handleLogin = () => {
  //   localStorage.setItem('authToken', 'your-auth-token');
  //   setLoging(true);
  //   navigate('/profile');
  // };
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setLoging(false);
    navigate('/login');
  };

  return (
      <div className="flex">
        <div className={`${sidebarWidth} bg-gray`}>
          <div
            className={`fixed h-screen 
              ${open ? "w-60" : "w-20 bg-white"} 
              bg-gray`}
          >
            <div className="sidebar flex justify-between p-4">
              {/* <button className="p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="icon-lg mx-2.5 text-textsecond"
                >
                  <path
                    fill="currentColor"
                    d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                  ></path>
                </svg>
              </button> */}
              <button
                className="h-10 rounded-lg px-2 text-textsecond focus-visible:outline-0 hover:bg-hvrtxtscnd focus-visible:bg-hvrtxtscnd"
                title="Close Sidebar"
                onClick={toggleWidth }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="icon-xl-heavy"
                >
                  <path
                    fill="currentColor"
                    d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
                  ></path>
                </svg>
              </button>
              <button
                className="h-10 rounded-lg px-2 text-textsecond focus-visible:outline-0 hover:bg-hvrtxtscnd focus-visible:bg-hvrtxtscnd"
                title="New Chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="icon-xl-heavy"
                >
                  <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
                </svg>
              </button>
            </div>

            <div className="p-4">
              {open ? (
                <div className="w-full">
                  <a
                    className="flex mb-2 hover:bg-hvrtxtscnd rounded-[10px]"
                    href="#"
                  >
                    <div
                      className="flex justify-between px-3 py-2"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <img
                        src="../assets/images/gpt-icon.jpg"
                        alt=""
                        className="rounded-full w-8"
                      />
                       {open && <div className="pl-4 pr-24 pt-1">ChatGPT</div>}
                    
                    {isHovered && open && (
                      <div className="text-textsecond hover:text-hvrblk absolute ml-[10.5rem] pt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="icon-xl-heavy"
                        >
                          <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>
                        </svg>
                      </div>
                    )}
                    </div>
                  </a>
                  <div className="flex mb-2 p-3 hover:bg-hvrtxtscnd rounded-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon-md"
                    >
                      <path
                        fill="currentColor"
                        d="M6.75 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M6.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
                      ></path>
                    </svg>
                    <a href="#" className="px-5">
                      Explore GPTs
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={`${mainWidth} w-full table-cell bg-blue`}>
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
          <Header loging={loging} handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<ProfileMenu/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
