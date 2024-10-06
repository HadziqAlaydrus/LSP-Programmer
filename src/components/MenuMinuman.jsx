import React, { useEffect, useState } from "react";
import CardMinuman from "./CardMinuman";

const MenuMinuman = () => {
  const [drinkItems, setDrinkItems] = useState([]);

  // Fetch drink data from the backend
  useEffect(() => {
    const fetchDrinkItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu/minuman");
        const data = await response.json();
        setDrinkItems(data);
      } catch (error) {
        console.error("Error fetching drink items:", error);
      }
    };
    fetchDrinkItems();
  }, []);

  return (
    <section className="mt-10 p-2">
      <div className="underline font-bold text-2xl">
        <h1>Menu Minuman</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {drinkItems.map((item) => (
            <CardMinuman
              key={item.id}
              image={item.image}
              title={item.nama_minuman}
              description={`Stock: ${item.stock_minuman}`}
              price={item.harga_minuman}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuMinuman;
