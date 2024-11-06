import React from "react";
import picTrackDaily from "../assets/track-daily-main.png";

export default function Projects() {
  return (
    <div className="py-2 ">
      <table className=" p-4 ">
        <tbody>
          <tr className=" ">
            <td className={"border border-2 p-2 py-10  "}>Track Daily</td>
            <td className="border border-2 p-4 py-4 ">
              <div className=" ">
                <p className="py-3">
                  - Lets you track you mood and wite you thoughts for that day
                  through out the month, year, ....
                </p>
                <p className="py-3">
                  - Used firebase to provide Authentication and store data.{" "}
                </p>
                <a
                  href="https://ashwin065-track-daily.netlify.app/"
                  target="blank"
                >
                  <img
                    src={picTrackDaily}
                    alt="web app pic"
                    className="object-center h-36 md:h-44 lg:h-52 w-auto p-4 mx-auto 
                transition-all duration-500 ease-in-out opacity-90 hover:opacity-110 hover:scale-110 "
                  ></img>
                </a>
                <p className="py-3 ">
                  Tech stack: Next.js, Tailwind CSS, JavaScript, Firebase
                </p>
                <details className="py-3 cursor-pointer ">
                  <summary>Instructions for use</summary>
                  <dl>
                    <dd>
                      -first time users can sign up. make sure the email has
                      @domain; doesn't has to be actual mail. and password len
                      over 6
                    </dd>
                    <dd>-you can log in using the same</dd>
                    <dd>
                      -you can write notes or anything which can be viewed by
                      clicking on the day in calender.
                    </dd>
                    <dd>-at this time you cannot edit what you have entered</dd>
                    <dd>
                      -notes will be added to you previous notes and gets saved.
                    </dd>
                    <dd>
                      -some dates in calender may be misleading; starting of the
                      month
                    </dd>
                  </dl>
                </details>
                <a
                  href="https://ashwin065-track-daily.netlify.app/"
                  className="hover:underline py-3 font_tiny"
                  target="blank"
                >
                  track-daily
                </a>{" "}
                <a
                  href="https://github.com/AshwinSomi/track_daily-next-app"
                  className="hover:underline py-3 font_tiny"
                  target="blank"
                >
                  github
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-2 p-2 ">Quiz App</td>
            <td className="border border-2 p-4 py-4 ">
              <p className="py-3">
                - Lets you take a quiz of set of 10 questions.
              </p>
              <p className="py-3">Tech stack: React.js, CSS, JavaScript</p>
              <a
                href="https://github.com/AshwinSomi/React_quizApplication_1/tree/main/quiz_app_1"
                className="hover:underline py-3 font_tiny "
                target="blank"
              >
                github
              </a>
            </td>
          </tr>
          <tr>
            <td className={"border border-2 p-2  "}>News Analyzer</td>
            <td className="border border-2 p-4 py-4 ">
              <p className="py-3">
                - lets you analyze positivity and negativity of published new of
                a specific new publisher.
              </p>
              <p className="py-3">
                - Used Beautifulsoup to scrap news and CSV to store data.
              </p>
              <p className="py-3 ">
                Tech stack: Python, Pandas, Beautifulsoup, Vader sentiment
                analyzer
              </p>
              <a
                href="https://github.com/AshwinSomi/News-Analyzer"
                className="hover:underline py-3 font_tiny"
                target="blank"
              >
                github
              </a>
            </td>
          </tr>
          <tr>
            <td className={"border border-2 p-2 "}>Path Visualizer</td>
            <td className="border border-2 p-4 py-4 ">
              <p className="py-3">
                - A path visualizer game that uses A* path finding algorithm to
                find shortest route.
              </p>
              <p className="py-3">
                - Used Pygame to create dashboard for the game
              </p>
              <p className="py-3 ">Tech stack: Python, Pygame</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
