import React, { useEffect } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import ServiceList from './components/ServicesList';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Location from './components/Location';
import './App.css';
// import itemsData from './data/itemsData';

function Application() {
  // let location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-191777035-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // useEffect(() => {
  //   console.log(location);

  //   // ga.send(["pageview", location.pathname]);
  // }, [location]);

  return (
    <Router>
      <div className="App">
        <HeaderMenu />
        <RouteChangeTracker />
        <Location />
        <YMInitializer accounts={[73558078]} options={{ webvisor: true }} />
        <Header />
        <Switch>
          <Route path="/" exact>
            <ServiceList />
          </Route>
          <Route path="/child">
            <Catalog category="child" header="Примеры украшения дестких праздников" />
          </Route>
          <Route path="/wedding">
            <Catalog category="wedding" header="Примеры украшения свадеб" />
          </Route>
          <Route path="/business">
            <Catalog category="business" header="Примеры украшения магазинов" />
          </Route>
          <Route path="/birthday">
            <Catalog category="birthday" header="Примеры украшения залов на день рождения" />
          </Route>
          <Route path="/bouqet">
            <Catalog category="bouqet" header="Доставка букетов из шаров" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default Application;
