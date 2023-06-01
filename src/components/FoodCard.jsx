import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";


const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [,refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = item => {
    console.log(item);

    if (user && user.email) {
      const orderItem = { menuItemId: _id, name, image, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            refetch(); //refetch to update the number of cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added in the cart',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else {
      Swal.fire({
        title: 'You are not a login user',
        text: "You have to login to add cart",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }; 
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-5 top-4 px-4 py-1 rounded">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline text-amber-600 hover:text-amber-600 border-0 border-b-2">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;