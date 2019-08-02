import { ThemeProvider, lightTheme } from "bold-ui";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./view/HomeView";
import NotHomeView from "./view/NotHomeView";
import MenuBar from "./components/Menubar";
import { VTabs } from "./components/VTabs";
import { UserBar } from "./view/user/UserBar";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Router>
          <UserBar></UserBar>
          <MenuBar />
          {/* <Route exact path="/" component={HomeView} />
        <Route path="/teste" component={NotHomeView} /> */}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
