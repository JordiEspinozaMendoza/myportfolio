import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "utils";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeScreen } from "screens";
import "./app.scss";
function App() {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <Switch>
          <Route path="/" component={HomeScreen} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
