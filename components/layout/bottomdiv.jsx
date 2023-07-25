import React from 'react';
import { useSignInModal } from './sign-in-modal';
import { signOut } from "next-auth/react";

const BottomDiv = ({ session }) => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  return (
    <div className="flex flex-col gap-4 mt-[25px] ml-[60px] mr-[60px] justify-end items-center max-h-fit font-sans origin-bottom md:flex-row-reverse md:gap-8 md:justify-between">
      <div className="flex flex-1 gap-4 justify-end">
        <a
          as="a"
          className="flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-8 py-[13px] min-w-max text-sm font-bold text-center hover:!text-[#09073a] hover:bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:outline-white outline rounded-full hover:outline-offset-4 active:outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-emerald-900/20 text-emerald-50 hover:bg-emerald-900"
          href="https://t.me/jateq"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            height="20"
            className="inline text-emerald-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            ></path>
          </svg>
          Contribute
        </a>
        <SignInModal />
        {session ? (
          <button
            as="button"
            className="flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-8 py-[13px] min-w-max text-sm font-bold text-center hover:!text-[#09073a] hover:bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:outline-white outline rounded-full hover:outline-offset-4 active:outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-yellow-900/20 text-yellow-50 hover:bg-yellow-900"
            onClick={() => signOut()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              height="20"
              className="inline text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            <span className="">Log out</span>

          </button>
        ) : (
          <button
            as="button"
            className="flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-8 py-[13px] min-w-max text-sm font-bold text-center hover:!text-[#09073a] hover:bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:outline-white outline rounded-full hover:outline-offset-4 active:outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-yellow-900/20 text-yellow-50 hover:bg-yellow-900"
            onClick={() => setShowSignInModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              height="20"
              className="inline text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3h7a3 3 0 013 3v1"
              ></path>
            </svg>
            <span className="">Sign in</span>

          </button>
        )
        }
      </div>

      <div className="flex flex-1 gap-4 ">
        <a
          as="a"
          className="flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-8 py-[13px] min-w-max text-sm font-bold text-center hover:!text-[#09073a] hover:bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:outline-white outline rounded-full hover:outline-offset-4 active:outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-orange-900/20 text-orange-50 hover:bg-orange-900"
          href="/create"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            height="20"
            className="inline text-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            ></path>
          </svg>
          Get Started
        </a>
        <button
          as="button"
          className="flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-8 py-[13px] min-w-max text-sm font-bold text-center hover:!text-[#09073a] hover:bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:outline-white outline rounded-full hover:outline-offset-4 active:outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 block bg-indigo-800/20 !p-2 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            height="20"
            className="inline text-indigo-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
        </button>
        <a
          as="a"
          className="flex gap-2 justify-center items-center w-fit font-medium basis-1 gap-2 justify-center items-center p-2 px-8 py-[13px] min-w-max text-sm font-bold text-center hover:!text-[#09073a] hover:bg-white hover:bg-opacity-100 active:bg-opacity-90 hover:outline-white outline rounded-full hover:outline-offset-4 active:outline-offset-2 backdrop-blur-sm transition-all md:text-base outline-[#09073a]/50 bg-rose-900/20 text-rose-50 hover:bg-rose-900"
          href="/showcase/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            height="20"
            className="inline text-rose-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          Showcase
        </a>
      </div>
    </div>
  );
};

export default BottomDiv;
