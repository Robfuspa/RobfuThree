import Home from "./views/Home";
import { Router } from "@reach/router";
import Config from "./components/Config/Main";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Config path="/three" />
      </Router>
    </div>
  );
};

export default App;
