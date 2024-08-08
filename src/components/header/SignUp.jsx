// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export const SignUp = () => {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//   });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const loggeduser = JSON.parse(localStorage.getItem("user"));
//     if (
//       input.email === loggeduser.email &&
//       input.password === loggeduser.password
//     ) {
//       localStorage.setItem("loggedin", true);
//       navigate("/");
//     } else {
//       alert("wrong Email or Password");
//     }
//   };

//   return (
//     <div className="w-screen h-screen rounded-lg flex flex-col justify-center align-center m-auto bg-white pb-8 text-textsecond">
//       <div className="flex flex-col justify-center align-center w-full mb-auto">
//         <img
//           src="../assets/images/gpt-icon.jpg"
//           alt=""
//           className="flex align-center justify-center mx-auto rounded-full w-12"
//         />
//         <div className="flex align-center justify-center text-3xl font-bold mt-auto p-10">
//           Create your Account
//         </div>
//       </div>
//       <form onSubmit={handleLogin}>
//         <div className="flex flex-col gap-y-8">
//           <div className="flex flex-col justify-center align-center">
//             <input
//               name="email"
//               value={input.email}
//               onChange={(e) =>
//                 setInput({
//                   ...input,
//                   [e.target.name]: e.target.value,
//                 })
//               }
//               type="email"
//               className="mx-auto w-[320px] h-12 bg-white border border-2 border-hvrtxtscnd focus:border-green rounded-xl p-4"
//               placeholder="Email Address*"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col justify-center align-center mt-4">
//           <input
//             name="password"
//             value={input.password}
//             onChange={(e) =>
//               setInput({
//                 ...input,
//                 [e.target.name]: e.target.value,
//               })
//             }
//             type="password"
//             className="mx-auto w-[320px] h-12 bg-white border border-2 border-hvrtxtscnd focus:border-green rounded-xl p-4"
//             placeholder="Enter Your Password"
//           />
//         </div>
//         <div className="flex justify-center align-center gap-x-20 m-6">
//           <button
//             type="submit"
//             className="flex justify-center align-center w-[320px] h-12 hover:bg-green text-white bg-green rounded-xl font-[19px] font-bold cursor-pointer p-3"
//           >
//             Continue
//           </button>
//         </div>
//       </form>
//       <p className="text-center mb-0">
//         Already have an account?
//         <Link to="/login" className="font-bold pl-4 text-green ">
//           Login
//         </Link>
//       </p>
//       <div className="flex flex-col align-center justify-center items-center w-[320px] my-6 mx-auto">
//         <hr className="w-full m-6" />
//         <p className="bg-white px-4 -mt-9">OR</p>
//       </div>
//       <div className="flex flex-col align-center justify-center items-center">
//         <div className="flex py-4 border border-2 border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl cursor-pointer bg-white hover:bg-hvrtxtscnd">
//           <img
//             src="../assets/images/google.png"
//             alt=""
//             className="w-[20px] h-[20px] mx-4 mt-1"
//           />
//           <p>Continue with Google</p>
//         </div>
//         <div className="flex py-4 border border-2 border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl my-2 cursor-pointer bg-white hover:bg-hvrtxtscnd">
//           <img
//             src="../assets/images/microsoft.png"
//             alt=""
//             className="w-[20px] h-[20px] mx-4 mt-1"
//           />
//           <p>Continue with Microsoft Account</p>
//         </div>
//         <div className="flex py-4 border border-2 border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl cursor-pointer bg-white hover:bg-hvrtxtscnd">
//           <img
//             src="../assets/images/apple.png"
//             alt=""
//             className="w-[20px] h-[25px] mx-4"
//           />
//           <p>Continue with Apple</p>
//         </div>
//       </div>
//       <footer className="mx-auto p-4 mt-auto text-green">
//         <a href="https://openai.com/policies/terms-of-use">Terms of Use</a>
//         <span className="leading-loose border mx-4"></span>
//         <a href="https://openai.com/policies/privacy-policy">Privacy Policy</a>
//       </footer>
//     </div>
//   );
// };


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      loggeduser &&
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white pb-8 text-textsecond">
      <div className="flex flex-col items-center w-full mb-auto">
        <img
          src="../assets/images/gpt-icon.jpg"
          alt="Sign Up Icon"
          className="mx-auto rounded-full w-12"
        />
        <div className="text-3xl font-bold mt-4 p-10">
          Create your Account
        </div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col items-center">
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
              className="w-[320px] h-12 bg-white border border-hvrtxtscnd focus:border-green rounded-xl p-4"
              placeholder="Email Address*"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
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
            className="w-[320px] h-12 bg-white border border-hvrtxtscnd focus:border-green rounded-xl p-4"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="flex justify-center items-center gap-x-20 m-6">
          <button
            type="submit"
            className="w-[320px] h-12 bg-green text-white rounded-xl font-bold cursor-pointer p-3 hover:bg-green-dark"
          >
            Continue
          </button>
        </div>
      </form>
      <p className="text-center mb-0">
        Already have an account?
        <Link to="/login" className="font-bold pl-4 text-green">
          Login
        </Link>
      </p>
      <div className="flex flex-col items-center w-[320px] my-6 mx-auto">
        <hr className="w-full m-6" />
        <p className="bg-white px-4 -mt-9">OR</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex py-4 border border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl cursor-pointer bg-white hover:bg-hvrtxtscnd">
          <img
            src="../assets/images/google.png"
            alt="Google"
            className="w-[20px] h-[20px] mx-4 mt-1"
          />
          <p>Continue with Google</p>
        </div>
        <div className="flex py-4 border border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl my-2 cursor-pointer bg-white hover:bg-hvrtxtscnd">
          <img
            src="../assets/images/microsoft.png"
            alt="Microsoft"
            className="w-[20px] h-[20px] mx-4 mt-1"
          />
          <p>Continue with Microsoft Account</p>
        </div>
        <div className="flex py-4 border border-hvrtxtscnd text-hvrblk w-[320px] rounded-xl cursor-pointer bg-white hover:bg-hvrtxtscnd">
          <img
            src="../assets/images/apple.png"
            alt="Apple"
            className="w-[20px] h-[25px] mx-4"
          />
          <p>Continue with Apple</p>
        </div>
      </div>
      <footer className="mx-auto p-4 mt-auto text-green">
        <a href="https://openai.com/policies/terms-of-use">Terms of Use</a>
        <span className="mx-4">|</span>
        <a href="https://openai.com/policies/privacy-policy">Privacy Policy</a>
      </footer>
    </div>
  );
};

