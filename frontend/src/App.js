import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import Songs from "./pages/Songs";
import Auth from "./pages/Auth";

function App() {
  return (
    <Container>
      <Router>
        <Route path="/" exact component={Auth} />
        <Route path="/songs" exact component={Songs} />
      </Router>
    </Container>
  );
}

export default App;
