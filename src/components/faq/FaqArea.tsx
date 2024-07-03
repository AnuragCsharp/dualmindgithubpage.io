
'use client'
import React, { useState } from 'react';


interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    "id": "1",
    "question": "What makes Debugshala's Data Science course in Indore unique, and how does Yukti by Debugshala enhance the learning experience?",
    "ans": "Debugshala's Data Science course in Indore is distinguished by its practical training, personalized mentorship, and the support of the interactive developer community. Yukti by Debugshala amplifies the learning experience by providing AI-assisted tools that offer personalized insights, ensuring a more efficient learning journey in data analytics."
  },
  {
    "id": "2",
    "question": "Can you provide more details about Debugshala's Java courses in Indore and the role of AI-enhanced learning modules by Yukti by Debugshala?",
    "ans": "Debugshala offers a diverse range of Java courses in Indore. These courses encompass hands-on training, personalized mentorship, and active participation in our developer community. Yukti by Debugshala enhances these courses with AI-assisted learning modules, providing intelligent insights and adapting to students' learning pace for a more effective education."
  },
  {
    "id": "3",
    "question": "What is the fee structure for Debugshala's Java Full Stack Development program in Indore?",
    "ans": "The fees for our Java Full Stack Development program in Indore vary based on the program and duration you choose. For detailed information, please contact our admissions team. Additionally, Debugshala gives hands-on training at industry level standards ensuring placement success and domain knowledge."
  },
  {
    "id": "4",
    "question": "How does Debugshala's MERN Stack Development course ensure student mastery in Web Development?",
    "ans": "Debugshala's MERN Stack Development course is designed to ensure student success through practical training, mentorship, and participation in our interactive developer community. Yukti by Debugshala's AI tools play a vital role in enhancing learning experiences by providing adaptive content, quizzes, and assignments, tailored to individual student progress."
  },
  {
    "id": "5",
    "question": "What is the placement assistance like at Debugshala's courses in Indore, and how does Yukti by Debugshala contribute to job placement success?",
    "ans": "Debugshala's approach includes a 100% placement assistance for our courses in Indore. Yukti by Debugshala combines AI-assisted training modules with real-time job market insights, ensuring that students are well-prepared for securing jobs in their chosen field."
  },
  {
    "id": "6",
    "question": "How does Yukti by Debugshala's AI-assisted training benefit students in their training course?",
    "ans": "In the training course, Debugshala integrates Yukti by Debugshala's AI-assisted modules to enhance the learning experience. This dynamic approach helps students gain a deeper understanding of data analytics, and Yukti by Debugshala's AI tools adapt to the individual's learning pace, optimizing their data science journey."
  },
  {
    "id": "7",
    "question": "Can you elaborate on the role of the interactive developer community at Debugshala?",
    "ans": "Our interactive developer community at Debugshala fosters collaboration, innovation, and networking. It's a space where students and professionals connect, share ideas, and support each other."
  },
  {
    "id": "8",
    "question": "Is there a company affiliated with Debugshala that specializes in staffing and recruitment services?",
    "ans": "Yes, Debugshala partners with 'The Data Career,' who specializes in staffing and recruitment services. They focus on connecting skilled individuals who have completed Debugshala's courses with promising job opportunities in the industry. This collaboration ensures that our students have access to a wide network of job placements and opportunities tailored to their skills and aspirations."
  }
]


const FaqArea = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="tl_height_69 tl_height_lg_60"></div>

      <div className="container">
        <div className="tl_section_heading tl_style_1">
          <div className="tl_section_heading_text">
            <div className="mb-3 anim_text_writting tl_section_subtitle anim_div_ShowZoom">FAQ</div>
            <h2 className="tl_section_title anim_text_writting">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>

      <div className="tl_height_100 tl_height_lg_60"></div>

      <div className="container">
        <div className="tl_accordeon anim_div_ShowDowns">
          {faq_data.map((item, i) =>
            <div key={i} 
            onClick={() => toggleAccordion(i)}
            className={`tl_accordion_item tl_color_1 ${i === activeIndex ? 'active tl_icon' : ''}`}>
              <div className="tl_accordion_header">
                <p className="tl_accordion_title tl_m0" id={`heading${item.id}`}>
                  {item.question}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" style={{ transform: i === activeIndex ? 'rotate(-90deg)' : 'none' }}>
                  <path style={{ fill: `#ffffff` }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right" />
                </svg>
              </div>

              <div className={`tl_accordion_body ${i === activeIndex ? '' : 'd-none'}`}>
                {item.ans}
              </div>
            </div>
          )} 

        </div>
      </div>
      <div className="tl_height_150 tl_height_lg_60"></div>
    </>
  );
};

export default FaqArea;