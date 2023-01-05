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
              src="https://www.youtube.com/embed/7okHiY4oErk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos ullam saepe totam molestias ratione aspernatur natus
                    animi itaque pariatur, assumenda esse sed deserunt neque
                    eius, incidunt officia est exercitationem! Ipsa.Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eligendi
                    similique, delectus modi molestias officia doloribus
                    asperiores suscipit, a aspernatur cupiditate error iusto,
                    deserunt velit assumenda eius repudiandae fugiat libero ea?
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos ullam saepe totam molestias ratione aspernatur natus
                    animi itaque pariatur, assumenda esse sed deserunt neque
                    eius, incidunt officia est exercitationem! Ipsa. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eligendi
                    similique, delectus modi molestias officia doloribus
                    asperiores suscipit, a aspernatur cupiditate error iusto,
                    deserunt velit assumenda eius repudiandae fugiat libero ea?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-all-projects">
          <div className="all-projects-container">
            <h1 className="all-projects-h1">
              All projects we have done so far.
            </h1>
            <p className="all-projects-p">
              wadawdaw dwd adwd adwd awdw Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Incidunt similique suscipit aliquid
              at praesentium sapiente deserunt beatae. Sint laudantium qui
              temporibus quia, officiis saepe voluptatem atque consequatur harum
              perspiciatis ipsa!Loremlore Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Atque ducimus repellendus delectus voluptates
              facere placeat provident eveniet assumenda quaerat nobis minima,
              alias, excepturi perspiciatis. Animi veniam quibusdam tempore!
              Alias, illum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Incidunt nihil laudantium enim soluta reprehenderit, dicta,
              quia voluptates aliquam vero magni quod maiores corporis. Officia
              amet velit similique voluptate sunt maxime?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
