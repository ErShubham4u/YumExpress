import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   // const data = await fetch(
  //   //   "https://www.swiggy.com/mapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   // );

  //   // const data = await fetch(
  //   //   "https://foodfire.onrender.com/api/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   // );

  //   // const data = await fetch(
  //   //   "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING",
  //   // );

  //   const data = await fetch("/api/restaurants");
  //   console.log(data.text())
  //   const json = await data.json();
  //   console.log(data.json)
  //   setListOfRestaurant(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants || [],
  //   );

  //   setFilteredRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants || [],
  //   );

  //   console.log(data);
  // };

  const fetchData = async () => {
  try {
    const response = await fetch("/api/restaurants");

    console.log("Response:", response);

    const json = await response.json();

    console.log("JSON:", json);

    // const restaurants =
    //   json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants || [];

    // setListOfRestaurant(restaurants);
    // setFilteredRestaurants(restaurants);

       setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurants..................."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            // <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
