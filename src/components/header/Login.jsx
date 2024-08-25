import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === storedUser.email &&
      input.password === storedUser.password
    ) {
      login(storedUser);
      navigate("/");
    } else {
      alert("wrong Email or Password");
    }
  };

  return (
    <div className="w-full rounded-lg flex flex-col justify-center align-center m-auto bg-white pb-8 text-textsecond">
      <div className="flex flex-col justify-center align-center w-full">
        <img
          src="../assets/images/gpt-icon.jpg"
          alt=""
          className="flex align-center justify-center mx-auto rounded-full w-12"
        />
        <div className="flex align-center justify-center text-3xl font-bold mt-16 p-10">
          Login to your Account
        </div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mt-18 flex flex-col gap-y-8">
          <div className="flex flex-col justify-center align-center">
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                })
              }
              type="email"
              className="mx-auto w-[320px] h-12 bg-white border border-2 border-hvrtxtscnd focus:border-green rounded-xl p-4"
              placeholder="Email Address*"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center align-center mt-4">
          <input
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({
                ...input,
                [e.target.name]: e.target.value,
              })
            }
            type="password"
            className="mx-auto w-[320px] h-12 bg-white border border-2 border-hvrtxtscnd focus:border-green rounded-xl p-4"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="flex justify-center align-center gap-x-20 m-6">
          <button
            type="submit"
            className="flex justify-center align-center w-[320px] h-12 hover:bg-green text-white bg-green rounded-xl font-[19px] font-bold cursor-pointer p-3"
          >
            Continue
          </button>
        </div>
      </form>
      <p className="text-center mb-0">
        Don't have an account?
        <Link to="/signup" className="font-bold pl-4 text-green ">
          Sign Up
        </Link>
      </p>
      <div className="flex flex-col align-center justify-center items-center w-[320px] my-6 mx-auto">
        <hr className="w-full m-6" />
        <p className="bg-white px-4 -mt-9">OR</p>
      </div>
      <div className="flex flex-col align-center justify-center items-center">
        <div className="flex py-4 border border-2 border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl cursor-pointer bg-white hover:bg-hvrtxtscnd">
          <img
            src="../assets/images/google.png"
            alt=""
            className="w-[20px] h-[20px] mx-4 mt-1"
          />
          <p>Continue with Google</p>
        </div>
        <div className="flex py-4 border border-2 border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl my-2 cursor-pointer bg-white hover:bg-hvrtxtscnd">
          <img
            src="../assets/images/microsoft.png"
            alt=""
            className="w-[20px] h-[20px] mx-4 mt-1"
          />
          <p>Continue with Microsoft Account</p>
        </div>
        <div className="flex py-4 border border-2 border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl cursor-pointer bg-white hover:bg-hvrtxtscnd">
          <img
            src="../assets/images/apple.png"
            alt=""
            className="w-[20px] h-[25px] mx-4"
          />
          <p>Continue with Apple</p>
        </div>
      </div>
      <footer className="mx-auto p-4 mt-24 text-green">
        <a href="https://openai.com/policies/terms-of-use">Terms of Use</a>
        <span className="leading-loose border mx-4"></span>
        <a href="https://openai.com/policies/privacy-policy">Privacy Policy</a>
      </footer>
    </div>
  );
};
