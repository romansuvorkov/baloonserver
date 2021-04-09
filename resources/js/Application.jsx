import React, { useEffect, Suspense } from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import ReactGA from 'react-ga';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import ServiceList from './components/ServicesList';
// import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Location from './components/Location';
// import Advantage from './components/Advantage';
// import Page404 from './components/Page404';
import './App.css';
const Advantage = React.lazy(() => import('./components/Advantage'));
const Page404 = React.lazy(() => import('./components/Page404'));
const Catalog = React.lazy(() => import('./components/Catalog'));

function Application() {

  useEffect(() => {
    ReactGA.initialize('UA-191777035-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Suspense fallback={<div className="preloader">
                              <span />
                              <span />
                              <span />
                              <span />
                            </div>}> */}
          <HeaderMenu />
          {/* <RouteChangeTracker /> */}
          <Location />
          <YMInitializer accounts={[73558078]} options={{ webvisor: true }} />
          <Header />
          <Switch>
            <Route path="/" exact>
              <ServiceList />
            </Route>
            <Suspense fallback={<div className="preloader">
                              <span />
                              <span />
                              <span />
                              <span />
                            </div>}>
            <Route path="/child">
              <Advantage dataText={[
                'Три варианта оформления Вашего праздника уже через час после заявки',
                'Без обработки гарантия полета 8 часов',
                'С обработкой hi-float гаратия полета 20 часов',
              ]}
              />
              <Catalog category="child" header="Примеры оформления дестких праздников" />
            </Route>
            <Route path="/wedding">
              <Advantage dataText={[
                'Три варианта оформления Вашего праздника уже через час после заявки',
                'Без обработки гарантия полета 8 часов',
                'С обработкой hi-float гаратия полета 20 часов',
              ]}
              />
              <Catalog category="wedding" header="Примеры оформления свадеб" />
            </Route>
            <Route path="/business">
              <Advantage dataText={[
                'Три варианта оформления Вашего праздника уже через час после заявки',
                'Без обработки гарантия полета 8 часов',
                'С обработкой hi-float гаратия полета 20 часов',
              ]}
              />
              <Catalog category="business" header="Примеры оформления магазинов" />
            </Route>
            <Route path="/birthday">
              <Advantage dataText={[
                'Три варианта оформления Вашего праздника уже через час после заявки',
                'Без обработки гарантия полета 8 часов',
                'С обработкой hi-float гаратия полета 20 часов',
              ]}
              />
              <Catalog category="birthday" header="Примеры оформления дней рождения" />
            </Route>
            <Route path="/bouqet">
              <Advantage dataText={[
                'Готовность букета в течение 3 часов',
                'Без обработки гарантия полета 8 часов',
                'С обработкой hi-float гаратия полета 20 часов',
                'Бесплатная доставка по Каменску-Уральскому',
              ]}
              />
              <Catalog category="bouqet" header="Доставка букетов из шаров" />
            </Route>
            <Route path="/404" exact>
              <Page404 />
            </Route>
            <Route path="*">
              <Redirect to="/404" />
            </Route>
            </Suspense>
          </Switch>
          <Footer />
        {/* </Suspense> */}
      </div>
    </Router>

  );
}

export default Application;
