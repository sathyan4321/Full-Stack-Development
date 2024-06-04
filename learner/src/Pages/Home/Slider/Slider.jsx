import React from "react";
import Carousel, { CarouselItem } from "./Carousel";
import "./Slider.scss";

const Slide = ({ number }) => (
  <div className="slides">
    <img src={`https://via.placeholder.com/328x164.png?text=Slide ${number}`} />
  </div>
);

export default function Slider() {
  return (
    <Carousel>
      <CarouselItem>
        <Slide number={1} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={2} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={3} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={4} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={5} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={6} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={7} />
      </CarouselItem>
    </Carousel>
  );
}
