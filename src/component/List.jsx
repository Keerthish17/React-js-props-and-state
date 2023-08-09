import React from "react";
import Contact from "./Contact";
function List(){

    const List= [
            {img: ".//Monkey_D._Luffy_Anime_Pre_Timeskip_Infobox.webp",name : "Luffy",phone : "6382771741",email: "monkeyDluffy@gmail.com"}, 
            { img: "./zoro.png",name : "Zoro",phone : "12542132",email: "RoronoaZoro@gmail.com"},
            {img: "./sanji.webp",name : "Sanji",phone : "12313213",email: "Vinsmokesanji@gmail.com"},
            {img: "./nami.jpg",name : "Nami",phone : "12313213",email: "BigeeNami@gmail.com"},
            {img: "./ussop.jpg",name : "Ussop",phone : "12313213",email: "Sogekingussop@gmail.com"},
            {img: "./chopper.jpg",name : "Chopper",phone : "12313213",email: "Choopa@gmail.com"},
            {img: "./franky.jpg",name : "Franky",phone : "12313213",email: "Superb@gmail.com"},
            {img: "./brook.png",name : "Brook",phone : "12313213",email: "soulkinguh@gmail.com"},
            {img: "./jimbe.jpg",name : "Jimbe",phone : "12313213",email: "fishmankarate@gmail.com"}
            


    ]
    return(
   List.map((List)=>(<Contact Img = {List.img} name = {List.name}  phone ={List.phone} email = {List.email}></Contact>)))
}

export default List