import React, { useEffect, useState } from "react";
import CardAppetizer from "./CardAppetizer";

const MenuAppetizer = () => {
  const [appItems, setAppItems] = useState([]);

  // Fetch appetizer data from the backend
  useEffect(() => {
    const fetchAppetizers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/menu/appetizer'); // URL ke endpoint backend
        const data = await response.json();
        setAppItems(data);
      } catch (error) {
        console.error('Error fetching appetizers:', error);
      }
    };

    fetchAppetizers();
  }, []);

  return (
    <section className="mt-10 p-2">
      <div className="underline mb-4 font-bold text-2xl">
        <h1>Menu Appetizer</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {appItems.map((item) => (
            <CardAppetizer
              key={item.id}
              image={item.image}
              title={item.nama_makanan} // Sesuaikan dengan field dari database
              description={`Stock: ${item.stock_makanan}`}
              price={item.harga_makanan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuAppetizer;
