import { React, useState } from 'react'
import ResCard from './ResCard'
import resList from '../utils/mockData';





const Stat = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState(resList)


    return (
        <div className="body">
            <div className="Fltr"></div>
            <button
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4
                    );
                    setListOfRestaurant(filteredList)
                }}>Filter Button
            </button>
            <div className="restaurant-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <ResCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>


        </div >
    );
};

export default Stat
