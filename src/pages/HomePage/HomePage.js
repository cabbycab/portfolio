import "./HomePage.css";

function HomePage(props) {
  return (
    <main>
      {/* ABOUT ME */}
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

      {/* TECHNOLOGOIES */}
      <div className="info">
        <h2>Technologies</h2>
        <div className="tech">
          HTML5 | CSS3 | JavaScript | jQuery | Node.js | Express.js | React.js |
          MongoDB | Mongoose | Ruby | Ruby on Rails | PostgreSQL | Trello |
          Heroku | Postman | Bootstrap | Git | GitHub
        </div>
      </div>

      {/* MY PROJECTS */}
      <div className="info">
        <h2>My Projects</h2>

        {/* YOGA POSES */}
        <div className="container">
          <div className="card">
            <h5>Yoga Poses</h5> <br />
            <img
              src="https://i.imgur.com/nXCLM4p.png"
              alt="yoga-poses"
              className="site-images"
            ></img>
            <article>
              In this app you can view 48 yoga poses, learn their sanskrit name,
              and view a YouTube video on how to perform each one. Has
              functional email capability on the contact page. <br />
              <br />
              Built with an Express backend and a React frontend.
            </article>
            <nav>
              <a
                className="site-link"
                href="https://yoga-poses.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className="site-link"
                href="https://github.com/cabbycab/yoga_poses_frontend/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </nav>
          </div>
          {/* BREWERY ADVISOR */}
          <div className="card">
            <h5>BreweryAdvisor</h5> <br />
            <img
              src="https://i.imgur.com/I8l3eFQ.png"
              alt="brewery-advisor"
              className="site-images"
            />
            <article>
              Collaborated with 2 other students on this full stack project
              allowing users to see breweries based on the city that they
              choose. They can also add, edit, or delete breweries.
              <br />
              <br />
              Built with Ruby on Rails backend with a React frontend.
            </article>
            <nav>
              <a
                className="site-link"
                href="https://brewery-advisor-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className="site-link"
                href="https://github.com/cabbycab/brewery_advisor_client/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </nav>
          </div>
          {/* ANIMAL CROSSING VILLAGERS */}
          <div className="card">
            <h5>Animal Crossing Villagers</h5> <br />
            <img
              src="https://i.imgur.com/v0NXz7l.png"
              alt="anima-crossing-villagers"
              className="site-images"
            />
            <article>
              A full-stack MERN, single-page application that allows a logged in
              user to view all Villagers from Animal Crossing and add them to a
              wish list. <br />
              <br />
              Built with an Express backend and a React frontend.
            </article>
            <nav>
              <a
                className="site-link"
                href="https://animal-crossing-villagers.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className="site-link"
                href="https://github.com/cabbycab/Animal-Crossing-Villagers-frontend/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </nav>
          </div>

          {/* DIABETES LOG */}
          <div className="card">
            <h5>Diabetes Log</h5> <br />
            <img
              src="https://i.imgur.com/lOTlrl1.png"
              alt="diabetes log"
              className="site-images"
            />
            <article>
              A simple multi-page web application that allows diabetics or their
              caretakers to track blood sugar, carb, and insulin intake. Has
              full CRUD capability.
              <br />
              <br />
              Built in Express using MongoDB and Mongoose.
            </article>
            <nav>
              <a
                className="site-link"
                href="https://carbtracker-diabetes-log.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className="site-link"
                href="https://github.com/cabbycab/carbtracker/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </nav>
          </div>

          {/* RECEIPE FINDER */}
          <div className="card">
            <h5>Recipe Finder</h5> <br />
            <img
              src="https://i.imgur.com/j2MUONY.png"
              alt="recipe-finder"
              className="site-images"
            />
            <article>
              An application that allows you to search for recipes using the
              Spoonactular API. There are also links to categories of breakfast,
              lunch, dinner, and dessert. <br />
              <br />
              Built using jQuery. Called the API using AJAX.
            </article>
            <nav>
              <a
                className="site-link"
                href="https://cabbycab.github.io/Recipe-Search-App/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className="site-link"
                href="https://github.com/cabbycab/Recipe-Search-App"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* TECHNOLOGOIES
      <div className="info">
        <h2>Technologies</h2>
        <div className="tech">
          HTML5 | CSS3 | JavaScript | jQuery | Node.js | Express.js | React.js |
          MongoDB | Mongoose | Ruby | Ruby on Rails | PostgreSQL | Trello |
          Heroku | Postman | Bootstrap | Git | GitHub
        </div>
      </div> */}

      {/* CONTACT INFO */}
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
