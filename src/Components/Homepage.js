import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="pizzaHeader">
        <h2>Your Favorite Food,<br />Delivered While You Code</h2>
        <Link to={"/pizza"}>
          <button className="orderPizza">Pizza?</button>
        </Link>
      </div>
      <h3>Food Delivery in Gotham City</h3>
      <div className="foodOptionsContainer" aria-label="slice of pizza">
        <div className="foodOption">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="breakfast spread"
          />
          <h5>Resturant One</h5>
          <p>💲💲 - Types of Food</p>
          <Link to={"/pizza"}>
            <button className="ordernow">Order Now</button>
          </Link>
        </div>
        <div className="foodOption">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="salad bar"
          />
          <h5>Resturant Two</h5>
          <p>💲 - Types of Food</p>
          <Link to={"/pizza"}>
            <button className="ordernow">Order Now</button>
          </Link>
        </div>
        <div className="foodOption">
          <img
            src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="pork chop with broccoli"
          />
          <h5>Resturant Three</h5>
          <p>💲💲💲 - Types of Food</p>
          <Link to={"/pizza"}>
            <button className="ordernow">Order Now</button>
          </Link>
        </div>
        <div className="foodOption">
          <img
            src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="butternut squash soup"
          />
          <h5>Resturant Four</h5>
          <p>💲💲💲 - Types of Food</p>
          <Link to={"/pizza"}>
            <button className="ordernow">Order Now</button>
          </Link>
        </div>
        <div className="foodOption">
          <img
            src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="burger and fries on a plate"
          />
          <h5>Resturant Five</h5>
          <p>💲💲 - Types of Food</p>
          <Link to={"/pizza"}>
            <button className="ordernow">Order Now</button>
          </Link>
        </div>
        <div className="foodOption">
          <img
            src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="pasta and red wine"
          />
          <h5>Resturant Six</h5>
          <p>💲💲💲💲 - Types of Food</p>
          <Link to={"/pizza"}>
            <button className="ordernow">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
