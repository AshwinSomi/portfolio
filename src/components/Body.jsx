import React from "react";
import pic from "../assets/pic2.png";
import Projects from "./Projects";
import { FaGithub } from "react-icons/fa";
import { LiaGithubSquare } from "react-icons/lia";

export default function Body() {
  return (
    <div id="top" className="p-6 text-white ">
      <div>
        <h2 className="text-3xl pb-10 sm:text-4xl ">Ashwin</h2>
      </div>
      <div className="flex flex-wrap py-10 ">
        <div className="grid grid-col text-xs md:text-sm lg:text-base pb-6 ">
          <p>
            I am a <span>web developer</span>, doing bit of everything.
          </p>
          <p>Interested in learning and developing new things.</p>
          <p>
            You can connect me at{" "}
            <a className="underline " href="ashwinsomi@gmail.com">
              <span>ashwinsomi@gmail.com</span>
            </a>
          </p>
        </div>
        <img
          src={pic}
          alt="Picture"
          className="h-52 w-auto px-6 py-auto  "
        ></img>
      </div>
      <div className="text-xs md:text-sm lg:text-base  ">
        <p className="py-6 ">
          <span>CONTENT</span>
        </p>
        <div>
          <p>
            ■{" "}
            <a href="#projects" className="underline ">
              Projects
            </a>
          </p>
          <p>
            ■{" "}
            <a href="#resume" className="underline ">
              Resume
            </a>
          </p>
          <p>
            ■{" "}
            <a href="#media" className="underline ">
              Media
            </a>
          </p>
        </div>
      </div>
      <div id="projects" className="text-xs md:text-sm lg:text-base  ">
        <p className="py-6 ">
          <span>PROJECTS</span>
        </p>
        <Projects />
      </div>
      <div id="resume" className="text-xs md:text-sm lg:text-base  ">
        <p className="py-6 ">
          <span>RESUME</span>
        </p>
        <div>...resume...</div>
      </div>
      <div id="media" className="text-xs md:text-sm lg:text-base  ">
        <p className="py-6 ">
          <span>MEDIA</span>
        </p>
        <div>
          <a
            href="https://github.com/AshwinSomi"
            className="inline-block "
            target="blank"
          >
            <FaGithub
              //   className="text-gray-400 hover:text-white opacity-75 hover:opacity-100 duration-100 hover:scale-110 active:scale-95 cursor-pointer"
              className="text-gray-300 hover:text-white opacity-75 hover:opacity-100
               active:translate-x-0.5 active:translate-y-0.5 duration-50 cursor-pointer"
              size={30}
            />
          </a>
        </div>
      </div>
      <div className="py-6 ">
        <a href="#top" className="underline ">
          Back to Top
        </a>
      </div>
    </div>
  );
}
