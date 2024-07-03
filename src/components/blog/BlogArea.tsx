

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg";
import blog_img_4 from "@/assets/img/post_4.jpg";
import blog_img_5 from "@/assets/img/post_5.jpg";
import blog_img_6 from "@/assets/img/post_6.jpg";
import blog_img_7 from "@/assets/img/post_7.jpg";
import blog_img_8 from "@/assets/img/post_8.jpg";
import blog_img_9 from "@/assets/img/post_9.jpg";


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}

const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 4,
    img: blog_img_4,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 5,
    img: blog_img_5,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 6,
    img: blog_img_6,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 7,
    img: blog_img_7,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 8,
    img: blog_img_8,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
  {
    id: 9,
    img: blog_img_9,
    title: `Reasons Business Needs a Agency`,
    des: `The art of creative thinking could be a blog that explores the various ways in which people.`,
  },
]


const BlogArea = () => {
  return (
    <>
      <div className="tl_height_219 tl_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="tl_section_heading tl_style_1 tl_type_1">
              <div className="tl_section_heading_text">
                <h2 className="tl_section_title anim_heading_title">
                  New Day <br /> New Inspiration
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tl_height_100 tl_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row">
            {blog_data.map((item, i) => (
              <div key={i} className={`col-md-4 ${item.id === 2 ? 'mt-0 mt-md-5' : ''} ${item.id === 5 ? 'mt-0 mt-md-5' : ''} ${item.id === 8 ? 'mt-0 mt-md-5' : ''}`}>
                <div className="anim_div_ShowDowns">
                  <Link href="/blog-details" className="tl_blog tl_style_1">
                    <div>
                      <Image src={item.img} alt="post_1" />
                    </div>
                    <div className="tl_blog_info">
                      <h6 className="tl_blog_title">
                        {item.title}
                      </h6>
                      <p className="tl_blog_subtitle">
                        {item.des}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}

          </div>
          <div className="tl_height_100 tl_height_lg_60"></div>
          <div>
            <div className="tl_hero_btn_wrap text-center">
              <div className="tl_round_btn_wrap">
                <a href="#" className="tl_hero_btn tl_round_btn btn-item"><span></span> Load More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;