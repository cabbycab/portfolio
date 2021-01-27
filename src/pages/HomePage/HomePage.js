import "./HomePage.css";

function HomePage(props) {
  return (
    <main>
      <div className="info">
        <h2>About Me</h2>
        <img
          src="https://i.imgur.com/ZFUHlBc.jpg"
          alt="profile"
          id="profile-pic"
        ></img>
        <div id="about">
          {" "}
          I am a Software Engineer in the San Francisco Bay Area with a
          background in Account Management for trade shows and large events.{" "}
          <br />I have experience managing multiple projects and teams which
          requires self-discipline and great attention to detail. It is my goal
          to be in a position where I can broaden my skills as a software
          developer while ensuring that users of applications I have worked on
          have a smooth and enjoyable experience. <br />
        </div>
      </div>

      <div className="info">
        <h2>My Projects</h2>

        <div className="container">
          <div className="card">
            <h5>Yoga Poses</h5> <br />
            <img
              src="https://i.imgur.com/sZu3soa.png"
              alt="yoga-poses"
              className="site-images"
            ></img>
            <article>
              In this app you can view 48 yoga poses, learn their sanskrit name,
              and view a YouTube video on how to perform each one. Has
              functional email capability on the contact page.
            </article>
            <a
              className="site-link"
              href="https://yogaposes-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Yoga Poses
            </a>
          </div>

          <div className="card">
            <h5>BreweryAdvisor</h5> <br />
            <img
              src="https://i.imgur.com/AYANOVH.png"
              alt="brewery-advisor"
              className="site-images"
            />
            <article>
              Collaborated with 2 other students on this full stack project
              allowing users to see breweries based on the city that they
              choose. They can also add, edit, or delete breweries.
            </article>
            <a
              className="site-link"
              href="https://brewery-advisor-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              BreweryAdvisor
            </a>
          </div>

          <div className="card">
            <h5>Animal Crossing Villagers</h5> <br />
            <img
              src="https://i.imgur.com/mFRDh6W.png"
              alt="anima-crossing-villagers"
              className="site-images"
            />
            <article>
              A full-stack MERN, single-page application that allows a logged in
              user to view all Villagers from Animal Crossing and add them to a
              wish list.
            </article>
            <a
              className="site-link"
              href="https://animal-crossing-villagers.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Animal Crossing
            </a>
          </div>

          <div className="card">
            <h5>Diabetes Log</h5>
            <img
              src="https://i.imgur.com/Ri4nPlZ.png"
              alt="diabetes log"
              className="site-images"
            />
            <article>
              A simple multi-page web application that allows diabetics or their
              caretakers to track blood sugar, carb, and insulin intake with
              full Create, Read, Update, and Destroy capability.
            </article>
            <a
              className="site-link"
              href="https://carbtracker-diabetes-log.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Diabetes Log
            </a>
          </div>

          <div className="card">
            <h5>Recipe Finder</h5> <br />
            <img
              src="https://i.imgur.com/3npZSCv.png"
              alt="recipe-finder"
              className="site-images"
            />
            <article>
              An application that allows you to search for recipes using the
              Spoonactular API. There are also links to categories of breakfast,
              lunch, dinner, and dessert.
            </article>
            <a
              className="site-link"
              href="https://cabbycab.github.io/Recipe-Search-App/"
              target="_blank"
              rel="noreferrer"
            >
              Recipe Finder
            </a>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>Technologies</h2>
        <div className="tech">
          HTML5 | CSS3 | JavaScript | jQuery | Node.js | Express.js | React.js |
          MongoDB | Mongoose | Ruby | Ruby on Rails | PostgreSQL | Trello |
          Heroku | Postman | Bootstrap | Git | GitHub
        </div>
      </div>
      <div className="info">
        <h2>Contact Me</h2>
        <div id="contact">
          <b>Email:</b> dkoski426@yahoo.com <br />
          <b>Phone:</b> (510) 921-0641 <br />
          <b>LinkedIn:</b>{" "}
          <a
            href="https://www.linkedin.com/in/danielle-koski/"
            target="_blank"
            rel="noreferrer"
          >
            My Profile
          </a>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
