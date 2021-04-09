import React from 'react';
import sendActionGAandYM from '../api/sendActionGAandYM';
import baloons800 from '../img/baloons800.png';

function Footer() {

  return (
    <footer className="main_footer">
      <h2 className="header2">Контакты</h2>
      <div className="footer_wrapper">
        <span className="phone phone_text">+79502013349</span>
        <a
          className="phone phone_link"
          href="tel:+79502013349"
          onClick={() => {
            sendActionGAandYM('phoneCall', 'phoneCall', 'phoneCall', 50, 'ymPhoneLink');
            sendActionGAandYM('Footer', 'Footer', 'FooterClick', 50, 'ymFooter');
          }}
        >
          +79502013349
        </a>
        <a
          className="email_footer"
          href="mailto:brigidaev1982@gmail.com?subject=Заказ на шарики &body=Здравствуйте!%0AПрошу связаться со мной.%0A%0A%0AУКАЖИТЕ ПОЖАЛУЙСТА ВАШИ КОНТАКТНЫЕ ДАННЫЕ"
          onClick={() => {
            sendActionGAandYM('Email', 'emailClick', 'emailClick', 50, 'ymEmail');
            sendActionGAandYM('Footer', 'Footer', 'FooterClick', 50, 'ymFooter');
          }}
        >
          brigidaev1982@gmail.com
        </a>
        <span className="city">г. Каменск-Уральский</span>
        <div className="footer_social">
          <ul className="socials">
            <li className="socials_item">
              <a
                href="https://wa.me/79502013349?text=Тестовый+текст"
                target="_blank"
                rel="noreferrer"
                className="socials_link socials_link_fb"
                onClick={() => {
                  sendActionGAandYM('socialLink', 'facebookLink', 'facebookLink', 50, 'ymFacebook');
                }}
              >
                <span className="social_link_text">Facebook</span>
              </a>
            </li>
            <li className="socials_item">
              <a
                href="https://ok.ru/profile/570837118023/statuses"
                target="_blank"
                rel="noreferrer"
                className="socials_link socials_link_ok"
                onClick={() => {
                  sendActionGAandYM('socialLink', 'okLink', 'okLink', 50, 'ymOK');
                }}
              >
                <span className="social_link_text">Одноклассники</span>
              </a>
            </li>
            <li className="socials_item">
              <a
                href="https://vk.com/uralgraf395355"
                target="_blank"
                rel="noreferrer"
                className="socials_link socials_link_vk"
                onClick={() => {
                  sendActionGAandYM('socialLink', 'vkLink', 'vkLink', 50, 'ymVK');
                }}
              >
                <span className="social_link_text">Вконтакте</span>
              </a>
            </li>
            <li className="socials_item">
              <a
                href="https://www.instagram.com/uralgraf.ru/"
                target="_blank"
                rel="noreferrer"
                className="socials_link socials_link_instagram"
                onClick={() => {
                  sendActionGAandYM('socialLink', 'instagramLink', 'instagramLink', 50, 'ymInstagram');
                }}
              >
                <span className="social_link_text">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_baloons_wrapper"><img className="footer_baloons" src={baloons800} alt="Шарики для фона" /></div>
      </div>

    </footer>
  );
}

export default Footer;
