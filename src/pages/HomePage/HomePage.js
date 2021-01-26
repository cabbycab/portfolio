import "./HomePage.css";

function HomePage(props) {
  return (
    <main>
      <div className="info">
        <h3>About Me</h3>I am a Software Engineer with a background in Account
        Management for large events. I have experience managing multiple
        projects and teams which require self-discipline and attention to
        detail. It is my goal to be in a role when I can broaden my skills as a
        developer while enhancing applications that create a smooth and lasting
        experience for the user.
      </div>
      <div className="info">
        <h3>My Projects</h3>
        Yoga Poses <br />
        Brewery Advisor <br />
        Animal Crossing Villagers <br />
        Diabetes Log <br />
        Recipe Finder
      </div>
      <div className="info">
        <h3>Technologies</h3>
        HTML5 | CSS3 | JavaScript | jQuery | Node.js | Express.js | React.js |
        MongoDB | Mongoose | Ruby on Rails | PostgreSQL
      </div>
      <div className="info">
        <h3>Contact Me</h3>
        <b>Email:</b> dkoski426@yahoo.com
        <b>Phone:</b> (510) 921-0641
        <b>LinkedIn:</b>{" "}
        <a href="https://www.linkedin.com/in/danielle-koski/">My Profile</a>
      </div>
    </main>
  );
}

export default HomePage;
