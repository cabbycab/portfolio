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
        <a href="https://github.com/cabbycab" target="_blank" rel="noreferrer">
          <i class="fab fa-github-square"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/danielle-koski/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1nBnH-0Yitrj95kPmk68TpSeoM8tU_9LY/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <i class="far fa-file"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
