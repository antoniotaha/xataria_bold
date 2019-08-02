import { ThemeProvider, lightTheme, withStyles } from "bold-ui";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./view/HomeView";
import NotHomeView from "./view/NotHomeView";
import MenuBar from "./components/Menubar";
<<<<<<< HEAD
import EventsCreateView from "./view/EventsCreateView";
=======
import { VTabs } from "./components/VTabs";
import { UserBar } from "./view/user/UserBar";
>>>>>>> 57cec484f32675f7a438c7f81116dd292ea08032

function App(props) {
  const { css, location, theme } = props;

  const styles = {
    container: {
      background: theme.pallete.surface.main,
      display: "grid",
      gridTemplateAreas: `"header header"
                                     "nav main"`,
      gridTemplateColumns: "5rem 1fr"
    },
    header: {
      gridArea: "header"
    },
    nav: {
      gridArea: "nav"
    },
    main: {
      gridArea: "main"
    }
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <UserBar></UserBar>
        <nav className={css(styles.nav)}>
          <MenuBar />
<<<<<<< HEAD
          {/* <Route exact path="/" component={HomeView} />
        <Route path="/teste" component={NotHomeView} /> */}
          <Route path="/events" component={EventsCreateView} />
        </Router>
      </ThemeProvider>
    </div>
=======
        </nav>
        <main className={css(styles.main)}>
          <Route exact path="/" component={NotHomeView} />
        </main>
      </Router>
    </ThemeProvider>
>>>>>>> 57cec484f32675f7a438c7f81116dd292ea08032
  );
}

export default withStyles(App);
