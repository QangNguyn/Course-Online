import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import "./Slider.scss";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export default function Slider() {
  const [slider, setSlider] = useState([]);
  const getSlider = async () => {
    const res = await fetch("http://localhost:3004/slider");
    const data = await res.json();
    setSlider(data);
  };
  useEffect(() => {
    getSlider();
  }, []);
  console.log(slider);
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        autoplay: true,
        pagination: false,
        arrows: false,
        interval: 3000,
      }}
    >
      {slider.map((slider) => (
        <SplideSlide key={slider.id}>
          <img src={slider.img} alt="" />
        </SplideSlide>
      ))}
    </Splide>
  );
}
