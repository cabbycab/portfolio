import "./Footer.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <div>
        <a
          href="https://github.com/cabbycab"
          target="_blank"
          rel="noreferrer"
          title="GITHUB"
        >
          <i class="fab fa-github-square"></i>
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
      <div className="copyright">
        Copyright&copy; Danielle Koski Portfolio {new Date().getFullYear()} All
        Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
