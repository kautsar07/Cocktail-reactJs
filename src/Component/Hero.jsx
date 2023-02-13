import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [drinks, setDrinks] = useState([]);
  const loadDrink = async () => {
    try {
      const drink = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
      );
      setDrinks(drink.data.drinks.slice(0, 10));
      console.log(drink.data.drinks.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadDrink();
  }, [drinks]);
  return (
    <div>
      {drinks.map((item) => (
        <>
          <h1>{item.strDrink}</h1>
          <img src={item.strDrinkThumb} alt="" />
        </>
      ))}
    </div>
  );
}
