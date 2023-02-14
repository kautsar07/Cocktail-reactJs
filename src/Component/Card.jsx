import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

export default function Card(props) {
  const [like, setLike] = useState(false);
  return (
    <div className="card">
      <img src={props.imgUrl} alt="" />
      <div className="wrap-desc">
        <h6>{props.titleDrinks}</h6>
        <div className="desc">
          <div className="text">
            <p>{props.desc}</p>
          </div>
          <div className="rating">
            <div className="star">
              <AiFillStar size={12} color={"yellow"} />
              <AiFillStar size={12} color={"yellow"} />
              <AiFillStar size={12} color={"yellow"} />
              <AiFillStar size={12} color={"yellow"} />
              <AiFillStar size={12} color={"yellow"} />
            </div>
            <p>5/5</p>
          </div>
        </div>
      </div>
      <div className="like">
        {like ? (
          <FcLike className="likeTrue" onClick={() => setLike(false)} />
        ) : (
          <FcLikePlaceholder className="likeFalse" onClick={() => setLike(true)} />
        )}
      </div>
    </div>
  );
}
