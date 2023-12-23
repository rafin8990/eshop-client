import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
        <div>
            <h1 className="text-5xl font-bold text-center">Products</h1>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1200px] mx-auto">
        {products.map((product) => (
          <div key={product?._id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img  src={product.varient_one} className="rounded-xl h-80" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.name}</h2>
              
              <h2 className="card-title">Size:  {product.size.map((s, i)=><p key={i}> {s}</p>)}</h2>
              <h2 className="card-title">Color: Red / Black </h2>
              <div className="card-actions">
                <Link to={`/product/${product._id}`}><button className="btn btn-primary">View Details</button></Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
