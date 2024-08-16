import React, { useState } from "react";
import ProfileMenu from "./ProfileMenu";

export const Header = ({ loging, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between bg-white h-16">
      <button
        href=""
        onClick={toggleDropdown}
        className="flex hover:bg-gray py-4 pl-4 pr-4 rounded-xl"
      >
        <h1 className="font-bold text-xl text-textsecond">ChatGPT</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="icon-md text-textsecond mx-2"
        >
          <path
            fill="currentColor"
            d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul
          className="block absolute bg-white mt-20 ml-4 p-2 rounded-xl border border-hvrtxtscnd shadow"
          data-side="bottom"
        >
          <li className="text-hvrblk none px-2 py-4 hover:bg-gray rounded-xl">
            <a href="" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="h-8 w-8 bg-hvrtxtscnd text-hvrblk p-2 rounded-full"
              >
                <path
                  fill="currentColor"
                  d="M15.11 14.285a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317"
                ></path>
                <path
                  fill="currentColor"
                  d="M7.001 4a1 1 0 0 1 .993.887c.192 1.7.701 2.877 1.476 3.665.768.783 1.913 1.3 3.618 1.452a1 1 0 0 1-.002 1.992c-1.675.145-2.849.662-3.638 1.452-.79.79-1.307 1.963-1.452 3.638a1 1 0 0 1-1.992.003c-.152-1.706-.67-2.851-1.452-3.62-.788-.774-1.965-1.283-3.665-1.475a1 1 0 0 1-.002-1.987c1.73-.2 2.878-.709 3.646-1.476.767-.768 1.276-1.916 1.476-3.646A1 1 0 0 1 7 4Zm-2.472 6.998a6.1 6.1 0 0 1 2.468 2.412 6.2 6.2 0 0 1 1.037-1.376 6.2 6.2 0 0 1 1.376-1.036 6.1 6.1 0 0 1-2.412-2.469 6.2 6.2 0 0 1-1.053 1.416 6.2 6.2 0 0 1-1.416 1.053"
                ></path>
              </svg>
              <div className="px-4">
                <h1>ChatGPT Plus</h1>
                <p className="text-textsecond text-sm">
                  Our smartest model & more
                </p>
              </div>
              <button className="broder border-2 border-textsecond rounded-full px-4 py-2">
                Upgrade
              </button>
            </a>
          </li>
          <li className="text-hvrblk none px-2 py-4 hover:bg-gray rounded-xl">
            <a href="" className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="h-8 w-8 bg-hvrtxtscnd text-hvrblk p-2 rounded-full"
                >
                  <path
                    fill="currentColor"
                    d="M12 7.42a22 22 0 0 0-2.453 2.127A22 22 0 0 0 7.42 12a22 22 0 0 0 2.127 2.453c.807.808 1.636 1.52 2.453 2.128a22 22 0 0 0 2.453-2.128A22 22 0 0 0 16.58 12a22 22 0 0 0-2.127-2.453A22 22 0 0 0 12 7.42m1.751-1.154a25 25 0 0 1 2.104 1.88 25 25 0 0 1 1.88 2.103c.316-.55.576-1.085.779-1.59.35-.878.507-1.625.503-2.206-.003-.574-.16-.913-.358-1.111-.199-.199-.537-.356-1.112-.36-.58-.003-1.328.153-2.205.504-.506.203-1.04.464-1.59.78Zm3.983 7.485a25 25 0 0 1-1.88 2.104 25 25 0 0 1-2.103 1.88 13 13 0 0 0 1.59.779c.878.35 1.625.507 2.206.503.574-.003.913-.16 1.111-.358.199-.199.356-.538.36-1.112.003-.58-.154-1.328-.504-2.205a13 13 0 0 0-.78-1.59ZM12 18.99c.89.57 1.768 1.03 2.605 1.364 1.026.41 2.036.652 2.955.646.925-.006 1.828-.267 2.5-.94.673-.672.934-1.575.94-2.5.006-.919-.236-1.929-.646-2.954A15.7 15.7 0 0 0 18.99 12a15.6 15.6 0 0 0 1.364-2.606c.41-1.025.652-2.035.646-2.954-.006-.925-.267-1.828-.94-2.5-.672-.673-1.575-.934-2.5-.94-.919-.006-1.929.235-2.954.646-.838.335-1.716.795-2.606 1.364a15.7 15.7 0 0 0-2.606-1.364C8.37 3.236 7.36 2.994 6.44 3c-.925.006-1.828.267-2.5.94-.673.672-.934 1.575-.94 2.5-.006.919.235 1.929.646 2.955A15.7 15.7 0 0 0 5.01 12c-.57.89-1.03 1.768-1.364 2.605-.41 1.026-.652 2.036-.646 2.955.006.925.267 1.828.94 2.5.672.673 1.575.934 2.5.94.92.006 1.93-.235 2.955-.646A15.7 15.7 0 0 0 12 18.99m-1.751-1.255a25 25 0 0 1-2.104-1.88 25 25 0 0 1-1.88-2.104c-.315.55-.576 1.085-.779 1.59-.35.878-.507 1.625-.503 2.206.003.574.16.913.359 1.111.198.199.537.356 1.111.36.58.003 1.328-.153 2.205-.504.506-.203 1.04-.463 1.59-.78Zm-3.983-7.486a25 25 0 0 1 1.88-2.104 25 25 0 0 1 2.103-1.88 13 13 0 0 0-1.59-.779c-.878-.35-1.625-.507-2.206-.503-.574.003-.913.16-1.111.359-.199.198-.356.537-.36 1.111-.003.58.153 1.328.504 2.205.203.506.464 1.04.78 1.59Z"
                  ></path>
                </svg>
                <div className="px-4">
                  <h1>ChatGPT</h1>
                  <p className="text-textsecond text-sm">
                    Great for eveeryday tasks
                  </p>
                </div>
              </div>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </a>
          </li>
          <hr className="text-hvrtxtscnd border-2 rounded-full" />
          <li className="text-hvrblk none px-2 py-4 hover:bg-gray rounded-xl">
            <a href="" className="flex items-center justify-between">
              <div className="flex items-center">
                <div class="flex items-center justify-center text-textsecond h-5 w-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="h-5 w-5 shrink-0"
                  >
                    <path
                      fill="currentColor"
                      d="M10.974 3.252a1 1 0 0 1-.746 1.201 7.74 7.74 0 0 0-3.876 2.24 1 1 0 1 1-1.458-1.37 9.74 9.74 0 0 1 4.878-2.817 1 1 0 0 1 1.202.746m2.052 0a1 1 0 0 1 1.202-.746 9.74 9.74 0 0 1 4.878 2.818 1 1 0 1 1-1.458 1.37 7.74 7.74 0 0 0-3.876-2.24 1 1 0 0 1-.746-1.202M3.91 8.514a1 1 0 0 1 .67 1.246A7.8 7.8 0 0 0 4.25 12c0 .774.113 1.53.325 2.25a1 1 0 0 1-1.92.564A10 10 0 0 1 2.25 12c0-.978.144-1.924.413-2.817a1 1 0 0 1 1.246-.669m16.182 0a1 1 0 0 1 1.246.67c.269.892.413 1.838.413 2.816a10 10 0 0 1-.406 2.813 1 1 0 0 1-1.919-.564A8 8 0 0 0 19.75 12a7.8 7.8 0 0 0-.328-2.24 1 1 0 0 1 .669-1.246m-.982 8.768a1 1 0 0 1 .086 1.412c-1.293 1.462-3.006 2.551-4.955 3.033a1 1 0 1 1-.48-1.941c1.53-.379 2.895-1.24 3.938-2.418a1 1 0 0 1 1.411-.086m-12.937-.008a1 1 0 0 1 .293 1.384L5.593 20H10a1 1 0 1 1 0 2H3.75a1 1 0 0 1-.838-1.545l1.876-2.887a1 1 0 0 1 1.384-.294"
                    ></path>
                  </svg>
                </div>
                <div className="px-4">Temporary chat</div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                aria-label="Temporary"
                class="cursor-pointer bg-textsecond rounded-full h-[20px] w-[32px]"
              >
                <span
                  data-state="unchecked"
                  class="flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform ltr:translate-x-0.5 rtl:-translate-x-0.5 bg-white h-[16px] w-[16px] ltr:radix-state-checked:translate-x-[14px] rtl:radix-state-checked:translate-x-[-14px]"
                ></span>
              </button>
            </a>
          </li>
        </ul>
      )}
      {!loging ? (
        <ProfileMenu handleLogout={handleLogout} />
      ) : (
        <ul className="flex justify-center align-center items-center gap-4 mr-8">
          <li className="border border-2 border-hvrtxtscnd bg-hvrblk text-white p-2 rounded-[50px] w-20 sm:w-[6rem] lg:w-[8rem] flex justify-center cursor-pointer">
            <a href="login">Log in</a>
          </li>
          <li className="border border-2 border-hvrblk bg-white p-2 rounded-[50px] w-20 sm:w-[6rem] lg:w-[8rem] flex justify-center cursor-pointer">
            <a href="signup">Sign up</a>
          </li>
        </ul>
      )}
    </header>
  );
};
