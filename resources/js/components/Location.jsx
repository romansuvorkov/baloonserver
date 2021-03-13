import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';

function Location() {
  const location = useLocation();
  useEffect(() => {
    // console.log('work history useLocation');
    // console.log(location);
    const currentPath = location.pathname;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);
    ym('hit', currentPath);
    // const searchParams = new URLSearchParams(location.search);
    // console.log(searchParams);
  }, [location]);
  return <div />;
}

export default Location;
