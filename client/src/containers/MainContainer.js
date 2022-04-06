import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopContainer from './LaptopContainer';
import TvContainer from './TvContainer';
import MobilePhoneContainer from './MobilePhoneContainer';



const MainContainer = () => {



    return (
        <Router>
        <Fragment>
        
        <Switch>
          <Route path="/laptops" component={LaptopContainer}/>
          <Route path="/tvs" component={TvContainer}/>
          <Route path="/mobilePhones" component={MobilePhoneContainer}/>
        </Switch>
  
  
        </Fragment>
        </Router>
      )
  }
  

export default MainContainer;
