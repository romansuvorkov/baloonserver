import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import wedding from '../img/wedding.jpg';
import b2b from '../img/b2b.jpg';
import birthday from '../img/birthday.jpg';
import child from '../img/child.jpg';
import bouquet from '../img/bouquet.jpg';
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
            <img className={activeItem === 1 ? 'service_list_img appear_img' : 'service_list_img'} src={wedding} alt="Фото свадьбы" />
            <img className={activeItem === 2 ? 'service_list_img appear_img' : 'service_list_img'} src={b2b} alt="Фото свадьбы" />
            <img className={activeItem === 3 ? 'service_list_img appear_img' : 'service_list_img'} src={birthday} alt="Фото свадьбы" />
            <img className={activeItem === 4 ? 'service_list_img appear_img' : 'service_list_img'} src={child} alt="Фото свадьбы" />
            <img className={activeItem === 5 ? 'service_list_img appear_img' : 'service_list_img'} src={bouquet} alt="Фото свадьбы" />
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
