import React, {Fragment, useState} from 'react';
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
import MenuDesplegable from './Componentes/MenuDesplegable/MenuDesplegable';

const App = () => {
  const [displayMenu, setDisplayMenu] = useState(true);

  const showMenu = () => {
    console.log("Toggle display menu !!! ")
    setDisplayMenu(!displayMenu);
}
  return (
    <Fragment>  
      <BrowserRouter>
        <Header displayMenu={displayMenu} showMenu={showMenu}/>
      
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

        <Route exact path="/MenuDesplegable">
          <MenuDesplegable displayMenu={displayMenu} showMenu={showMenu} />
        </Route>

      </Switch>

      
      </BrowserRouter>
      <Footer />

     
    </Fragment>
  
  );
}

export default App;
