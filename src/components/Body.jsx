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
    <div id="top" className="p-6 text-white ">
      <div>
        <h2 className="text-2xl pb-10 sm:text-3xl ">ASHWIN</h2>
      </div>
      <div className="flex  justify-between align-center pt-10 pb-6 ">
        {/* lg:text-base */}
        <div className="grid grid-col text-xs md:text-sm  pb-6 ">
          <p>
            I am a <span className="text-transparent bg-white">web</span>{" "}
            <span className="text-transparent bg-white"> developer</span>, doing
            bit of everything.
          </p>
          <p>Interested in learning and developing new things.</p>
          <p>
            You can connect me at{" "}
            <a className="underline " href="mailto:ashwinsomi@gmail.com">
              <span>ashwinsomi@gmail.com</span>
            </a>
          </p>
        </div>
        <div className="relative group ">
          <img
            src={pic2}
            alt="Picture"
            // h-36 md:h-44 lg:h-52
            className=" h-auto min-h-16 max-h-48 w-auto mx-auto px-6 transition duration-300 ease-in-out opacity-95 hover:opacity-100 hover:scale-105 "
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
            <a href="#projects" className="underline scroll-smooth ">
              Projects
            </a>
          </p>
          <p>
            ■{" "}
            <a href="#resume" className="underline scroll-smooth ">
              Resume
            </a>
          </p>
          <p>
            ■{" "}
            <a href="#media" className="underline scroll-smooth ">
              Media
            </a>
          </p>
          <p>
            ■{" "}
            <a href="#contact" className="underline scroll-smooth ">
              Contact
            </a>
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
            <p>- it seems link is not setup yet</p>
          ) : (
            <a href={resumeLink} className="underline ">
              resume link
            </a>
          )}
        </details>
      </div>
      {/* lg:text-base  */}
      <div id="playGame" className="text-xs md:text-sm  ">
        <details className="py-6 flex items-center cursor-pointer ">
          <summary>
            <span>PLAY A GAME</span>
          </summary>
          <PlayGame />
        </details>
      </div>

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
               active:translate-x-0.5 active:translate-y-0.5 duration-50 cursor-pointer"
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
            ■ <a href="mailto:ashwinsomi@gmail.com">ashwinsomi@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="py-6 text-xs md:text-sm  ">
        <a href="#top" className="underline scroll-smooth ">
          Back to Top
        </a>
      </div>
    </div>
  );
}
