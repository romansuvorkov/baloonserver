import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import wedding from '../img/wedding.jpg';
// import b2b from '../img/b2b.jpg';
// import birthday from '../img/birthday.jpg';
// import child from '../img/child.jpg';
// import bouquet from '../img/bouquet.jpg';
import wedding640 from '../img/wedding640.jpg';
import wedding1280 from '../img/wedding1280.jpg';
import b2b640 from '../img/b2b640.jpg';
import b2b1280 from '../img/b2b1280.jpg';
import birthday640 from '../img/birthday640.jpg';
import birthday1280 from '../img/birthday1280.jpg';
import child640 from '../img/child640.jpg';
import child1280 from '../img/child1280.jpg';
import bouquet640 from '../img/bouquet640.jpg';
import bouquet1280 from '../img/bouquet1280.jpg';
import bouquet1980 from '../img/bouquet1980.jpg';
// import {
//   useLocation
// } from "react-router-dom";

function ServicesList() {
  const [activeItem, setActiveItem] = useState(1);
  // let location = useLocation();

  // useEffect(() => {
  //   console.log(location);

  //   // ga.send(["pageview", location.pathname]);
  // }, [location]);

  const handleClick = (numb) => {
    const newActiveItem = activeItem + numb;
    if (newActiveItem < 1) {
      setActiveItem(5);
    } else if (newActiveItem > 5) {
      setActiveItem(1);
    } else {
      setActiveItem(newActiveItem);
    }
  };

  return (
    <div className="service_list_wrapper" id="main">
      <h2 className="header2">Наши услуги</h2>
      <main className="service_list_slider_wrapper">
        <div className="service_list_slider">
          <div className="service_list_img_wrapper">
            <picture className={activeItem === 1 ? 'service_list_img appear_img' : 'service_list_img'}>
              <source srcSet={`${wedding640} 1x, ${wedding1280} 2x`} media="(max-width: 640px)" />
              <source srcSet={wedding1280} media="(min-width: 641px)" />
              <img className={activeItem === 1 ? 'service_list_img appear_img' : 'service_list_img'} src={wedding1280} alt="Примеры свадьбы" />
            </picture>
            <picture className={activeItem === 2 ? 'service_list_img appear_img' : 'service_list_img'}>
              <source srcSet={`${b2b640} 1x, ${b2b1280} 2x`} media="(max-width: 640px)" />
              <source srcSet={b2b1280} media="(min-width: 641px)" />
              <img className={activeItem === 2 ? 'service_list_img appear_img' : 'service_list_img'} src={b2b1280} alt="Примеры для бизнеса" />
            </picture>
            {/* <img className={activeItem === 1 ? 'service_list_img appear_img' : 'service_list_img'} src={wedding} alt="Фото свадьбы" /> */}
            {/* <img className={activeItem === 2 ? 'service_list_img appear_img' : 'service_list_img'} src={b2b} alt="Фото свадьбы" /> */}
            <picture className={activeItem === 3 ? 'service_list_img appear_img' : 'service_list_img'}>
              <source srcSet={`${birthday640} 1x, ${birthday1280} 2x`} media="(max-width: 640px)" />
              <source srcSet={birthday1280} media="(min-width: 641px)" />
              <img className={activeItem === 3 ? 'service_list_img appear_img' : 'service_list_img'} src={birthday1280} alt="Примеры дней рождений" />
            </picture>
            {/* <img className={activeItem === 3 ? 'service_list_img appear_img' : 'service_list_img'} src={birthday} alt="Фото свадьбы" /> */}
            <picture className={activeItem === 4 ? 'service_list_img appear_img' : 'service_list_img'}>
              <source srcSet={`${child640} 1x, ${child1280} 2x`} media="(max-width: 640px)" />
              <source srcSet={child1280} media="(min-width: 641px)" />
              <img className={activeItem === 4 ? 'service_list_img appear_img' : 'service_list_img'} src={child1280} alt="Примеры детских праздников" />
            </picture>
            {/* <img className={activeItem === 4 ? 'service_list_img appear_img' : 'service_list_img'} src={child} alt="Фото свадьбы" /> */}
            <picture className={activeItem === 5 ? 'service_list_img appear_img' : 'service_list_img'}>
              <source srcSet={`${bouquet640} 1x, ${bouquet1280} 2x`} media="(max-width: 640px)" />
              <source srcSet={`${bouquet1280} 1x, ${bouquet1980} 2x`} media="(min-width: 641px)  and (max-width: 960px)" />
              <source srcSet={bouquet1980} media="(min-width: 961px)" />
              <img className={activeItem === 5 ? 'service_list_img appear_img' : 'service_list_img'} src={bouquet1980} alt="Букеты из шаров" />
            </picture>
            {/* <img className={activeItem === 5 ? 'service_list_img appear_img' : 'service_list_img'} src={bouquet} alt="Фото свадьбы" /> */}
          </div>
          <span
            className="left_arrow slider_navigation"
            onClick={() => handleClick(-1)}
            role="button"
            tabIndex={0}
            aria-label="Предыдущая категория"
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick(-1); }}
          />
          <span
            className="right_arrow slider_navigation"
            onClick={() => handleClick(1)}
            role="button"
            tabIndex={0}
            aria-label="Следующая категория"
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick(1); }}
          />
        </div>
        <div className="service_list_info">
          <span className={activeItem === 1 ? 'service_list_item_name vertical_text appear_top' : 'service_list_item_name vertical_text'}>Свадьба</span>
          <span className={activeItem === 2 ? 'service_list_item_name vertical_text appear_top' : 'service_list_item_name vertical_text'}>Бизнесу</span>
          <span className={activeItem === 3 ? 'service_list_item_name vertical_text appear_top' : 'service_list_item_name vertical_text'}>День рождения</span>
          <span className={activeItem === 4 ? 'service_list_item_name vertical_text appear_top' : 'service_list_item_name vertical_text'}>Детские праздники</span>
          <span className={activeItem === 5 ? 'service_list_item_name vertical_text appear_top' : 'service_list_item_name vertical_text'}>Букеты из шаров</span>
        </div>
        <div className="service_list_text_wrapper">
          <span className={activeItem === 1 ? 'service_list_text appear_left' : 'service_list_text'}>Украшение воздушными шарами свадебного зала</span>
          <span className={activeItem === 2 ? 'service_list_text appear_left' : 'service_list_text'}>Украшение магазинов при открытии и в честь праздников</span>
          <span className={activeItem === 3 ? 'service_list_text appear_left' : 'service_list_text'}>Украшение воздушными шарами залов на день рождения и другие праздники</span>
          <span className={activeItem === 4 ? 'service_list_text appear_left' : 'service_list_text'}>Украшение воздушными шарами дестких праздников</span>
          <span className={activeItem === 5 ? 'service_list_text appear_left' : 'service_list_text'}>Доставка букетов из шаров</span>
          {activeItem === 1 && <Link className="service_list_link" to="/wedding#catalog_start">Посмотреть примеры</Link>}
          {activeItem === 2 && <Link className="service_list_link" to="/business#catalog_start">Посмотреть примеры</Link>}
          {activeItem === 3 && <Link className="service_list_link" to="/birthday#catalog_start">Посмотреть примеры</Link>}
          {activeItem === 4 && <Link className="service_list_link" to="/child#catalog_start">Посмотреть примеры</Link>}
          {activeItem === 5 && <Link className="service_list_link" to="/bouqet#catalog_start">Посмотреть примеры</Link>}
        </div>
      </main>
    </div>
  );
}

export default ServicesList;
