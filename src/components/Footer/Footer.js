import "./Footer.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <div>
        <i class="fab fa-github-square"></i>
        <i class="fab fa-linkedin"></i>
        <i class="far fa-file"></i>
      </div>
      <div className="copyright">
        Copyright&copy; Danielle Koski Portfolio {new Date().getFullYear()} All
        Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
