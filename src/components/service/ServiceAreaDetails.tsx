
import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: 'one',
    title: "Understand",
    description: `Träne euch ich sich hinweggeschwunden die sich nach, unbekannten längst ihr nach längst lied zu liebe, gleich fühlt halbverklungnen euch.`,
  },
  {
    id: 'Two',
    title: "Design",
    description: `Träne euch ich sich hinweggeschwunden die sich nach, unbekannten längst ihr nach längst lied zu liebe, gleich fühlt halbverklungnen euch.`,
  },
  {
    id: 'Three',
    title: "Development",
    description: `Träne euch ich sich hinweggeschwunden die sich nach, unbekannten längst ihr nach längst lied zu liebe, gleich fühlt halbverklungnen euch.`,

  },
  {
    id: 'Four',
    title: "Testing",
    description: `Träne euch ich sich hinweggeschwunden die sich nach, unbekannten längst ihr nach längst lied zu liebe, gleich fühlt halbverklungnen euch.`,

  },
]


const ServiceAreaDetails = () => {
  return (
    <>
      <div className="tl_height_150 tl_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="tl_work tl_work_text">
            <h4 className="anim_heading_title">
              Specialization & Working Process
            </h4>
            <p className="tl_mp0 anim_text">
              Welcome to our digital agency! We specialize in helping businesses like yours succeed online.
              From website design and development to digital marketing and advertising, we have the tools and
              expertise to elevate your online presence.
            </p>
          </div>
          <div className="tl_height_80 tl_height_lg_40"></div>
          <div>
            <div className="tl_work tl_work_1">
              <div className="tl_card_work tl_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="tl_card tl_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="tl_card tl_style_1">
                      <div className="tl_posagation">
                        <div className="tl_work_style_1"></div>
                        <div className="tl_work_style_2"></div>
                      </div>
                      <div className="tl_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="tl_work_title">{item.title}</h6>
                    <p className="tl_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;