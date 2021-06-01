import React from 'react';
import "./Book.css"


function Book(props) {
  //console.log(props)
  return (
    
    <div className="book"> 
      <div className="book_container">
      <img src={props.imageUrl}alt="" />
      <div className="book__info">
        <span className="book__title">{props.title}</span>
        <span className="book__author">{props.author}</span>
      </div>
      
      </div>
    </div>
  )
}

export default Book
