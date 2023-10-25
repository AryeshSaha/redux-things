import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

export const CakeView = () => {
  const [order, setOrder] = useState(1);
  const [restock, setRestock] = useState(1);
  const cakeCount = useSelector((state) => state.cake.cakeCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes: {cakeCount} </h2>
      <input
        type="number"
        id="order"
        value={order}
        onChange={(e) => setOrder(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          if (order < 1) {
            alert(
              "We're sorry to inform you that you are either blind or a careless motherfucker \nyou can't order less than one Cake you idiot!"
            );
          } else if (order > cakeCount) {
            alert(
              "We're sorry to inform you that you are either blind or a careless motherfucker \nthe number of cakes is given on the screen you idiot!"
            );
          } else {
            dispatch(ordered(order));
          }
          setOrder(1);
        }}
      >
        Order Cakes
      </button>
      <input
        type="number"
        id="restock"
        value={restock}
        onChange={(e) => setRestock(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          if (restock < 1) {
            alert(
              "You stupid or what? you're trying to restock less than one item wtf is wrong with you"
            );
          } else {
            dispatch(restocked(restock));
          }
          setRestock(1);
        }}
      >
        Restock Cakes
      </button>
    </div>
  );
};
