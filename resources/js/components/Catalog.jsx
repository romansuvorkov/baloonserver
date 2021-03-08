import React, {useState} from 'react';
import CatalogCard from './CatalogCard';
import BigImage from './BigImage';
import Description from './Description';
import Api from '../api/API';

function Catalog(props) {
  const [activeImage, setActiveImage] = useState('');
  const [lastItem, setLastItem] = useState(5);
  const [items, setItems] = useState([]);
  const [showButtonActive, setShowButtonActive] = useState(true);
  const category = props.category;
  const API = new Api;
  let screenWidth = 0;

  React.useEffect( () => {
    setItems([]);
    setLastItem(5);
    screenWidth = window.screen.width;
    if (screenWidth <= 1024) {
      setShowButtonActive(true);
      const loadedItems = API.lazyload(category, 0).then(function(value) {
        setItems(prevState => ([...prevState, ...value]));
      });
    } else {
      setShowButtonActive(false);
      const loadedItems = API.getAllItems(category).then(function(value) {
        setItems(value);
      });
    }
  }, [category]);

  const handleMoreClick = async () => {
    const loadedItems = await API.lazyload(category, lastItem);
    console.log(loadedItems);
    console.log(lastItem);
    if (loadedItems.length < 5) {
      setShowButtonActive(false);
    }
    if (loadedItems.length > 0) {
      setItems(prevState => ([...prevState, ...loadedItems]));
      const loadedNumb = lastItem + 5;
      setLastItem(loadedNumb);
    }
    // const loadedItems = API.lazyload(category, lastItem).then(function(value) {
    //   if (value.length < 5) {
    //     setShowButtonActive(false);
    //   }
    //   setItems(prevState => ([...prevState, ...value]));
    // });
  }

    return (
      <div className="catalog_wrapper">
        <h2 className="header2" id="catalog_start">{props.header}</h2>
        <Description />
        <div className="catalog_list_wrapper">
          {items.map(o => (
            <CatalogCard key={o.id} descr={o} setter={setActiveImage}/>
          ))}
          <BigImage setter={setActiveImage} screen={screenWidth} img={activeImage} api={API}/>      
        </div>
        {showButtonActive && <button className="show_more_btn" onClick={handleMoreClick}>Ещё</button>}   
      </div>
    );
  }
  
  export default Catalog;