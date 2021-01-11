import React, {useState} from 'react';
import CatalogCard from './CatalogCard';
import BigImage from './BigImage';
import Api from '../api/API';

function Catalog(props) {
  const [activeImage, setActiveImage] = useState('');
  const [lastItem, setLastItem] = useState(5);
  // let lastItem = 0;
  const [items, setItems] = useState([]);
  const [showButtonActive, setShowButtonActive] = useState(true);
  const category = props.category;
  const API = new Api;
  // const category = 'test';

  React.useEffect( () => {
    // setItems(await API.getAllItems(category));
    // console.log('work');
    // console.log(category);
    setItems([]);
    setLastItem(5);
    let screenWidth = window.screen.width;
    if (screenWidth < 1024) {
      // console.log('work123123');
      // console.log(lastItem);
      setShowButtonActive(true);
      // setItems(API.lazyload(category, lastItem));
      const loadedItems = API.lazyload(category, 0).then(function(value) {
        // setLastItem(lastItem + 5);
        // lastItem = lastItem + 5;
        setItems(prevState => ([...prevState, ...value])); // Успех!
        // setTables(prevState => ({...prevState, ...prevState[activeTable].orderer = ''}));
        // console.log(items.length);
        // console.log(items.length);
      });
      // setItems(await API.lazyload(category, 3));
    } else {
      setShowButtonActive(false);
      // setItems(API.getAllItems(category));
      const loadedItems = API.getAllItems(category).then(function(value) {
        setItems(value); // Успех!
      });
      // const test = API.getAllItems(category).then(function(value) {
      //   setItems(value);
      // });
      // setItems(await API.getAllItems(category));
    }
    // console.log(window.screen.width);
    // setItems(await API.lazyload(category, 2));
    // setItems(await API.getAllItems(category));
    // Api.getAllPosts(category).then(res => {
    //   console.log(res.data.data);
    //   setItems(res.data.data);
    // })
  }, [category]);

  const handleMoreClick = () => {
    const loadedItems = API.lazyload(category, lastItem).then(function(value) {
      if (value.length < 5) {
        setShowButtonActive(false);
      }
      setItems(prevState => ([...prevState, ...value])); // Успех!
    });
    console.log(items.length);
    // lastItem = lastItem + 5;
    // setLastItem(items.length);
    console.log(lastItem);
  }

    return (
      <div className="catalog_wrapper">
        <h2 className="header2" id="catalog_start">{props.header}</h2>
        <div className="catalog_list_wrapper">
          {items.map(o => (
            <CatalogCard key={o.id} descr={o} setter={setActiveImage}/>
          ))}
          <BigImage setter={setActiveImage} img={activeImage} api={API}/>      
        </div>
        {showButtonActive && <button className="show_more_btn" onClick={handleMoreClick}>Ещё</button>}   
      </div>
    );
  }
  
  export default Catalog;