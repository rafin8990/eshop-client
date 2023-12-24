import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Provider/CartProvider";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { cartData, updateCartData } = useContext(CartContext);
  const { logout, isAuthenticated } = useContext(AuthContext);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          fetch("http://localhost:5000/carts")
            .then((res) => res.json())
            .then((updatedData) => updateCartData(updatedData));
          alert("product deleted successFully");
        }
      });
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="text-xl font-semibold">
                <Link to="/">Products</Link>
              </p>
            </li>
            <li>
              {isAuthenticated ? (
                <p onClick={handleLogOut()} className="text-xl font-semibold">
                  Log Out
                </p>
              ) : (
                <p className="text-xl font-semibold">
                  <Link to="/login">Login</Link>
                </p>
              )}
            </li>
          </ul>
        </div>
        <img
          className="w-52"
          src="https://pbs.twimg.com/media/CyGXXiZWEAEznfZ.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p className="text-xl font-semibold">
              <Link to="/">Products</Link>
            </p>
          </li>
          <li>
            {isAuthenticated ? (
              <p onClick={handleLogOut()} className="text-xl font-semibold">
                Log Out
              </p>
            ) : (
              <p className="text-xl font-semibold">
                <Link to="/login">Login</Link>
              </p>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge indicator-item">{cartData?.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-96 bg-orange-300 shadow"
          >
            <div className="w-full mx-5 my-5">
              {cartData.map((data) => (
                <div className="mt-5" key={data?._id}>
                  <div className="flex">
                    <img className="w-20 rounded" src={data?.image} alt="" />
                    <div>
                      <p className="text-xl text-white">Price:{data?.price}</p>
                      <p className="text-xl text-white">
                        Quantity:{data?.quantity}
                      </p>
                      <button
                        className="btn mt-3 btn-primary"
                        onClick={() => handleDelete(data?._id)}
                      >
                        Delete Item
                      </button>
                    </div>
                    <div>
                      <h1 className="text-xl text-white">
                        Total Price: {data?.price * data?.quantity}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
