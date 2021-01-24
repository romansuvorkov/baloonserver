import React from 'react';
import baloons from '../img/baloons.png';
import confetti from '../img/confetti.png';

function Header() {
    return (
      <header className="main_page_header">
        <div className="image_hero">
          <img className="header_background_baloons" src={baloons} alt="Шарики для фона"/>
          <img className="header_background_confetti" src={confetti} alt="Конфетти для фона"/>
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

