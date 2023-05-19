import React from 'react';

export default function Card (props) {
    const {coverImg, location, title, price, openspot} = props
    const {reviewCount, rating} = props.stats;

    let badgeText
        if (openspot === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={process.env.PUBLIC_URL + 'images/' + coverImg} className="card--image"  alt="card"/>
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL + 'images/star.png'} className="card--star"  alt="star"/>
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    );
}