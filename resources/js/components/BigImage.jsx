import React, { useState } from 'react';
import PropTypes from 'prop-types';
import sendActionGAandYM from '../api/sendActionGAandYM';

function BigImage(props) {
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState('');
  const { setter, api, img } = props;
  const [messenger, setMessenger] = useState('');
  const [orderCall, setOrderCall] = useState({
    name: '',
    phone: '',
  });

  const handleRadio = (e) => {
    setMessenger(e.target.value);
  };

  const handleFormClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientName = orderCall.name;
    const clientPhone = orderCall.phone;
    if (clientName.length === '') {
      setIsError(true);
      setErrorText('Поле с именем должно быть заполнено');
      return;
    }
    if (clientPhone.length === '') {
      setIsError(true);
      setErrorText('Поле с телефоном должно быть заполнено');
      return;
    }
    if (clientName.search(/^[A-ЯЁ\s][а-яё\s]+/) === -1) {
      setIsError(true);
      setErrorText('Для ввода имени допускаются только кириллические символы');
      return;
    }
    if (clientName.search(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) !== -1) {
      setIsError(true);
      setErrorText('Телефон должен быть введен в формате +7ХХХХХХХХ');
    }
    if (clientPhone.search(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) !== -1
          && clientName.search(/^[A-ЯЁ][а-яё]+/) !== -1) {
      const order = await api.sendOrder(clientName, clientPhone, messenger);
      if (order === 'Заявка принята') {
        setShowResult(true);
        handleFormClick();
        setResultText('Ваша зявка принята. Мы свяжемся с Вами в ближайшее время');
      } else {
        setShowResult(true);
        handleFormClick();
        setResultText('Произошла техническая ошибка. Попробуйте отправить заявку еще раз или свяжитесь другим способом');
      }
      // Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.
    } else {
      setIsError(true);
      setErrorText('Ошибка в вводе данных. Имя должно сдержать только кириллические символы. Телефон в формате 8ХХХХХХХХХХ');
    }

    // const clientEmail = e.target.email_input.value;
    // const order = API.sendOrder(clientName, clientPhone, clientEmail).then(function(value) {
    //   console.log(typeof value);
    //   console.log(value);
    // }).catch(e => {
    //   console.log(typeof e);
    //   console.log(e);
    // });;
    // const order = await API.sendOrder(clientName, clientPhone, messenger)
  };

  const handleChange = (e) => {
    setIsError(false);
    const { name, value } = e.target;
    if (value.length > 30) {
      setIsError(true);
      setErrorText('Длина имени не может быть более 30 символов');
      return;
    }
    setIsError(false);

    setOrderCall((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearImage = () => {
    setter(null);
  };

  return (
    img !== '' && (
      <div className="big_image_wrapper">
        <div className="bi_image">
          <picture className="big_image">
            <source srcSet={`${img.img640} 1x, ${img.img1280} 2x`} media="(max-width: 640px)" />
            <source srcSet={`${img.img1280} 1x, ${img.img1980} 2x`} media="(min-width: 641px)  and (max-width: 960px)" />
            <source srcSet={img.img1980} media="(min-width: 961px)" />
            <img
              className="big_image"
              src={img.img1980}
              srcSet={`${img.img1280} 1x, ${img.img1980} 2x`}
              alt="Пример"
            />
          </picture>
          <span
            className="close_btn"
            role="button"
            onClick={clearImage}
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') clearImage(); }}
          >
            &#10008;
          </span>
        </div>
        <div className="bi_interface">
          <span className="order_form_desrc">
            <span className="fat_font">Сделайте заказ</span>
            <br />
            {' '}
            удобным Вам способом:
          </span>
          <div className="big_image_interface">

            <div className="messengers_wrapper">
              <a
                href="https://wa.me/79502013349"
                target="_blank"
                rel="noreferrer"
                aria-label="Открыть Whatsapp"
                onClick={() => {
                  sendActionGAandYM('Messenger', 'Переход WhatsApp', 'WhatsApp', 50, 'ymWhatsapp');
                  sendActionGAandYM('MessengerLink', 'messengerCard', 'messengerCard', 50, 'ymMessengerCard');
                }}
                className="header_menu_logo whatsapp_logo"
              >
                <span className="social_link_text">WhatsApp</span>
              </a>
              <a
                href="https://t.me/RomanSuvorkov"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  sendActionGAandYM('Messenger', 'Переход Telegram', 'Telegram', 50, 'ymTelegram');
                  sendActionGAandYM('MessengerLink', 'messengerCard', 'messengerCard', 50, 'ymMessengerCard');
                }}
                className="header_menu_logo telegram_logo"
              >
                <span className="social_link_text">Telegram</span>
              </a>
              <a
                href="viber://add?number=79502013349"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  sendActionGAandYM('Messenger', 'Переход Viber', 'Viber', 50, 'ymViber');
                  sendActionGAandYM('MessengerLink', 'messengerCard', 'messengerCard', 50, 'ymMessengerCard');
                }}
                className="header_menu_logo viber_logo"
              >
                <span className="social_link_text">Viber</span>
              </a>
            </div>
            <a
              className="order_mail_btn order_btn order_link"
              href="mailto:centr_ug@mail.ru?subject=Заказ на шарики &body=Здравствуйте!%0AПрошу связаться со мной.%0A%0A%0AУКАЖИТЕ ПОЖАЛУЙСТА ВАШИ КОНТАКТНЫЕ ДАННЫЕ"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                sendActionGAandYM('Email', 'emailClick', 'emailClick', 50, 'ymEmail');
              }}
            >
              Email
            </a>
            <span className="order_phone">+79502013349</span>
            <a
              className="order_btn phone_link order_link"
              href="tel:+79502013349"
              onClick={() => {
                sendActionGAandYM('phoneCall', 'phoneCall', 'phoneCall', 50, 'ymPhoneLink');
              }}
            >
              +79502013349
            </a>
            {showResult && <p>{resultText}</p>}
          </div>
          {isActive && (
            <form className="order_form" method="POST" onSubmit={(e) => handleSubmit(e)}>
              <label className="input_label" htmlFor="name">
                Ваше имя
                <input className="input_field" type="text" required name="name" onChange={(e) => handleChange(e)} />
              </label>
              <label className="input_label" htmlFor="phone">
                Телефон
                <input className="input_field" type="number" placeholder="8ХХХХХХХХХХ" required name="phone" onChange={(e) => handleChange(e)} />
              </label>
              <span className="radio_qestion">Связаться с Вами через мессенджер?</span>
              <div className="radio_wrapper">
                <label className="radio_label" htmlFor="messengersChoice1">
                  Telegramm
                  <input type="radio" id="messengersChoice1" name="messengers" value="Telegramm" onClick={(e) => handleRadio(e)} />
                </label>
                <label className="radio_label" htmlFor="messengersChoice2">
                  Whatsapp
                  <input type="radio" id="messengersChoice2" name="messengers" value="Whatsapp" onClick={(e) => handleRadio(e)} />
                </label>
                <label className="radio_label" htmlFor="messengersChoice3">
                  Viber
                  <input type="radio" id="messengersChoice3" name="messengers" value="Viber" onClick={(e) => handleRadio(e)} />
                </label>
                {/* <input
                  type="radio"
                  name="messengers"
                  value="telegramm"
                  onClick={() => setMessenger('telegramm')}
                />  */}
              </div>
              {isError && <p>{errorText}</p>}
              {/* <label className="input_label" htmlFor="email_input">Email</label>
               <input
                className="input_field"
                type="email"
                name="email_input"
                id="email_input" /> */}
              <button className="order_btn" type="button" onClick={handleFormClick}>Отменить</button>
              {!isError && <button className="order_btn" type="submit">Отправить</button>}
            </form>
          )}
        </div>

      </div>
    )
  );
}

export default BigImage;

BigImage.propTypes = {
  setter: PropTypes.func,
  img: PropTypes.shape({
    img640: PropTypes.string,
    img1280: PropTypes.string,
    img1980: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  api: PropTypes.shape({
    getAllItems: PropTypes.func,
    lazyload: PropTypes.func,
    sendOrder: PropTypes.func,
  }),
};

BigImage.defaultProps = {
  setter: () => {},
  api: {},
  img: null,
};
