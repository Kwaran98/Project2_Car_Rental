import React from "react";
import whiteCar from "../../assets/MercedesCar.png";
import car2 from "../../assets/Honda.png";
import car3 from "../../assets/Toyota-7-seater.png";

const Cars = [
  {
    name: "MERCEDES",
    price: 150,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "HONDA",
    price: 80,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "TOYATA",
    price: 160,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Types Of Cars You Can Rent
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          We have a variety of cars in which you can rent from!
        </p>
        {/* Car Listing Cards */}
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {Cars.map((Car, index) => {
            return (
              <div
                key={index}
                className="space-y-3 border-2 border-gray-300 hover:border-green-500 p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                    src={Car.image}
                    alt=""
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-blue-500 font-oswald font-bold">
                    {Car.name}
                  </h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>{Car.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absoulute top-0 left-3">
                  12km
                </p>
              </div>
            );
          })}
        </div>
        {/* End of Car listing Cards */}
      </div>
      <div className="grid place-content-center mt-8">
        <button
          data-aos="fade up"
          data-aos-duration={500}
          className="button-outline"
        >
          Click Here For More Cars!
        </button>
      </div>
    </div>
  );
};

export default CarList;
