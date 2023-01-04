import "./Home.css";
import { Link } from "react-router-dom";
import Header from "../Home/Header-folder/Header";

function Home() {
  return (
    <div>
      <Header></Header>
      <div className="body">
        <div className="box1">
          <div className="about-us">
            <strong className="us">About Our Team</strong>
            <br />
            <br /> Our team consist of three members. Each of them has a
            significant contribution to the project. In the below, each team
            member, his works is mentioned. <br /> <br />
            <h5>Ali Ahmadli</h5>
            <h5>Manaf aghazada</h5>
            <h5>Zaid Rustamov</h5>
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
          <div className="about">
            <div className="steps">
              <p className="all-steps">Steps based on XP.</p>
              <ul>
                <li>Communication</li>
                <li>Planing</li>
                <li>
                  Design
                  <ul>
                    <li>Converting from xlsx to json file</li>
                    <li>Setting up json-server</li>
                    <li>Designing Home page</li>
                    <li>Designing Contact page</li>
                    <li>Designing Movie page</li>
                  </ul>
                </li>
                <li>Release</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <Header></Header>
//       <div className="body">
//         <div className="box1">
//           <div className="about-us">
//             <strong className="us">About Our Team</strong>
//             <br />
//             <br /> Our team consist of three members. Each of them has a
//             significant contribution to the project. In the below, each team
//             member, his works is mentioned. <br /> <br />
//             <h5>Ali Ahmadli</h5>
//             <h5>Manaf aghazada</h5>
//             <h5>Zaid Rustamov</h5>
//           </div>
//         </div>
//         <div className="box2">
//           <div className="introduction">
//             <strong className="welcome">Welcome to Moviefy!</strong>
//             <br />
//             <br /> We designed the best 1000 movies for <strong>You</strong>.
//             Just click to <strong>Movie</strong> at the top. You will find
//             yourself among the movies. Click and view each movie IMDB rating,
//             overview, genre, and runtime of movie.
//           </div>
//           <div className="about">
//             <div className="steps">
//               <p className="all-steps">Steps based on XP.</p>
//               <ul>
//                 <li>Communication</li>
//                 <li>Planing</li>
//                 <li>
//                   Design
//                   <ul>
//                     <li>Converting from xlsx to json file</li>
//                     <li>Setting up json-server</li>
//                     <li>Designing Home page</li>
//                     <li>Designing Contact page</li>
//                     <li>Designing Movie page</li>
//                   </ul>
//                 </li>
//                 <li>Release</li>
//               </ul>
//             </div>
//             <div className="youtube-link">
//               <strong>Project Presentation</strong>
//               <br /> <br />
//               <iframe
//                 width="500"
//                 height="250"
//                 src="https://www.youtube.com/embed/7okHiY4oErk"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               ></iframe>
//               <br /> <br />
//               <a href="">
//                 <strong>Github Link</strong>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div>

//         <h3>
//           Brief info about the list of all the projects you have done so far
//         </h3>
//         <p>
//           Manaf has few projects such as personal blog written using HTML and
//           CSS, moreover, calculator, rock scissor paper game written in C and
//           Java programming language. Furthermore, rent program using OOP in
//           Java. In addition, program in Java programming language which convert
//           positive picture to negative with multithreading. All of those
//           projects he wrote in the courses that he took from Nuraddin Sadili's
//           PP1, PP2, and Web and Mobile I courses.
//         </p>
//         <br />
//         <h3>Each info holds an external link to the project website</h3>
//         <br />
//       </div> */}
//     </div>
//   );
// }

export default Home;
