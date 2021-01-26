import "./Footer.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="Footer">
      <div>
        <a href="https://github.com/cabbycab">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/danielle-koski/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="">
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
