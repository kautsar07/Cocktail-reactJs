import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

import "./Hero.css";

export default function Hero() {
  const [drinks, setDrinks] = useState([]);

  const loadDrink = async () => {
    try {
      const drink = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
      );
      setDrinks(drink.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadDrink();
  }, [drinks]);
  return (
    <section>
      <div className="container">
        <div className="wrap-hero">
          <div className="ordinary">
            {drinks.map((item) => (
              <Card
                imgUrl={item.strDrinkThumb}
                titleDrinks={item.strDrink}
                desc={
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, delectus.
                  </p>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
