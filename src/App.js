import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
// import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={(props) => <HomePage />} />

          {/* <Route exact path="/projects" render={(props) => <ProjectsPage />} /> */}

          <Route exact path="/contact" render={(props) => <ContactPage />} />
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
