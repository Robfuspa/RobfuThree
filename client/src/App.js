import Home from "./views/Home";
import { Router } from "@reach/router";
import Three from "./components/Three";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Three path="/three" />
      </Router>
    </div>
  );
};

export default App;
