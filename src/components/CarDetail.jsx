import { useParams } from "react-router-dom";

function CarDetail() {
  const { id } = useParams();  // Ye 'id' URL se lega

  return (
    <div>
      <h1>Car Detail Page</h1>
      <p>Showing details for car with ID: {id}</p>
      <h2>Turbo mode on....</h2>
      
    </div>
  );
}

export default CarDetail;
