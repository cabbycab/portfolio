import "./Footer.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <div>
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
      <div className="copyright">
        Copyright&copy; Danielle Koski Portfolio {new Date().getFullYear()} All
        Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
