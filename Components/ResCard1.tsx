import React from 'react'


const styleCard = {
    backgroundColor: "#f0f0f0"
}

const ResCard1 = (resName, cuisine, rating) => {
    console.log();

    return (
        <div className="res-card" style={styleCard}>
            <img className="image" alt="res-image"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1d578bb732e03c6f591790eb7d2d88e2" />
            <div className="small-headings">
                <h3 className="route2">{resName}</h3>
                <h4>{cuisine}</h4>
                <h4>Rating:{rating}</h4>
            </div>





        </div>
    )
}

export default ResCard1
