import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './theme'

//Screens
import HomeScreen from './screens/HomeScreen'
import ProyectScreen from './screens/ProyectScreen'
import ProyectsScreen from './screens/ProyectsScreen'
//Components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/proyects" exact component={ProyectsScreen}/>
        <Route path="/proyect" exact component={ProyectScreen}/>
        <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
