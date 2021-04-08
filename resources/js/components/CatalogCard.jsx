import React from 'react';
import PropTypes from 'prop-types';

function CatalogCard(props) {
  const { setter, descr } = props;

  const handleClick = () => {
    setter(descr);
  };

  return (
    <div className="catalog_card">
      <div className="catalog_img_wrapper">
        <picture
          className="catalog_card_img"
          onClick={handleClick}
          onKeyPress={(e) => { if (e.key === 'Enter') handleClick(); }}
        >
          <source srcSet={`${descr.img640} 1x, ${descr.img1280} 2x`} media="(max-width: 640px)" />
          {descr.img1980 !== null ?
            <source srcSet={`${descr.img1280} 1x, ${descr.img1980} 2x`} media="(min-width: 641px)  and (max-width: 960px)" />
            : <source srcSet={descr.img1280} media="(min-width: 641px)  and (max-width: 960px)" />
          }
          {descr.img1280 !== null ? <source srcSet={descr.img1280} media="(min-width: 961px)" />
            : <source srcSet={descr.img1280} media="(min-width: 961px)" />
          }
          {descr.img1980 !== null ? 
          <img
            className="catalog_card_img"
            onClick={handleClick}
            src={descr.img1980}
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick(); }}
            srcSet={`${descr.img1280} 1x, ${descr.img1980} 2x`}
            alt="Пример"
          />
          :
          <img
            className="catalog_card_img"
            onClick={handleClick}
            src={descr.img1280}
            onKeyPress={(e) => { if (e.key === 'Enter') handleClick(); }}
            srcSet={descr.img1280}
            alt="Пример"
          />
          }
        </picture>
      </div>
      <div className="catalog_card_text_wrapper">
        <span className="catalog_card_text">{descr.description}</span>
      </div>
      <span className="catalog_card_price">
        Цена:
        {descr.price}
        {' '}
        руб.
      </span>
    </div>
  );
}

export default CatalogCard;

CatalogCard.propTypes = {
  setter: PropTypes.func,
  descr: PropTypes.shape({
    img640: PropTypes.string,
    img1280: PropTypes.string,
    img1980: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

CatalogCard.defaultProps = {
  setter: () => {},
  descr: {},
};
