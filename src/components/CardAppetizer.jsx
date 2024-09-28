import React from 'react'

const CardAppetizer = ({ image, title, description, price }) => {
  return (
    <div className="card card-compact bg-base-100 w-52 mx-auto mt-10 shadow-xl">
      <figure className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover" // Control width and height of the image
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className="font-bold">Rp.{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default CardAppetizer
