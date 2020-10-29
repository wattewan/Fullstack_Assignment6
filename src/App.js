import React from "react";
import './App.css'
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Navbar from './components/Navbar';
import ThemeSwitcher from "./components/ThemeSwitcher";
import API from './components/Api';





function App() {
  return (
    <div className="todoapp stack-large">
      <ThemeSwitcher />
      <Navbar />
      
      <Switch>
        <Route path="/" component={Home} exact /> |
        <Route path="/about" component={About} />
        <Route path="/api" component={API} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

// class AppTheme extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value='dark'>
//         <Toolbar />
//       </ThemeContext.Provider>
//     )
//   }
// }




export default App;