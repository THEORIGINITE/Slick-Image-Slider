import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function SlickSlider() {
  return (
    <Carousel>
      <Wrap>
        <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/02/singapore-disney-launch-x-1024x448.jpg" />
      </Wrap>
      <Wrap>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNveqmGJ_Bh2blPfAfzBfGooYjE7WyjNfaA&usqp=CAU" />
      </Wrap>
      <Wrap>
        <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/02/singapore-disney-launch-x-1024x448.jpg" />
      </Wrap>
      <Wrap>
        <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/02/singapore-disney-launch-x-1024x448.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default SlickSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  max-height: 80vh;
  max-width: 80vw;

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  margin: 20px;

  img {
    border: 15px solid transparent;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      border: 4px solid rgb(255, 255, 255);
    }
  }
`;
