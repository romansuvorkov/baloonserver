import React from 'react';

function CatalogCard(props) {
  const setImage = props.setter;

  const handleClick = () => {
    setImage(props.descr.img);
  };

  return (
    <div className="catalog_card">
      <div className="catalog_img_wrapper">
        <picture className="catalog_card_img" onClick={handleClick}>
          <source srcSet={`${props.descr.img} 1x, images/ok200.jpg 2x`} media="(max-width: 640px)" />
          <source srcSet={`${props.descr.img} 1x, images/ok200.jpg 2x`} media="(min-width: 641px)  and (max-width: 960px)" />
          <source srcSet={props.descr.img} media="(min-width: 961px)" />
          <img className="catalog_card_img" onClick={handleClick} src={props.descr.img} srcSet={`${props.descr.img} 1x, images/ok200.jpg 2x`} alt="Footballer picture" />
        </picture>
        {/* <img className="catalog_card_img" onClick={handleClick} src={props.descr.img} alt="Пример" /> */}
      </div>
      <div className="catalog_card_text_wrapper">
        <span className="catalog_card_text">{props.descr.description}</span>
      </div>
      <span className="catalog_card_price">
        Цена:
        {props.descr.price}
        {' '}
        руб.
      </span>
    </div>
  );
}

export default CatalogCard;
