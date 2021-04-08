import React from 'react';
import baloons800 from '../img/baloons800.png';
import baloons1600 from '../img/baloons1600.png';
import confetti from '../img/confetti.png';

function Header() {
  return (
    <header className="main_page_header">
      <div className="image_hero">
        <picture className="header_background_baloons">
          <source srcSet={`${baloons800} 1x, ${baloons1600} 2x`} media="(max-width: 640px)" />
          <source srcSet={`${baloons800} 1x, ${baloons1600} 2x`} media="(min-width: 641px)  and (max-width: 960px)" />
          <source srcSet={baloons1600} media="(min-width: 961px)" />
          <img className="header_background_baloons" src={baloons1600} srcSet={`${baloons800} 1x, ${baloons1600} 2x`} alt="Шарики для фона" />
        </picture>
        {/* <img className="header_background_baloons" src={baloons} alt="Шарики для фона" /> */}
        <img className="header_background_confetti" src={confetti} alt="Конфетти для фона" />
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
