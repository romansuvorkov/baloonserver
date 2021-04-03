import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CatalogCard from './CatalogCard';
import BigImage from './BigImage';
import Api from '../api/API';

function Catalog(props) {
  const [activeImage, setActiveImage] = useState(null);
  const [lastItem, setLastItem] = useState(5);
  const [items, setItems] = useState([]);
  const [showButtonActive, setShowButtonActive] = useState(true);
  const { category, header } = props;
  const API = new Api();
  let screenWidth = 0;

  React.useEffect(async () => {
    setItems([]);
    setLastItem(5);
    screenWidth = window.screen.width;
    if (screenWidth <= 1024) {
      setShowButtonActive(true);
      const loadedItems = await API.lazyload(category, 0);
      setItems((prevState) => ([...prevState, ...loadedItems]));
    } else {
      setShowButtonActive(false);
      const loadedItems = await API.getAllItems(category);
      setItems(loadedItems);
    }
  }, [category]);

  const handleMoreClick = async () => {
    const loadedItems = await API.lazyload(category, lastItem);
    if (loadedItems.length < 5) {
      setShowButtonActive(false);
    }
    if (loadedItems.length > 0) {
      setItems((prevState) => ([...prevState, ...loadedItems]));
      const loadedNumb = lastItem + 5;
      setLastItem(loadedNumb);
    }
    // const loadedItems = API.lazyload(category, lastItem).then(function(value) {
    //   if (value.length < 5) {
    //     setShowButtonActive(false);
    //   }
    //   setItems(prevState => ([...prevState, ...value]));
    // });
  };

  return (
    <div className="catalog_wrapper">
      <h2 className="header2">{header}</h2>
      <div className="catalog_list_wrapper">
        {items.map((o) => (
          <CatalogCard key={o.id} descr={o} setter={setActiveImage} />
        ))}
        {activeImage && <BigImage setter={setActiveImage} img={activeImage} api={API} />}
      </div>
      {showButtonActive && <button type="button" className="show_more_btn" onClick={handleMoreClick}>Ещё</button>}
    </div>
  );
}

export default Catalog;

Catalog.propTypes = {
  category: PropTypes.string,
  header: PropTypes.string,
};

Catalog.defaultProps = {
  category: null,
  header: null,
};
