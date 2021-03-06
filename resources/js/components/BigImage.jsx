import React, {useState} from 'react';


function BigImage(props) {

    const [isActive, setIsActive] = useState(false);
    const [isError, setIsError] = useState(false);
    const setImage = props.setter;
    const API = props.api;
    // const screenWidth = props.screen;
    const [messenger, setMessenger] = useState('');
    const [orderCall, setOrderCall] = useState({
      name: '',
      phone: '',
    });

    const handleRadio = (e) => {
      setMessenger(e.target.value);
      // console.log(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const clientName = orderCall.name;
      const clientPhone = orderCall.phone;
      if (clientPhone.search(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) !== -1 
          && clientName.search(/^[A-ЯЁ][а-яё]+/) !== -1) {
        const order = await API.sendOrder(clientName, clientPhone, messenger);
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

    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (value.length > 20) {
        setIsError(true);
        console.log("work");
        return;
      } else {
        setIsError(false);
      }
      setOrderCall((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleFormClick = () => {
      isActive ? setIsActive(false) : setIsActive(true);
    }

    const clearImage = () =>{
        setImage('');
    }

    return (
      props.img !== '' && <div className="big_image_wrapper">
          <div className="bi_image">
            <img className="big_image" src={props.img} alt="Пример"/>
            <span className="close_btn" onClick={clearImage}>&#10008;</span>
          </div>
          <div className="bi_interface">
            <span className="order_form_desrc"><span className="fat_font">Сделайте заказ</span><br/> удобным Вам способом:</span>
            <div className="big_image_interface">
              <a href="https://wa.me/79521381601?text=Тестовый+текст" target="_blank" rel="noreferrer" className="order_link order_wsapp_btn order_btn">WhatsApp</a>
              <a className="order_mail_btn order_btn order_link"
                href="mailto:centr_ug@mail.ru?subject=Игрушка с метрикой лев &body=Здравствуйте!%0AПрошу направить предложение по макетам для игрушки - лев.%0A%0A%0AУКАЖИТЕ ПОЖАЛУЙСТА ВАШЕ ИМЯ%0AУКАЖИТЕ ПОЖАЛУЙСТА ВАШ ТЕЛЕФОН%0A%0A%0AВ ответном письме Вы получите варианты макетов. Любой из макетов может быть изменен по Вашему желанию."
                target="_blank"
              >Email</a>
              <span className="order_phone">888888888</span>
              <a className="order_btn phone_link order_link" href="tel:+79521381601">+79521381601</a>
              <span className="order_by_form order_btn" onClick={handleFormClick}>Заказать звонок</span>
            </div>
            {isActive && <form className="order_form" method="POST" onSubmit={(e) => handleSubmit(e)}>
              <label className="input_label" htmlFor="name_input">Ваше имя</label>
              <input className="input_field" type="text" name="name" onChange={(e) => handleChange(e)}/>
              <label className="input_label" htmlFor="phone_input">Телефон</label>
              <input className="input_field" type="number" name="phone" onChange={(e) => handleChange(e)} />
              <span className="radio_qestion">Связаться с Вами через мессенджер?</span>
              <div className="radio_wrapper">
              <input type="radio" id="messengersChoice1" name="messengers" value="Telegramm" onClick={(e) => handleRadio(e)}/>
              <label htmlFor="messengersChoice1">Telegramm</label>
              <input type="radio" id="messengersChoice2" name="messengers" value="Whatsapp" onClick={(e) => handleRadio(e)} />
              <label htmlFor="messengersChoice2">Whatsapp</label>
              <input type="radio" id="messengersChoice3" name="messengers" value="Viber" onClick={(e) => handleRadio(e)} />
              <label htmlFor="messengersChoice3">Viber</label>
                {/* <input
                  type="radio"
                  name="messengers"
                  value="telegramm"
                  onClick={() => setMessenger('telegramm')}
                />  */}
              </div>
              {isError && <p>Максимальная длина имени 20 символов</p>}
              {/* <label className="input_label" htmlFor="email_input">Email</label>
               <input className="input_field" type="email" name="email_input" id="email_input" /> */}
              {!isError && <button className="order_btn" type="submit">Отправить</button>}
            </form>}    
          </div>
        

      </div>
    );
  }
  
  export default BigImage;