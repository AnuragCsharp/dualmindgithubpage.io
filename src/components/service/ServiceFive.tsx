"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CourceCard from "../cource/CourceCard";

const service_data = [
  {
    title: "Data Science & Data Analytics",
    slug: "Play with data to Visualize it the way you like",
    image: "https://assets.bitdegree.org/online-learning-platforms/storage/media/data%20science-5ffc4aee228a9.o.jpg",
    description:
      "Explore blockchain beyond cryptocurrencies. Learn smart contracts, decentralized applications (dApps), and blockchain security.",
    tags: ["all", "blockchain", "cryptocurrency", "smart-contracts"],
    categories: [ "Technology"],
    instructors: ["Shazia Umar"],
    price: 8999,
    id: "g7h6i5j4k3l2",
  },
  {
    title: "React Masterclass: Build Modern Web Apps",
    slug: "react-masterclass-build-modern-web-apps",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJMmAPj2OsSjbyCiOHKfxSRDppBmOGf-j3Q&s",
    description:
      "Become a React pro! Learn to build scalable and performant web applications with React, Redux, and advanced techniques.",
    tags: ["all", "react", "redux", "javascript"],
    categories: [ "Front-End"],
    instructors: ["DevShruti Sen", "Backup"],
    price: 5999,
    id: "a3b8e68f7c1b02d",
  },
  {
    title: "Python for Data Science: From Beginner to Advanced",
    slug: "python-for-data-science-beginner-to-advanced",
    image: "https://www.classcentral.com/report/wp-content/uploads/2023/09/bcg_python_banner.png",
    description:
      "Master Python for data analysis and machine learning. Learn pandas, numpy, matplotlib, and scikit-learn with practical projects.",
    tags: ["all", "python", "data-science", "machine-learning"],
    categories: [ "Python"],
    instructors: ["Backup Faculty", "Bob Brown"],
    price: 7999,
    id: "c6a2f9e1d3e4a5b",
  },
  {
    title: "UX Design Essentials: Create User-Centered Interfaces",
    slug: "ux-design-essentials-create-user-centered-interfaces",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*doYHfVKgVncrGIL5jmSOMg.jpeg",
    description:
      "Learn essential UX design principles and techniques. Design intuitive and user-centered interfaces that delight users.",
    tags: ["all", "ux-design", "user-interface"],
    categories: [ "UX/UI"],
    instructors: ["Anurag Sen", "David Lee"],
    price: 4999,
    id: "f1e2d4c3b5a6",
  },
  {
    title: "Full Stack Development Bootcamp: Build Real-World Projects",
    slug: "full-stack-development-bootcamp-real-world-projects",
    image: "https://media.licdn.com/dms/image/D5612AQFKcP3oHJBP7g/article-cover_image-shrink_720_1280/0/1713154068255?e=2147483647&v=beta&t=Nyc4Blmpnhpeix76N7f9VBKyL1uvsyy2mNyRJbHX_hY",
    description:
      "Become a full stack developer. Learn HTML, CSS, JavaScript, Node.js, MongoDB, and React by building practical web applications.",
    tags: ["all", "full-stack", "web-development", "mongodb"],
    categories: [ "Full-Stack"],
    instructors: ["DevShruti Sen", "Sarah Miller"],
    price: 9999,
    id: "b9c8a7d6e5f4",
  },
  {
    title: "Digital Marketing Fundamentals: Grow Your Online Presence",
    slug: "digital-marketing-fundamentals-grow-your-online-presence",
    image: "https://www.creativeitinstitute.com/images/course/course_1662724358.jpg",
    description:
      "Master the fundamentals of digital marketing. Learn SEO, social media marketing, content strategy, and analytics.",
    tags: ["all", "digital-marketing", "seo", "social-media"],
    categories: [ "Digital"],
    instructors: ["Akhil Suryavanshi", "James Clark"],
    price: 8888,
    id: "d5e4f3c2b1a9",
  },
 
];
const ServiceFive = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="tl_section_heading tl_style_1 tl_type_1">
            <div className="tl_section_heading_text">
              <div className="tl_section_subtitle anim_div_ShowZoom">
                Cources Offered
              </div>
              <h2 className="tl_section_title anim_heading_title">
                Digital Marketing Strategy <br />
                Transformation
              </h2>
            </div>
          </div>
          <div className="tl_height_100 tl_height_lg_60"></div>
          <Swiper
            loop={true}
            speed={1000}
            autoplay={false}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{ el: ".tl_pagination", clickable: true }}
            className="tl_slider tl_slider_3 tl_row_slider anim_blog"
          >
            {service_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
               <CourceCard course={item}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="tl_height_150 tl_height_lg_60"></div>
    </>
  );
};

export default ServiceFive;
