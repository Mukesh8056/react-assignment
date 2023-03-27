import React, { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

import "react-credit-cards/es/styles-compiled.css";
import Card from "react-credit-cards";

function AllCard() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://interview-api.onrender.com/v1/cards',{method:'Get',headers:{
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2M2YzI5ZmFmYTVkMTAwMWRlNDkwZjYiLCJpYXQiOjE2Nzk0Mjg5MzAsImV4cCI6MzQ3OTQyODkzMCwidHlwZSI6ImFjY2VzcyJ9.3GZU2CjalRjcOHRhqm-WCvCdWaHoD5Js32VvqO2j2uY'
    }})
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.results)
        setCard(data.results);
      });
  }, []);
  const Card0 = card.slice(4,5);
  const Card1 = card.slice(1,2);
  const Card2 = card.slice(5,6);
  const Card3 = card.slice(7,8);
  const Card4 = card.slice(8,9);
  const Card5 = card.slice(9,10);
 
  return (
    <div style={{padding:"100px"}}>
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        
      >
     <SwiperSlide>
      {  Card0 && Card0.length>0?

        Card0.map((data, i) => (
          <Card
            name={data.name}
            number={data.cardNumber}
            expiry={data.cardExpiration}
          />
        )) : <h1 className=' '>Loading...</h1>}
        </SwiperSlide>
        <SwiperSlide>
      {  Card1 && Card1.length>0?

        Card1.map((data, i) => (
          <Card
            name={data.name}
            number={data.cardNumber}
            expiry={data.cardExpiration}
          />
        )) : <h1 className=''></h1>}
        </SwiperSlide>
        <SwiperSlide>
      {  Card2 && Card2.length>0?

        Card2.slice(1).map((data, i) => (
          <Card
            name={data.name}
            number={data.cardNumber}
            expiry={data.cardExpiration}
          />
        )) : <h1 className=''></h1>}
        </SwiperSlide>
        <SwiperSlide>
      {  Card3 && Card3.length>0?

        Card3.map((data, i) => (
          <Card
            name={data.name}
            number={data.cardNumber}
            expiry={data.cardExpiration}
          />
        )) : <h1 className=' '></h1>}
        </SwiperSlide>
        <SwiperSlide>
      {  Card4 && Card4.length>0?

        Card4.map((data, i) => (
          <Card
            name={data.name}
            number={data.cardNumber}
            expiry={data.cardExpiration}
          />
        )) : <h1 className=' '></h1>}
        </SwiperSlide>
        <SwiperSlide>
      {  Card5 && Card5.length>0?

        Card5.map((data, i) => (
          <Card
            name={data.name}
            number={data.cardNumber}
            expiry={data.cardExpiration}
          />
        )) : <h1 className=' '></h1>}
        </SwiperSlide>

</Swiper>

    </div>
    
  )
}

export default AllCard


