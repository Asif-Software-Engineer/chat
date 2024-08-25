import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ProfileMenu = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  // const toggleMenu = () => {
  //   setOpen(!open);
  // }

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center space-x-2 px-8 py-4"
        // href="profile"
        onClick={() => setOpen(!open)}
      >
        <img
          src="../assets/images/profile.jpeg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm text-textsecond font-medium">User Name</span>
      </button>
      {open && (
        <div className="absolute right-0 m-2 w-[22rem] bg-white text-textsecond shadow-full font-semibold rounded-xl shadow-lg p-2">
          <a
            href="/profile"
            className="block p-4 text-sm hover:bg-gray rounded-lg"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 "
              >
                <path
                  fill="currentColor"
                  d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M10.968 14.002a1 1 0 0 1-.719 1.218C7.467 15.937 5.5 18.29 5.5 21a1 1 0 1 1-2 0c0-3.729 2.69-6.8 6.25-7.717a1 1 0 0 1 1.218.72"
                ></path>
                <path
                  fill="currentColor"
                  d="M17.25 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M17.25 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0"
                ></path>
              </svg>
              <p className="w-full pl-4">My GPTs</p>
            </div>
          </a>
          <a
            href="/profile"
            className="block p-4 text-sm hover:bg-gray rounded-lg"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0"
              >
                <path
                  fill="currentColor"
                  d="M10.663 6.387c.152-.096.337.023.337.203V8a1 1 0 1 0 2 0V6.59c0-.18.185-.3.337-.203a2.5 2.5 0 0 1-.357 4.413 1 1 0 0 1 .02.2v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 .02-.2 2.5 2.5 0 0 1-.357-4.413"
                ></path>
                <path
                  fill="currentColor"
                  d="M17.975 4.01A8 8 0 0 0 17.4 4H9.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C6 6.361 6 6.943 6 7.8v8.37c.313-.11.65-.17 1-.17h11V4.6c0-.297 0-.459-.01-.575l-.001-.014zM17.657 18H7a1 1 0 1 0 0 2h10.657a5.5 5.5 0 0 1 0-2M4 19V7.759c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C8.29 2 8.954 2 9.758 2h7.674c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 0 1 .874.874c.138.271.182.541.201.77.017.208.017.454.017.706V17a1 1 0 0 1-.078.386c-.476 1.14-.476 2.089 0 3.228A1 1 0 0 1 19 22H7a3 3 0 0 1-3-3"
                ></path>
              </svg>
              <p className="w-full pl-4">Cutomize ChatGPT</p>
            </div>
          </a>
          <a
            href="/profile"
            className="block p-4 text-sm hover:bg-gray rounded-lg"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0"
              >
                <path
                  fill="currentColor"
                  d="M11.568 3.5a1 1 0 0 0-.863.494l-.811 1.381A3 3 0 0 1 7.33 6.856l-1.596.013a1 1 0 0 0-.858.501l-.44.761a1 1 0 0 0-.003.992l.792 1.4a3 3 0 0 1 0 2.954l-.792 1.4a1 1 0 0 0 .004.992l.439.76a1 1 0 0 0 .858.502l1.596.013a3 3 0 0 1 2.564 1.48l.811 1.382a1 1 0 0 0 .863.494h.87a1 1 0 0 0 .862-.494l.812-1.381a3 3 0 0 1 2.563-1.481l1.596-.013a1 1 0 0 0 .859-.501l.439-.761a1 1 0 0 0 .004-.992l-.793-1.4a3 3 0 0 1 0-2.953l.793-1.401a1 1 0 0 0-.004-.992l-.439-.76a1 1 0 0 0-.859-.502l-1.596-.013a3 3 0 0 1-2.563-1.48L13.3 3.993a1 1 0 0 0-.862-.494zM8.98 2.981A3 3 0 0 1 11.568 1.5h.87a3 3 0 0 1 2.588 1.481l.81 1.382a1 1 0 0 0 .855.494l1.597.013a3 3 0 0 1 2.575 1.502l.44.76a3 3 0 0 1 .011 2.975l-.792 1.4a1 1 0 0 0 0 .985l.792 1.401a3 3 0 0 1-.012 2.974l-.439.761a3 3 0 0 1-2.575 1.503l-1.597.012a1 1 0 0 0-.854.494l-.811 1.382a3 3 0 0 1-2.588 1.481h-.87a3 3 0 0 1-2.588-1.481l-.811-1.382a1 1 0 0 0-.855-.494l-1.596-.012a3 3 0 0 1-2.576-1.503l-.439-.76a3 3 0 0 1-.012-2.975l.793-1.4a1 1 0 0 0 0-.985l-.793-1.4a3 3 0 0 1 .012-2.975l.44-.761A3 3 0 0 1 5.717 4.87l1.596-.013a1 1 0 0 0 .855-.494z"
                ></path>
                <path
                  fill="currentColor"
                  d="M12.003 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M8.502 12a3.5 3.5 0 1 1 7 .001 3.5 3.5 0 0 1-7-.001"
                ></path>
              </svg>
              <p className="w-full pl-4">Settings</p>
            </div>
          </a>
          <div
            role="sperator"
            aria-orientation="horizontal"
            className="mx-5 my-1 h-px bg-textsecond"
          ></div>
          <div
            role="sperator"
            aria-orientation="horizontal"
            className="mx-5 my-1 h-px bg-textsecond"
          ></div>
          <button
            // onClick={() => {
            //   handleLogout();
            // setOpen(false);
            // }}
            onClick={handleLogout}
            className="block w-full text-left p-4 text-sm hover:bg-gray rounded-lg"
          >
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0"
              >
                <path
                  fill="currentColor"
                  d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 1 1 0 2zm9.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H11a1 1 0 1 1 0-2h6.586l-2.293-2.293a1 1 0 0 1 0-1.414"
                ></path>
              </svg>
              <p className="w-full pl-4">Logout</p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
