"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import avatar_img from "@/assets/img/avatar_1.jpg";
import testimonial_thumb from "@/assets/img/testimonial_thumb_1.jpg";
import Image, { StaticImageData } from "next/image";
import ReviewCard from "./ReviewCard";

interface DataType {
  rating: number;
  author: string;
  message: string;
}

let reviewData: DataType[] = [
  {
    rating: 4.5,
    author: "John Doe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    rating: 3.8,
    author: "Jane Smith",
    message:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    rating: 5,
    author: "Alice Johnson",
    message:
      "Nulla facilisi. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
  },
  {
    rating: 4.2,
    author: "Bob Brown",
    message: "Etiam porta sem malesuada magna mollis euismod.",
  },
  {
    rating: 4.9,
    author: "Emily Davis",
    message:
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
  },
  {
    rating: 3.5,
    author: "Mark Wilson",
    message: "Cras mattis consectetur purus sit amet fermentum.",
  },
  {
    rating: 4.7,
    author: "Sarah Lee",
    message:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
  {
    rating: 4.1,
    author: "Michael White",
    message: "Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    rating: 4.6,
    author: "Olivia Green",
    message: "Curabitur blandit tempus porttitor.",
  },
  {
    rating: 3.9,
    author: "Daniel Taylor",
    message: "Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
  {
    rating: 4.8,
    author: "Hannah Martinez",
    message:
      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
  },
  {
    rating: 4.4,
    author: "William Anderson",
    message: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  },
  {
    rating: 3.7,
    author: "Sophia Garcia",
    message: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
  },
  {
    rating: 4.0,
    author: "Liam Moore",
    message: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
  },
  {
    rating: 4.3,
    author: "Ava Robinson",
    message:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];

const Reviews = ({ style_service }: any) => {
  return (
    <>
      <section
        className={`${
          style_service ? "tl_shape_wrap_3" : "tl_primary_bg tl_shape_wrap_2"
        }`}
      >
        {style_service ? null : (
          <>
            <div className="tl_shape_1">
              <svg
                width="1041"
                height="1005"
                viewBox="0 0 1041 1005"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.3"
                  cx="538.5"
                  cy="502.5"
                  r="501.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="501.5"
                  cy="526.5"
                  r="458.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="453"
                  cy="570"
                  r="424"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="396"
                  cy="591"
                  r="377"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="330"
                  cy="630"
                  r="329"
                  stroke="#454545"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="tl_shape_2">
              <svg
                width="149"
                height="149"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23">
                  <path
                    d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                    fill="#454545"
                  />
                  <path
                    d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                    fill="#454545"
                  />
                </g>
              </svg>
            </div>
          </>
        )}

        <div className="tl_height_150 tl_height_lg_60"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 offset-lg-1">
              <div
                className={`tl_testimonial ${
                  style_service ? "tl_style_2" : "tl_style_1 tl_color_1"
                }`}
              >
                <h2 className="tl_testimonial_title">
                  Don't take our word for it. See what customers are saying
                  about us.
                </h2>
              </div>
            </div>
          </div>
          <div className="d-flex rating-container flex-wrap justify-content-center">
            {reviewData.map((review, index) => (
              <ReviewCard key={index}  review={review}/>
            ))}
          </div>
        </div>
        {style_service ? null : (
          <div className="tl_height_150 tl_height_lg_60"></div>
        )}
      </section>
      {style_service ? null : (
        <div className="tl_height_115 tl_height_lg_60"></div>
      )}
    </>
  );
};

export default Reviews;
