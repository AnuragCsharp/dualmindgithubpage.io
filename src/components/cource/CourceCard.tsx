import React from "react";

interface CourceCardProps {
  course: any;
}

const CourceCard: React.FC<CourceCardProps> = ({ course }) => {
  return (
    <div className="course-wrapper">
      <a href={`/courses/courses-details/${course.slug}`} className="course">
        <div className="course-image">
          <div className="sub-tags">
            {course.categories.map((tag: any, index: any) => (
              <div key={index} className="sub-tag">
                {tag}
              </div>
            ))}
          </div>
          <img alt={course.title} src={course.image} />
        </div>

        <div className="course-body">
          <h2 className="text-truncate">{course.title}</h2>
          <p>{course.description}</p>
        </div>

        <div className="course-body-tags">
          <div className="devider"></div>
          <div className="tags">
            {course.tags.map((category: any, index: any) => (
              <span key={index} className="tag">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="course-instructor ">
          <p className="text-truncate">
            By <span>{course.instructors.join(" & ")}</span>
          </p>
          <span>₹ {course.price}</span>
        </div>
      </a>

      <a
        href={`/paymentPortal/${course.paymentId}`}
        className="buy-now btn btn-primary"
      >
       Register
      </a>
    </div>
  );
};

export default CourceCard;
