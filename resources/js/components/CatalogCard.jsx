import React from 'react';

function CatalogCard(props) {

  const setImage = props.setter;

  const handleClick = () => {
    setImage(props.descr.img);
  }
  
    return (
        <div className="catalog_card">
          <div className="catalog_img_wrapper">
            <img className="catalog_card_img" onClick={handleClick} src={props.descr.img} alt="Пример"/>
          </div>
          <div className="catalog_card_text_wrapper">
            <span className="catalog_card_text">{props.descr.description}</span>
          </div>
          <span className="catalog_card_price">Цена:{props.descr.price} руб.</span>
        </div>
    );
  }
  
  export default CatalogCard;