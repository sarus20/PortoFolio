import React from 'react';
import LandingPage from './landingpage';
import Resume from './resume';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';

import {Switch,Route} from 'react-router-dom';

const Main =() =>(
   <Switch>
       <Route exact path ="/" component={LandingPage}></Route>
       <Route  path ="/aboutme" component={Aboutme}></Route>
       <Route  path ="/contact" component={Contact}></Route>
       <Route  path ="/projects" component={Projects}></Route>
       <Route  path ="/resume" component={Resume}></Route>
  </Switch>

)
export default Main;