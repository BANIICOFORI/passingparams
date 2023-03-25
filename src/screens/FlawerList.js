import React from 'react';
import { FlatList,StyleSheet,Image,Text,View } from "react-native";
import Home from '../component/Home';
import Flawer1 from "../images/Flawer1.jpg";
 import Flawer2 from "../images/flawer2.jpg";
 import Flawer3 from "../images/flawer3.jpg";
 import Flawer4 from "../images/flawer4.jpeg";
import Flawer5 from "../images/flower5.jpg";
 import Flawer6 from "../images/flawer6.jpg";
import User from '../images/profile1.jpg'

const FlawerList = () => {
    const minRead = ' mins read';
    const dot = '.';
    const dataDB =[
      {id:1,img:Flawer1,Heading:"Medicinal Flower  people turn to flowers for their medicinal powers. ...",Owner:"Herbert Kwaku Ofori",Time:`${4 + minRead}`,User:User, mainText:"In ancient times, and even to some extent in the contemporary world, people turn to flowers for their medicinal powers. Sunflowers, for example, have been known to ease menstrual pain and aid in the soothing of sore throats. Likewise, chrysanthemums have been said to be effective in curing colds and reducing fevers. To increase your ability to put flowers to use for more than just aesthetic purposes, explore the medicinal uses of flowers, creating a catalog of what ailments flowers can cure as well as how flowers can be used for these purposes."},
       {id:2,img:Flawer2,Heading:"Paper Cut Flower Border Mothers Day Pink Warm White Transparent",Owner:"Herbert Kwaku Ofori",Time:`${4 + minRead}`,User:User, mainText:"Experience the magic of Spring with this stunning bouquet of Tulips and Gypsophila. The Spring Supreme Bouquet is the perfect way to add a pop of colour and beauty to any occasion, be it a birthday, anniversary, or just because. The delicate arrangement of seasonal colors reminiscent of a mesmerizing sunset, will bring joy and tranquility to any space. Perfect for brightening someone's home and their day, this bouquet is sure to put a smile on their face. Order now and enjoy next day delivery! Vase not included*"},
      {id:3,img:Flawer3,Heading:"Food Flowers can as pleasing to  palate as they are to the eyes. ...",Owner:"Herbert Kwaku Ofori",Time:`${4 + minRead}`,User:User, mainText:"Flowers can be as pleasing to the palate as they are to the eyes. While some flowers are not so tasty and others are entirely inedible, some of these beautiful buds are edible and, in fact, can add flavor to cooking. Explore the world of edible flowers, looking at flower derivatives, such as rose oil, as well as flowers that some eat whole, such as squash blossoms. Explore the ways in which these stunning flowers can be used in the crafting of foods as well as the potential health benefits associated with eating foods that contain flower parts."},
      {id:4,img:Flawer4,Heading:"All flowers are beautiful, some have more than  a pleasing appearance. ...",Owner:"Herbert Kwaku Ofori",Time:`${4 + minRead}`,User:User, mainText:"Experience the magic of Spring with this stunning bouquet of Tulips and Gypsophila. The Spring Supreme Bouquet is the perfect way to add a pop of colour and beauty to any occasion, be it a birthday, anniversary, or just because. The delicate arrangement of seasonal colors reminiscent of a mesmerizing sunset, will bring joy and tranquility to any space. Perfect for brightening someone's home and their day, this bouquet is sure to put a smile on their face. Order now and enjoy next day delivery! Vase not included*"},
       {id:5,img:Flawer5,Heading:"What is the importance of pollination to agriculture and can farmers benefit?",Owner:"Herbert Kwaku Ofori",Time:`${4 + minRead}`,User:User, mainText:"Experience the magic of Spring with this stunning bouquet of Tulips and Gypsophila. The Spring Supreme Bouquet is the perfect way to add a pop of colour and beauty to any occasion, be it a birthday, anniversary, or just because. The delicate arrangement of seasonal colors reminiscent of a mesmerizing sunset, will bring joy and tranquility to any space. Perfect for brightening someone's home and their day, this bouquet is sure to put a smile on their face. Order now and enjoy next day delivery! Vase not included*"},
      {id:6,img:Flawer6,Heading:"Do flowers exhibit sound of any frequency? Lightning has a sound which we can't create artificially.",Owner:"Herbert Kwaku Ofori",Time:`${4 + minRead}`,User:User, mainText:"Experience the magic of Spring with this stunning bouquet of Tulips and Gypsophila. The Spring Supreme Bouquet is the perfect way to add a pop of colour and beauty to any occasion, be it a birthday, anniversary, or just because. The delicate arrangement of seasonal colors reminiscent of a mesmerizing sunset, will bring joy and tranquility to any space. Perfect for brightening someone's home and their day, this bouquet is sure to put a smile on their face. Order now and enjoy next day delivery! Vase not included*"},
    
    ];
  return (
    <FlatList
    data={dataDB}
    renderItem={({item})=> {
        return (
          <Home
          img= {item.img}
          Heading= {item.Heading}
          Owner= {item.Owner}
          Time= {item.Time}
          User= {item.User}
          mainText= {item.mainText}
          color= {item.color}
          />
        )
    }}
    keyExtractor={(item)=>item.id }
    />
   
);
}
export default FlawerList
