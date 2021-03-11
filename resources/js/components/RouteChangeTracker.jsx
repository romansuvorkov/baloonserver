import React from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';
const RouteChangeTracker = ({ history }) => {

    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname });
        // ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(location.pathname);
        ym('hit', location.pathname);
        // <YMInitializer accounts={[987654321]} options={{webvisor: true}}/>
    });

    return <div></div>;
};

export default withRouter(RouteChangeTracker);