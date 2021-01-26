import "./Footer.css";

function Footer(props) {
  return (
    <footer className="Footer">
      <div>
        Copyright &copy; Danielle Koski Porfolio {new Date().getFullYear()} All
        Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
