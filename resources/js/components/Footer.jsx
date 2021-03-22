import React from 'react';
import baloons from '../img/baloons.png';

function Footer() {
  return (
    <footer className="main_footer">
      <h2 className="header2">Контакты</h2>
      <div className="footer_wrapper">
        <span className="phone phone_text">+79521381601</span>
        <a className="phone phone_link" href="tel:+79521381601">+79521381601</a>
        <span className="city">г. Каменск-Уральский</span>
        <div className="footer_social">
          <ul className="socials">
            <li className="socials_item"><a href="https://wa.me/79521381601?text=Тестовый+текст" target="_blank" rel="noreferrer" className="socials_link socials_link_fb"><span className="social_link_text">Facebook</span></a></li>
            <li className="socials_item"><a href="https://ok.ru/profile/570837118023/statuses" target="_blank" rel="noreferrer" className="socials_link socials_link_ok"><span className="social_link_text">Одноклассники</span></a></li>
            <li className="socials_item"><a href="https://vk.com/uralgraf395355" target="_blank" rel="noreferrer" className="socials_link socials_link_vk"><span className="social_link_text">Вконтакте</span></a></li>
            <li className="socials_item"><a href="https://www.instagram.com/uralgraf.ru/" target="_blank" rel="noreferrer" className="socials_link socials_link_instagram"><span className="social_link_text">instagram</span></a></li>
          </ul>
        </div>
        <div className="footer_baloons_wrapper"><img className="footer_baloons" src={baloons} alt="Шарики для фона" /></div>
      </div>

    </footer>
  );
}

export default Footer;
