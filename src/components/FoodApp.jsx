import React from "react";
import { useState } from "react";
import "../App.css";
import data from "../components/data";

const FoodApp = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="nav-1">
            <div className="heading">
              <h1>
                F<span>oo</span>dy Z<span>o</span>ne
              </h1>
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Search Food"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="nav-2">
            <div className="comps">
              <a href="">All</a>
              <a href="">Breakfast</a>
              <a href="">Lunch</a>
              <a href="">Dinner</a>
            </div>
          </div>
        </div>
        <div className="container">
          {data
            .filter((srch) => {
              return search.toLowerCase() === ""
                ? srch : srch.name.toLowerCase().includes(search);
            })
            .map((food) => {
              return (
                <div className="box">
                  <div className="food-img">
                    <img src={food.image} alt="" />
                  </div>
                  <div className="food-dis">
                    <h3>{food.name}</h3>
                    <p>{food.text}</p>
                    <div className="btn">
                      <button>$ {food.price}</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FoodApp;
