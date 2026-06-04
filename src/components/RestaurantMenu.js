import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=" + id,
    );
    const json = await data.json();
    setResMenu(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  if (!resMenu) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h3>{costForTwoMessage}</h3>
      <h2>MENU : </h2>

      {/* <h1>{itemCards[0].card.info.name}</h1>
      <h1>{itemCards[1].card.info.name}</h1>
      <h1>{itemCards[2].card.info.name}</h1> */}

      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
