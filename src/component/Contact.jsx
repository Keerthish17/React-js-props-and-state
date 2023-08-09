/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './style.css';
function Contact(props){
    return(
        <div class="container">
           <img id="img" src={props.Img} />
    <h1>{props.name}</h1>
   
    <h1>{props.phone}</h1>
    <h1>{props.email}</h1>  
</div>


        )

}


export default Contact;