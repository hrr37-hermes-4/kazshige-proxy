import React from 'react';
import StarRatings from 'react-star-ratings';
import style from './css/style.less';

const RatingDetails = (props) => {
  const { average, reviews} = props;
  return (
      <div className={style.ratingDetailsBar}>
        <p className={style.ratingHeader}>COMMUNITY REVIEWS</p>
        <hr />
        <StarRatings rating={4} starRatedColor="#FF7F50" numberOfStars={5} name="rating" starDimension="14px" starSpacing="0px" />
        <span> {average} </span>
        <a href="#" className={style.linkTag} href="#">Rating details</a>
        <span className={style.reviewCount}> • {reviews.length} ratings</span>
    </div>
  );
};

export default RatingDetails;