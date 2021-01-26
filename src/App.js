import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={(props) => <HomePage />} />
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
