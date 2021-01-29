import styles from "./pages/index.module.css";

/**
Themes:
Sysdoc
Creative
Slumber
Loic
Default
**/
const selectedTheme = "Default";

export default function getTheme() {
  switch (selectedTheme) {
    case "Sysdoc":
      return {
        back: "#001730",
        primary: "#4AD7D1",
        secondary: "#FE4A49",
      };
      break;
    case "Creative":
      return {
        back: "#1D2228",
        primary: "#E1E2E2",
        secondary: "#FB8122",
      };
      break;
    case "Slumber":
      return {
        back: "#051622",
        secondary: "#1BA098",
        primary: "#DEB992",
      };
      break;
    case "Loic":
      return {
        back: "#141824",
        secondary: "#FFB600",
        primary: "#0049FF",
      };
      break;
    default:
      return {
        back: "#1A2238",
        primary: "#9DAAF2",
        secondary: "#FF6A3D",
      };
  }
}
