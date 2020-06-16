import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BottomBar from './components/bottombar/BottomBar';
import Explore from './components/explore/Explore';
import Favoris from './components/favoris/Favoris';
import Leaflet from './components/map/Map';
import Parcours from './components/parcours/Parcours';
import Profil from './components/profil/Profil';
import NavBar from './components/navbar/Navbar';
import 'leaflet/dist/leaflet.css';
import theme from './Theme';

function App() {
  return (
    <div>
      <Router>
        <MuiThemeProvider theme={theme}>
          <NavBar />
          <Leaflet />
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route path="/Parcours" component={Parcours} />
            <Route path="/Favoris" component={Favoris} />
            <Route path="/Profil" component={Profil} />
          </Switch>
          <BottomBar />
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
