import StarRating from "./StarRating";

interface ReviewCardProps {
  review: any;
}
const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  console.log(review);
  return (
    <div
      className="flex card-item col-md-3 col-sm-6 col-xs-12 tl_white_bg tl_card p-4 m-3 aos-init"
      data-aos="flip-up"
      data-aos-offset="200"
      data-aos-duration="4000"
      // data-aos-delay="50"
    >
      <div className="rating">
        <StarRating rating={review.rating} />
      </div>
      <div>
        <blockquote className="blockquote text-right">
          <p className="mb-0">{review.message}</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">{review.author}</cite>
          </footer>
        </blockquote>
      </div>
      <div>
        <p className="text-right">- 24-May-2024</p>
      </div>
    </div>
  );
};

export default ReviewCard;
