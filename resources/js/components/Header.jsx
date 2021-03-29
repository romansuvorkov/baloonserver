import React from 'react';
import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';
import baloons from '../img/baloons.png';
import confetti from '../img/confetti.png';

function Header() {
  return (
    <header className="main_page_header">
      <div className="image_hero">
        <picture className="header_background_baloons">
          <source srcSet={`${baloons} 1x, images/baloons.png 2x`} media="(max-width: 640px)" />
          <source srcSet={`${baloons} 1x, images/baloons.png 2x`} media="(min-width: 641px)  and (max-width: 960px)" />
          <source srcSet={baloons} media="(min-width: 961px)" />
          <img className="header_background_baloons" src={baloons} srcSet={`${baloons} 1x, images/baloons.png 2x`} alt="Шарики для фона" />
        </picture>
        {/* <img className="header_background_baloons" src={baloons} alt="Шарики для фона" /> */}
        <picture className="header_background_confetti">
          <source srcSet={`${confetti} 1x, images/confetti.png 2x`} media="(max-width: 640px)" />
          <source srcSet={`${confetti} 1x, images/confetti.png 2x`} media="(min-width: 641px)  and (max-width: 960px)" />
          <source srcSet={confetti} media="(min-width: 961px)" />
          <img className="header_background_confetti" src={confetti} srcSet={`${confetti} 1x, images/confetti.png 2x`} alt="Конфетти для фона" />
        </picture>
        {/* <img className="header_background_confetti" src={confetti} alt="Конфетти для фона" /> */}
        <div className="header_name">
          <span className="name_item">Русский</span>
          <span className="name_item">Праздник</span>
        </div>
      </div>

      <h1 className="main_header">Доставка букетов из воздушных шаров и украшение мероприятий в Каменске-Уральском</h1>

    </header>
  );
}

export default Header;
