import React from "react";
import CardAppetizer from "./CardAppetizer";

const MenuAppetizer = () => {
  const appItems = [
    {
      id: 1,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
      price: 1000,
    },
    {
      id: 2,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Burger!",
      description: "A tasty burger with all the fixings.",
    },
    {
      id: 3,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Pasta!",
      description: "Delicious pasta with homemade sauce.",
    },
    {
      id: 4,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Salad!",
      description: "A fresh and healthy salad.",
    },
    {
      id: 5,
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Pizza!",
      description: "Delicious pizza with your favorite toppings.",
    },
  ];

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
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuAppetizer;
