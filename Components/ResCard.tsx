import React from 'react'



const styleCard = {
    backgroundColor: "#f0f0f0"
}

const ResCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, maxDeliveryTime } = resData?.data;

    return (
        <div className="res-card" style={styleCard}>
            <img className="image" alt="res-image"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1d578bb732e03c6f591790eb7d2d88e2" />
            <div className="small-headings">
                <h3>{name}</h3>
                <h4>Cuisine: {cuisines.join(",")}</h4>
                <h4>Rating: {avgRating}</h4>
                <h4>Delivery Time:{maxDeliveryTime}</h4>

            </div>





        </div>
    )
}

export default ResCard
