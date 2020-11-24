import React, {Fragment} from 'react';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Componentes/Header/Header';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Index from './Componentes/Index/Index';
import Footer from './Componentes/Footer/Footer';

const App = () => {
  return (
    <Fragment>  
      <BrowserRouter>
        <Header />
      
      <Switch>
        
        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/SobreMi">
          <Page1 />
        </Route>
      
        <Route exact path="/Contacto">
          <Page2 />
        </Route>
  
        <Route exact path="/Proyectos">
          <Page3 />
        </Route>

      </Switch>

      
      </BrowserRouter>
      <Footer />

     
    </Fragment>
  
  );
}

export default App;
