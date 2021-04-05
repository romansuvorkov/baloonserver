import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';

function HeaderMenu() {
  const [mobMenuActive, setMobMenuActive] = useState(false);

  const handleClick = () => {
    if (mobMenuActive) {
      setMobMenuActive(false);
    } else {
      setMobMenuActive(true);
    }
  };

  const sendActionGAandYM = (category, actionName, label, value, yandexMetrics) => {
    ReactGA.event({
      category,
      action: actionName,
      label,
      value,
    });

    ym('reachGoal', yandexMetrics);
  };

  return (
    <header className="head_menu">
      <nav className="header_menu">
        <ul className="header_menu_list">
          <li className="header_menu_list_point"><Link className="link" to="/#main" onClick={handleClick}>Главная страница</Link></li>
          <li className="header_menu_list_point"><Link className="link" to="/wedding#catalog_start">Украшение свадеб</Link></li>
          <li className="header_menu_list_point"><Link className="link" to="/business#catalog_start">Украшение магазинов</Link></li>
          <li className="header_menu_list_point"><Link className="link" to="/birthday#catalog_start">День рождения</Link></li>
          <li className="header_menu_list_point"><Link className="link" to="/child#catalog_start">Детские праздники</Link></li>
          <li className="header_menu_list_point"><Link className="link" to="/bouqet#catalog_start">Букеты из шаров</Link></li>
        </ul>
      </nav>
      <div
        className={mobMenuActive ? 'mobile_menu_wrapper mobile_menu_active' : 'mobile_menu_wrapper'}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') handleClick(); }}
      >
        <div className="burger_line first" />
        <div className="burger_line second" />
        <div className="burger_line third" />
        <div className="burger_line fourth" />
        <nav className="mobile_menu">
          <Link className="mobile_menu_link link" to="/#main" onClick={handleClick}>Главная страница</Link>
          <Link className="mobile_menu_link link" to="/wedding#catalog_start" onClick={handleClick}>Украшение свадеб</Link>
          <Link className="mobile_menu_link link" to="/business#catalog_start" onClick={handleClick}>Украшение магазинов</Link>
          <Link className="mobile_menu_link link" to="/birthday#catalog_start" onClick={handleClick}>День рождения</Link>
          <Link className="mobile_menu_link link" to="/child#catalog_start" onClick={handleClick}>Детские праздники</Link>
          <Link className="mobile_menu_link link" to="/bouqet#catalog_start" onClick={handleClick}>Букеты из шаров</Link>
        </nav>
      </div>
      <a
        href="https://wa.me/79521381601"
        target="_blank"
        rel="noreferrer"
        className="header_menu_logo whatsapp_logo"
        onClick={() => {
          sendActionGAandYM('Messenger', 'Переход WhatsApp', 'WhatsApp', 50, 'ymWhatsapp');
          sendActionGAandYM('MessengerLink', 'messengerHeader', 'headerMessenger', 50, 'ymHeaderLink');
        }}
      >
        <span className="social_link_text">WhatsApp</span>
      </a>
      <a
        href="https://t.me/RomanSuvorkov"
        target="_blank"
        rel="noreferrer"
        className="header_menu_logo telegram_logo"
        onClick={() => {
          sendActionGAandYM('Messenger', 'Переход Telegram', 'Telegram', 50, 'ymTelegram');
          sendActionGAandYM('MessengerLink', 'messengerHeader', 'headerMessenger', 50, 'ymHeaderLink');
        }}
      >
        <span className="social_link_text">Telegram</span>
      </a>
      <a
        href="viber://add?number=79521381601"
        target="_blank"
        rel="noreferrer"
        className="header_menu_logo viber_logo"
        onClick={() => {
          sendActionGAandYM('Messenger', 'Переход Viber', 'Viber', 50, 'ymViber');
          sendActionGAandYM('MessengerLink', 'messengerHeader', 'headerMessenger', 50, 'ymHeaderLink');
        }}
      >
        <span className="social_link_text">Viber</span>
      </a>

      {/* <img className="header_menu_logo" src={whats_logo} alt="WhatsApp"/> */}
      <span className="phone phone_text">+79521381601</span>
      <a
        className="phone phone_link"
        href="tel:+79521381601"
        onClick={() => {
          sendActionGAandYM('phoneCall', 'phoneCall', 'phoneCall', 50, 'ymPhoneLink');
          sendActionGAandYM('MessengerLink', 'messengerHeader', 'headerMessenger', 50, 'ymHeaderLink');
        }}
      >
        +79521381601
      </a>
    </header>
  );
}

export default HeaderMenu;
