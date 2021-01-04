import React from 'react';

function BigImage(props) {

    const setImage = props.setter;

    const clearImage = () =>{
        setImage('');
    }

    return (
      props.img !== '' && <div className="big_image_wrapper">
          <img className="big_image" src={props.img} alt="Пример"/>
          <span className="close_btn" onClick={clearImage}>X</span>
      </div>
    );
  }
  
  export default BigImage;