import React, { useEffect, useState } from "react";
import CardMakanan from "./CardMakanan";

const MenuMakanan = () => {
  const [foodItems, setFoodItems] = useState([]);

  // Fetch food data from the backend
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu/makanan_utama");
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };
    fetchFoodItems();
  }, []);

  return (
    <section className="mt-10 p-2">
      <div className="underline mb-4 font-bold text-2xl">
        <h1>Menu Makanan Utama</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {foodItems.map((item) => (
            <CardMakanan
              key={item.id}
              image={item.image}
              title={item.nama_makanan}
              description={`Stock: ${item.stock_makanan}`}
              price={item.harga_makanan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuMakanan;
