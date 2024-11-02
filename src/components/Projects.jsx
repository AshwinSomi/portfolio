import React from "react";

export default function Projects() {
  return (
    <div className="py-2 ">
      <table className=" p-4 ">
        <tbody>
          <tr>
            <td className={"border border-2 p-4 py-4 "}>TrackDaily</td>
            <td className="border border-2 p-4 py-4 ">
              <p className="py-3">
                Lets you track you mood and wite you thoughts for that day
                through out the month, year, ....
              </p>
              <p className="py-3">
                Used firebase to provide Authentication and store data.{" "}
              </p>
              <p className="py-3 ">
                Tech stack: Next.js, Tailwind CSS, JavaScript, Firebase
              </p>
              <a
                href="https://github.com/AshwinSomi/track_daily-next-app"
                className="underline py-3 font_tiny"
              >
                github
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-2 p-4 py-4 ">QuizApp</td>
            <td className="border border-2 p-4 py-4 ">
              <p className="py-3">
                Lets you take a quiz of set of 10 questions.
              </p>
              <p className="py-3">Tech stack: React.js, CSS, JavaScript</p>
              <a
                href="https://github.com/AshwinSomi/React_quizApplication_1/tree/main/quiz_app_1"
                className="underline py-3 font_tiny "
              >
                github
              </a>
            </td>
          </tr>
          <tr>
            <td className={"border border-2 p-4 py-4 "}>NewsAnalyzer</td>
            <td className="border border-2 p-4 py-4 ">
              <p className="py-3">
                lets you analyze positivity and negativity of published new of a
                specific new publisher.
              </p>
              <p className="py-3">
                Used Beautifulsoup to scrap news and CSV to store data.
              </p>
              <p className="py-3 ">
                Tech stack: Python, Pandas, Beautifulsoup, Vader sentiment
                analyzer
              </p>
              <a
                href="https://github.com/AshwinSomi/News-Analyzer"
                className="underline py-3 font_tiny"
              >
                github
              </a>
            </td>
          </tr>
          <tr>
            <td className={"border border-2 p-4 py-4 "}>NewsAnalyzer</td>
            <td className="border border-2 p-4 py-4 ">
              <p className="py-3">
                A path visualizer game that uses A* path finding algorithm to
                find shortest route.
              </p>
              <p className="py-3">
                Used Pygame to create dashboard for the game
              </p>
              <p className="py-3 ">Tech stack: Python, Pygame</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
