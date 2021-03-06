import "./Header.css";

function Header(props) {
  return (
    <header id="Header">
      <h1>Danielle Koski</h1>
      <div className="title">
        Software Engineer <br />
        San Francisco Bay Area{" "}
      </div>
      <div className="icons-header">
        <a
          href="https://github.com/cabbycab"
          target="_blank"
          rel="noreferrer"
          title="GITHUB"
        >
          <i className="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/danielle-koski/"
          target="_blank"
          rel="noreferrer"
          title="LINKEDIN"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1vXrXxNgcJisp3CeNwqI-xzeunX1Sc4pK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          title="RESUME"
        >
          <i class="far fa-file"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
