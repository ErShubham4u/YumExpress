import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
        CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
