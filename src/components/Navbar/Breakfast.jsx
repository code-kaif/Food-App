import React from "react";
import "../Container.css";
import data from "../data";

const Breakfast = () => {
  return (
    <>
      {
        <div>
          {data.map((food) => {
            if (food.type === "breakfast") {
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

export default Breakfast;
