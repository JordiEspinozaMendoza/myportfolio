import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProyectScreen from "./screens/ProyectScreen";
import ProyectsScreen from "./screens/ProyectsScreen";
import LoginScreen from "./screens/LoginScreen";
import ProyectCreateScreen from "./screens/ProyectCreateScreen";
import CategorieCreateScreen from "./screens/CategorieCreateScreen";
import ProyectsListScreen from "./screens/ProyectsListScreen";
import CategoriesListScreen from "./screens/CategoriesListScreen";
//Components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <ScrollToTop/>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/proyects" exact component={ProyectsScreen} />
        <Route path="/proyect" component={ProyectScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/proyects/edit" exact component={ProyectCreateScreen} />
        <Route path="/proyects/list/" exact component={ProyectsListScreen} />
        <Route path="/categories/list/" exact component={CategoriesListScreen} />
        <Route
          path="/categories/edit"
          component={CategorieCreateScreen}
        />
        <Footer />
      </ThemeProvider>
    </Router>
  );
  
}

export default App;
