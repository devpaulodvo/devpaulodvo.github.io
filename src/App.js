import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import { useTransition, animated, config } from 'react-spring'


const App = () => {
  const transitions = useTransition(true, {
    from:{ opacity: 0},
    enter:{opacity: 1},
    leave:{ opacity: 0},
    config: config.molasses
  })

  return(
    <React.Fragment>
    {
      transitions(({opacity}, item)=>
        item ?
        <animated.div
        style={{
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
        >
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/portfolio' element={<Home/>}/>
            <Route path='/projects' element={< Projects/>}/>
          </Switch>
        </React.Fragment>
        </animated.div> :
        ''
        )
      }
    </React.Fragment>
  )
}

export default App;
