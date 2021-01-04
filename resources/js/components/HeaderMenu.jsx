import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function HeaderMenu() {

    const [mobMenuActive, setMobMenuActive] = useState(false);

    const handleClick = () => {
        if (mobMenuActive) {
            setMobMenuActive(false);
        } else {
            setMobMenuActive(true);
        }
    }

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
        <div className={mobMenuActive ? "mobile_menu_wrapper mobile_menu_active" : "mobile_menu_wrapper"} onClick={handleClick}>
            {/* <input type="checkbox" id="check_menu" />
            <label htmlFor="check_menu" className="check_menu_label"></label> */}
            <div className="burger_line first"></div>
            <div className="burger_line second"></div>
            <div className="burger_line third"></div>
            <div className="burger_line fourth"></div>
            <nav className="mobile_menu">
                <Link className="mobile_menu_link link" to="/#main" onClick={handleClick}>Главная страница</Link>
                <Link className="mobile_menu_link link" to="/wedding#catalog_start" onClick={handleClick}>Украшение свадеб</Link>
                <Link className="mobile_menu_link link" to="/business#catalog_start" onClick={handleClick}>Украшение магазинов</Link>
                <Link className="mobile_menu_link link" to="/birthday#catalog_start" onClick={handleClick}>День рождения</Link>
                <Link className="mobile_menu_link link" to="/child#catalog_start" onClick={handleClick}>Детские праздники</Link>
                <Link className="mobile_menu_link link" to="/bouqet#catalog_start" onClick={handleClick}>Букеты из шаров</Link>
            </nav>
        </div>
        <span className="phone">+88888888</span>
        </header>
    );
  }
  
  export default HeaderMenu;

