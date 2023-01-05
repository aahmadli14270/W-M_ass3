import "./Home.css";
import { Link } from "react-router-dom";
import Header from "../Home/Header-folder/Header";

function Home() {
  return (
    <div>
      <Header></Header>
      <div className="body">
        <div className="grid1">
          <div className="box1">
            <div className="about-us">
              <strong className="us">About Our Team</strong>
              <br />
              <br /> Our team consist of three members. Each of them has a
              significant contribution to the project. In the below, each team
              member, his works is mentioned. <br /> <br />
              <h5 className="us-h5">Ali Ahmadli</h5>
              <h5 className="us-h5">Manaf aghazada</h5>
              <h5 className="us-h5">Zaid Rustamov</h5>
            </div>
          </div>
          <div className="box2">
            <div className="introduction">
              <strong className="welcome">Welcome to Moviefy!</strong>
              <br />
              <br /> We designed the best 1000 movies for <strong>You</strong>.
              Just click to <strong>Movie</strong> at the top. You will find
              yourself among the movies. Click and view each movie IMDB rating,
              overview, genre, and runtime of movie.
            </div>
          </div>
        </div>
        <div className="grid2">
          <div className="about">
            <div className="steps">
              <p className="all-steps">Steps based on XP.</p>
              <ul>
                <li className="list-for-xp">Communication</li>
                <li className="list-for-xp">Planing</li>
                <li className="list-for-xp">
                  Design
                  <ul>
                    <li className="list-for-xp">
                      Converting from xlsx to json file
                    </li>
                    <li className="list-for-xp">Setting up json-server</li>
                    <li className="list-for-xp">Designing Home page</li>
                    <li className="list-for-xp">Designing Contact page</li>
                    <li className="list-for-xp">Designing Movie page</li>
                  </ul>
                </li>
                <li className="list-for-xp">Release</li>
              </ul>
            </div>
          </div>

          <div className="youtube-link">
            <strong>Project Presentation</strong>
            <br /> <br />
            <iframe 
              width="500" 
              height="250" 
              src="https://www.youtube.com/embed/izXz-WCg67c" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
            <br /> <br />
            <a href="">
              <strong>Github Link</strong>
            </a>
          </div>
        </div>

        <div className="info-for-us">
          <div className="container-for-us">
            <h1 className="our-team-h1">Our Team</h1>
            <div className="members">
              <div className="member">
                <div className="member-container">
                  <div className="img-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#f76707"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="info-us-p">
                    <h1 className="member-name-h1">Manaf Aghayev</h1>
                    Manaf has few projects such as personal blog written using
                    HTML and CSS, moreover, calculator, rock scissor paper game
                    written in C and Java programming language. Furthermore,
                    rent program using OOP in Java. In addition, program in Java
                    programming language which convert positive picture to
                    negative with multithreading. All of those projects he wrote
                    in the courses that he took from Nuraddin Sadili's PP1, PP2,
                    and Web and Mobile I courses.
                  </p>
                </div>
              </div>
              <div className="member">
                <div className="member-container right-grid">
                  <p className="info-us-p right-border">
                    <h1 className="member-name-h1">Zaid Rustemov</h1>
                    Zaid is a 3<sup>rd</sup> bachelor year of Computer Science Student at ADA University. Even though he takes Web and Mobile l course
                    as Free Elective, he is curious about web programming. In the previous assignments, he has cretaed many well-designed, fancy
                    projects through semester. He has mainly used HTML for overall scheleton, CSS for designing, JS for add animations, functions
                    to both HTML and CSS elements. In the last assignment, he has extended his knowledge by studying and applying ReactJS thanks to
                    the professor and teammates.
                  </p>
                  <div className="img-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#f76707"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="member">
                <div className="member-container">
                  <div className="img-svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="#f76707"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <p className="info-us-p">
                    <h1 className="member-name-h1">Ali Ahmadli</h1>
                    Ali is a 3<sup>rd</sup> year İT student at ADA university. Since Web and mobile is essential in his profession, 
                    he has experience about design and back-end development. This assignment is his first project experience 
                    with react, so it was a very different experience for him, but in fact, he did well on assignment. 
                    Additionally, he also weatify project which shows up weather for 3 days for the given coordinates, name, or 
                    location. He also had static webpage project which was a personal webpage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-all-projects">
          <div className="all-projects-container">
            <h1 className="all-projects-h1">
              Development Process of the Moviefy.
            </h1>
            <p className="all-projects-p">
              In the steps component, we mentioned that we developed our web based software by following the steps of Extreme Programming, (XP).
              The reason to choose the process model is the development of the software depened on our effective communication, planning the work,
              designing stage which is mainly about coding and its testing. Firstly in communication stage, we organized meetings at the university,
              in online platforms, via social media. In planning phase, we decided that to release it in the dedicated time, each of us should work
              when he had free time. Moreover, we decomposed works like the following. Manaf was required to convert excel file to json file, Main page
              components, its design, and overall contribution to Movie pages. Zaid was required to create json-server, Contact page, its desgin, and
              help Ali in Movie section. Ali was required to test each json-server, Home page, Contact page, its design, and work on Movie page. Fortunately,
              we finished our work on time and test it in terms of verification and validation techniques. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
