import { colors, createTheme, invertColorScale, Theme } from "bold-ui";
import { blue, ColorScale } from "bold-ui/lib/styles/colors";
import { createContext, useContext, useEffect, useState } from "react";
import { defaultConfig } from "bold-ui/lib/styles/theme/createPallete";

const newPrimaryScale = {
  ...blue,
  c40: "#0099FF",
  c70: "#0099FF"
};

export const lightTheme = createTheme({
  pallete: {
    grayScale: colors.gray,
    primaryScale: newPrimaryScale
  }
});

export const darkTheme = createTheme({
  pallete: {
    primaryScale: invertColorScale(newPrimaryScale),
    grayScale: invertColorScale(defaultConfig.grayScale),
    alertScale: invertColorScale(defaultConfig.alertScale),
    dangerScale: invertColorScale(defaultConfig.dangerScale),
    infoScale: invertColorScale(defaultConfig.infoScale),
    successScale: invertColorScale(defaultConfig.successScale),
    highlightScale: invertColorScale(defaultConfig.highlightScale)
  }
});

export const ThemeContext = createContext({
  toggleTheme: () => null
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useThemeSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState < Theme > lightTheme;

  useEffect(() => {
    if (localStorage) {
      const loadedTheme =
        localStorage.getItem("currentTheme") === "dark"
          ? darkTheme
          : lightTheme;
      setCurrentTheme(loadedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme);

      if (localStorage) {
        localStorage.setItem("currentTheme", "dark");
      }

      return darkTheme;
    } else {
      setCurrentTheme(lightTheme);

      if (localStorage) {
        localStorage.setItem("currentTheme", "light");
      }

      return lightTheme;
    }
  };

  return [currentTheme, toggleTheme];
};
