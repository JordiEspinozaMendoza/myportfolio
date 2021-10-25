import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "utils";
import { NavigationBar, HeaderHero, AboutComponent } from "components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
function App() {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <NavigationBar />
        <HeaderHero />
        <AboutComponent />
        <Switch>
          <Route path="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
