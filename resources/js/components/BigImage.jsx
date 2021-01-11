import React from 'react';

function BigImage(props) {

    const setImage = props.setter;
    const API = props.api;

    const handleSubmit = (e) => {
      e.preventDefault();
      const test = API.sendOrder('category123', 'lastItem').then(function(value) {
        console.log(value);
      }).catch(e => {
        console.log(e);
    });;
    }

    const clearImage = () =>{
        setImage('');
    }

    return (
      props.img !== '' && <div className="big_image_wrapper">
          <img className="big_image" src={props.img} alt="Пример"/>
          <span className="close_btn" onClick={clearImage}>X</span>
          <div className="big_image_interface">
            <span className="order_mob_mail_btn">Заказать по почте</span>
            <div className="order_form">
              <span className="order_mail_btn">Заказать по почте</span>
            </div>
            <span className="order_wsapp_btn">Заказать по WhatsApp</span>
          </div>
          <form method="POST">
            <label htmlFor="type_id">
                Тип ID
                <input type="text" name="type_id" id="type_id" />
            </label>
            <label htmlFor="filling">
                Начинка
                <input type="text" name="filling" id="filling" />
            </label>
            <label htmlFor="price">
                Цена
                <input type="text" name="price" id="price" />
            </label>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Создать</button>
          </form>
      </div>
    );
  }
  
  export default BigImage;