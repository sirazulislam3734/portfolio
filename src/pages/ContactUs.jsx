/* eslint-disable react/no-unknown-property */

import { Fade } from "react-awesome-reveal";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div id="contact" className="bg-base-200 md:py-8 py-3">
      <div className="mb-3 max-w-3xl text-center sm:text-center md:mx-auto md:mb-6">
      <Fade duration={2000} direction='down'>
        <h2 className="font-heading mb-4 font-bold tracking-tight text-primary dark:text-white text-4xl sm:text-5xl">
        Contact US
        </h2>
        </Fade>
        <Fade direction='up'>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
          In hac habitasse platea dictumst
        </p>
        </Fade>
      </div>
      <div className="relative flex items-top justify-center dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
            <Fade direction='left'>
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-2xl sm:text-4xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Contact Information
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400"></div>

                <Fade direction='down'>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +8801706-303734
                  </div>
                </div>
                </Fade>

                <Fade direction='left'>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <FaWhatsapp className="w-8 h-8 text-gray-500" />

                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +8801869-921351
                  </div>
                </div>
                </Fade>

                <Fade direction='up'>
                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <a href="https://veilmail.io/irish-geoff">
                    sirazulislam3734@gmail.com
                    </a>
                  </div>
                </div>
                </Fade>
              </div>
              </Fade>
              <Fade direction='right'>
              <form
                action="https://fabform.io/f/xxxxx"
                method="post"
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex flex-col">
                  <label for="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="border-blue-700 text-lg text-blue-400 hover:border-blue-400 font-semibold bg-slate-200 px-4 py-3 rounded-xl hover:bg-blue-700 w-40 justify-center mx-0 hover:text-white border-b-8 mt-6 flex items-center gap-2"
                >
                  Submit
                </button>
              </form>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
