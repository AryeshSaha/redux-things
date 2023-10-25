import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useState } from "react";

export const IceCreamView = () => {
  const [order, setOrder] = useState(1);
  const [restock, setRestock] = useState(1);
  const iceCreamCount = useSelector((state) => state.iceCream.iceCreamCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams: {iceCreamCount} </h2>
      <input
        type="number"
        id="ICorder"
        value={order}
        onChange={(e) => setOrder(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          if (order < 1) {
            alert(
              "We're sorry to inform you that you are either blind or a stoopid motherfucker \nyou can't order less than one Ice Cream you idiot!"
            );
          } else if (order > iceCreamCount) {
            alert(
              "We're sorry to inform you that you are either blind or a careless motherfucker \nthe number of Ice Creams is given on the screen you idiot!"
            );
          } else {
            dispatch(ordered(order));
          }
          setOrder(1);
        }}
      >
        Order Ice Creams
      </button>
      <input
        type="number"
        id="ICrestock"
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
        Restock Ice Creams
      </button>
    </div>
  );
};
