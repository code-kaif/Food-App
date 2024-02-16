import React from "react";
import "../Container.css";
import data from "../data";

const Dinner = () => {
  return (
    <>
      {
        <div className="container">
          {data.map((food) => {
            if (food.type === "dinner") {
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
            }
          })}
        </div>
      }
    </>
  );
};

export default Dinner;
