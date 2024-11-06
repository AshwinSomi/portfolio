import React, { useState } from "react";
import pic from "../assets/pic2.png";
import pic2 from "../assets/IMG_4226.png";
import Projects from "./Projects";
import { FaGithub } from "react-icons/fa";
import { LiaGithubSquare } from "react-icons/lia";
import { IoTriangleSharp } from "react-icons/io5";
import { RxTriangleRight } from "react-icons/rx";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import PlayGame from "./PlayGame";

export default function Body() {
  const resumeLink = "";
  return (
    <div id="top" className="p-2 text-white ">
      <div>
        <h2 className="text-2xl pb-6 sm:text-3xl ">ASHWIN</h2>
      </div>
      <div className="flex  justify-between align-center pt-6 pb-3 ">
        {/* lg:text-base */}
        <div className="grid grid-col text-xs md:text-sm ">
          <p>
            I am a{/* <span className="text-transparent bg-white">web</span> */}{" "}
            <span className="text-transparent bg-white"> developer</span>
            {/* , doing bit of everything. */}
          </p>
          <p>
            Interested in learning and developing new things across different
            areas of technology.
          </p>
          <p>
            You can connect me at{" "}
            <a className="underline " href="mailto:ashwinsomi@gmail.com">
              <span>ashwinsomi@gmail.com</span>
            </a>
          </p>
        </div>
        <div className="relative group flex-shrink-0 ">
          <img
            src={pic2}
            alt="Picture"
            // h-36 md:h-44 lg:h-52;; h-auto min-h-24 max-h-48 min-w-24
            className=" h-40 md:h-48  w-auto  mx-auto pl-6 
            transition duration-300 ease-in-out opacity-95 hover:opacity-100 hover:scale-105 "
          ></img>
          {/* <div
            className="absolute picBlock bg-gray-300 
                      opacity-100 
                      group-hover:opacity-0
                      transition-opacity duration-500"
          ></div> */}
        </div>
      </div>
      {/* lg:text-base */}
      <div className="text-xs md:text-sm   ">
        <p className="py-6 ">
          <span>CONTENT</span>
        </p>
        <div>
          <p>
            ■{" "}
            <button
              className="underline "
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </button>
          </p>
          <p>
            ■{" "}
            <button
              className="underline "
              onClick={() =>
                document
                  .getElementById("resume")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Resume
            </button>
          </p>
          <p>
            ■{" "}
            <button
              className="underline "
              onClick={() =>
                document
                  .getElementById("media")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Media
            </button>
          </p>
          <p>
            ■{" "}
            <button
              className="underline "
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </button>
          </p>
        </div>
      </div>
      {/* lg:text-base */}
      <div id="projects" className="text-xs md:text-sm  ">
        <p className="py-6 ">
          <span>PROJECTS</span>
        </p>
        <Projects />
      </div>
      {/* lg:text-base  */}
      <div id="futureGoals" className="text-xs md:text-sm  ">
        <p className="py-6 ">
          <span>FUTURE GOALS</span>
        </p>
        <div>
          <p>
            -Learn ML models and try to implement in a project
            <br />
            -Create Full Stack project focussing in backend utilizing
            distributed systems
          </p>
        </div>
      </div>
      {/* lg:text-base  */}
      <div id="resume" className="text-xs md:text-sm  ">
        <details className="py-6 flex items-center cursor-pointer ">
          <summary>
            <span>RESUME</span>
          </summary>
          {resumeLink === "" ? (
            <p>- it seems the link is not setup yet</p>
          ) : (
            <a href={resumeLink} className="underline ">
              resume link
            </a>
          )}
        </details>
      </div>
      {/* lg:text-base  */}
      {/* <div id="playGame" className="text-xs md:text-sm  ">
        <details className="py-6 flex items-center cursor-pointer ">
          <summary>
            <span>PLAY A GAME</span>
          </summary>
          <PlayGame />
        </details>
      </div> */}

      <div id="media" className="text-xs md:text-sm  ">
        <p className="py-6 ">
          <span>MEDIA</span>
        </p>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/AshwinSomi"
            className="inline-block "
            target="blank"
          >
            <FaGithub
              //   className="text-gray-400 hover:text-white opacity-75 hover:opacity-100 duration-100 hover:scale-110 active:scale-95 cursor-pointer"
              className="text-gray-400 hover:text-white opacity-75 hover:opacity-100
               active:translate-x-0.5 active:translate-y-0.5 duration-100 cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>

      <div id="contact" className="text-xs md:text-sm  ">
        <p className="py-6 ">
          <span>CONTACT</span>
        </p>
        <div>
          <p>
            ■{" "}
            <a className="pr-6" href="tel:+1928-814-1768">
              +1 928-814-1768
            </a>{" "}
            ■{" "}
            <a href="mailto:ashwinsomi@gmail.com" className="hover:underline ">
              ashwinsomi@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="py-10 text-xs md:text-sm  ">
        <button
          className="border border-2 p-4 py-2 active:translate-x-1 active:translate-y-1 duration-100 cursor-default "
          onClick={() => {
            const element = document.getElementById("top");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}
