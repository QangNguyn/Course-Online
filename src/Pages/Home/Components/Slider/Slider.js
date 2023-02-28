import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Slider.scss";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { fetchSlider, sliderSelector } from "./sliderSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Slider() {
  const { sliderItem, isLoading } = useSelector(sliderSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlider());
  }, []);
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
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {sliderItem.map((slider) => (
            <SplideSlide key={slider.id}>
              <img src={slider.img} alt="" />
            </SplideSlide>
          ))}
        </>
      )}
    </Splide>
  );
}
