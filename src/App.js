import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./view/HomeView";
import NotHomeView from "./view/NotHomeView";
import { MenuBar } from "./components/Menubar";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeView} />
        <Route path="/teste" component={NotHomeView} />
      </Router>
    </div>
  );
}

export default App;
