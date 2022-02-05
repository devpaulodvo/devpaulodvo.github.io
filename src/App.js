import { React } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';

const App = () => {
  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/projects' element={< Projects/>}/>
      </Switch>
    </Router>
  )
}

export default App;
