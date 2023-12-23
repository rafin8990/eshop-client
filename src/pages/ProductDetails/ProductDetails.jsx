import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../../Provider/CartProvider";

const ProductDetails = () => {
  const product = useLoaderData();
  const { updateCartData } = useContext(CartContext);

  const addToCart = (event) => {
    event.preventDefault();
    const form=event.target;
    const size=form.size.value;
    const color=form.color.value;
    const name=product?.name
    const cartData={
      productId:product?._id,
      quantity:1,
      color,
      size,
      name,
      price:product?.Price,
      image:product?.varient_one
    }
    fetch('http://localhost:5000/cart/add',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(cartData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        alert('Product added to the cart successfully')
        fetch("http://localhost:5000/carts")
            .then((res) => res.json())
            .then((updatedData) => updateCartData(updatedData));
      }
      else(alert('Can not added product to the cart'))
    })
  };

  return (
    <div className="min-h-screen flex justify-around">
      <div className="">
        <img src={product?.varient_one} alt="" />
        <img src={product?.varient_two} alt="" />
      </div>
      <div className="mx-10">
        <h1 className="text-4xl">{product?.name}</h1>
        <p className="text-xl my-5"> Brand: {product?.brand}</p>
        <hr />
        <h3 className="text-2xl my-5">{product?.Price} Taka</h3>
        <form onSubmit={addToCart}>
          <select
            name="size"
            className="select select-bordered w-full max-w-xs mt-5"
          >
            <option disabled selected>
              Select Size
            </option>
            {product?.size.map((s, i) => (
              <option key={i}>{s}</option>
            ))}
          </select>
          <select
            name="color"
            className="select select-bordered w-full max-w-xs mt-5 mx-3"
          >
            <option disabled selected>
              Select Color
            </option>
            <option>Red</option>
            <option>Black</option>
          </select>
          <button
          type="submit"
            className="btn bg-orange-500 text-white mt-5 w-full"
          >
            Add to cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
