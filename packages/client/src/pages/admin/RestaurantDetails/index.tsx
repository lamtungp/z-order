import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { slug } = useParams();
  console.log(slug);

  return <></>;
};

export default RestaurantDetails;
