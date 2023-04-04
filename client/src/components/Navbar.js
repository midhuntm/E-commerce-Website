import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import ShopContextProvider, { getDefaultCart } from "../context/shop-context";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function Navbar() {
  const location = useLocation();
  const { addToCart, cartItems } = useContext(ShopContext);
  const [badge, setBadge] = useState("");
  const badgeItems = useSelector((state) => state.cart.badgeItem);
  console.log(badgeItems, "badgeItems");
  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        {location.pathname === "/" ||
        location.pathname === "/signin" ||
        location.pathname === "/forgot" ||
        location.pathname === "/payment" ? (
          <div></div>
        ) : (
          <div className="navbar">
            <div className="links">
              <Link to="/home"> Shop</Link>
              <Link to="/cart">
                <Badge badgeContent={badgeItems} color="primary">
                  <ShoppingCart size={32} />
                </Badge>
              </Link>
              <Link>
                <FavoriteBorderIcon />
              </Link>
              <div className="logout">
                <div>
                  <Link to="/">Logout</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
