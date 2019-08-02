import { ThemeProvider, lightTheme, withStyles } from "bold-ui";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "./view/HomeView";
import NotHomeView from "./view/NotHomeView";
import MenuBar from "./components/Menubar";

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
        <nav className={css(styles.nav)}>
          <MenuBar />
        </nav>
        <main className={css(styles.main)}>
          <Route exact path="/" component={NotHomeView} />
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default withStyles(App);
