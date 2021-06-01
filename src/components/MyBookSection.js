import React from 'react'
import "./MyBookSection.css";
import Book from "./Book"
function MyBookSection(props) {
  return (
    <div className="myBookSection">
      <h4>{props.section}</h4>
      <div className="myBookSection_bookSection">
        <Book 
        imageUrl="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg" 
        title="Ikigai" 
        author=" Héctor García and Francesc Miralles "/>
        <Book 
        imageUrl="https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg" 
        title="The Intelligent Investor" 
        author=" Benjamin Graham  "/>
        <Book 
        imageUrl="https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg" 
        title="The Psychology of Money" 
        author=" Morgan Housel "/>
        <Book 
        imageUrl="https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" 
        title="Atomic Habits" 
        author=" James Clear "/>
        {/* <Book 
        imageUrl="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg" 
        title="Ikigai" 
        author=" Héctor García and Francesc Miralles "/> */}
      </div>
    </div>
  )
}

export default MyBookSection
