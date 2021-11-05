
import BodyComponent from './components/BodyComponent'
import HomeComponent from './components/HomeComponent'
import CeliComponent from './components/CeliComponent'
import FooterComponent from './components/FooterComponent'
import NavComponent from './components/NavComponent'
import GrillaComponent from './components/GrillaComponent'
import MaginComponent from './components/MaginComponent'
import HolaComponent from './components/HolaComponent'
import HermanosComponent from './components/HermanosComponent'
import './styles/BodyComponent.css'
import './styles/global.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <NavComponent />                           
        <div className="body_principal">
          <Switch>
              <Route path="/clases">
                <BodyComponent />
              </Route>
              <Route path="/celi">
                <CeliComponent />
              </Route>            
              <Route path='/magin'>
                <MaginComponent />
              </Route>
              <Route path='/portfolio'>
                <GrillaComponent />
              </Route>
              <Route path='/hermanos'>
                <HermanosComponent />
              </Route> 
              <Route path="/">
                <HomeComponent />
              </Route>                                 
          </Switch>
        </div>
        <FooterComponent/>
      </div> 
    </Router>    
  );
}

export default App;