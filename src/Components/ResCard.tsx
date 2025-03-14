import React from 'react'
import { IMG_URL } from '../utils/constants';



const styleCard = {
    backgroundColor: "#f0f0f0"
}

const ResCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, deliveryTime } = resData?.data;

    return (
        <div className="res-card" style={styleCard}>
            <img
                className="image"
                alt="res-image"
                src={IMG_URL}
            />

            <h3>{name}</h3>
            <h4>Cuisine: {cuisines.join(",")}</h4>
            <h4>Rating: {avgRating}</h4>
            <h4>Delivery Time:{deliveryTime}</h4>
        </div>
    );
};

export default ResCard;
