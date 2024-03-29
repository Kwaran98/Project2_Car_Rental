import { useState } from "react";
import React from "react";

// Acura Cars
import MDX from "../../assets/Carcard_images/Acura/Acura_MDX.png";
import ILX from "../../assets/Carcard_images/Acura/Acura_ILX.png";
import NSX from "../../assets/Carcard_images/Acura/Acura_NSX.png";
import RDX from "../../assets/Carcard_images/Acura/Acura_RDX.png";
import TLX from "../../assets/Carcard_images/Acura/Acura_TLX.png";

// Volvo Cars
import S60 from "../../assets/Carcard_images/Volvo/Volvo_S60.png";
import S90 from "../../assets/Carcard_images/Volvo/Volvo_S90.png";
import V60 from "../../assets/Carcard_images/Volvo/Volvo_V60.png";
import XC40 from "../../assets/Carcard_images/Volvo/Volvo_XC40.png";
import XC60 from "../../assets/Carcard_images/Volvo/Volvo_XC60.png";
import XC90 from "../../assets/Carcard_images/Volvo/Volvo_XC90.png";
import V60cross from "../../assets/Carcard_images/Volvo/Volvo_VCross60.png";
import V90cross from "../../assets/Carcard_images/Volvo/Volvo_VCross90.png";

// BMW Car
import X2 from "../../assets/Carcard_images/BMW/BMW_X2.png";
import BMW_8_SERIES from "../../assets/Carcard_images/BMW/BMW_8SERIES.png";
import BMW_3_SERIES from "../../assets/Carcard_images/BMW/BMW_3_SERIES.png";
import BMW_4_SERIES from "../../assets/Carcard_images/BMW/BMW_4SERIES.png";
import BMW_4_SERIES_GRAN_COUPE from "../../assets/Carcard_images/BMW/BMW_4SERIESGRANCOUPE.png";
import BMW_8_SERIES_GRAN_COUPE from "../../assets/Carcard_images/BMW/BMW_8SERIES_GRAN_COUPE.png";

// Jaguar Car
import XF from "../../assets/Carcard_images/Jaguar/Jaguar_XF.png";
import JaguarE from "../../assets/Carcard_images/Jaguar/JaguarE.png";
import JaguarF from "../../assets/Carcard_images/Jaguar/JaguarFType.png";
import JaguarI from "../../assets/Carcard_images/Jaguar/JaguarI.png";
import JaguarR from "../../assets/Carcard_images/Jaguar/JaguarR.png";

//Land Rover Cars
import Defender from "../../assets/Carcard_images/Land Rover/Land_Rover_Defender.png";
import Discovery from "../../assets/Carcard_images/Land Rover/Land_Rover_Discovery.png";
import LandRoverDS from "../../assets/Carcard_images/Land Rover/LandRoverDiscoverSport.png";
import RR from "../../assets/Carcard_images/Land Rover/LandRoverRangeRover.png";
import RRE from "../../assets/Carcard_images/Land Rover/LandRoverRangeRoverEvoque.png";
import RRV from "../../assets/Carcard_images/Land Rover/LandRoverRangeRoverVelar.png";

const carImages = {
  //Acura Cars
  MDX: MDX,
  ILX: ILX,
  NSX: NSX,
  RDX: RDX,
  TLX: TLX,

  //Volvo Cars
  S60: S60,
  S90: S90,
  V60: V60,
  XC40: XC40,
  XC60: XC60,
  XC90: XC90,
  "V60 Cross Country": V60cross,
  "V90 Cross Country": V90cross,

  //Jaguar Cars
  XF: XF,
  "E-PACE": JaguarE,
  "F-TYPE": JaguarF,
  "F-PACE": JaguarR,
  "I-PACE": JaguarI,

  //Land Rover Cars
  Defender: Defender,
  Discovery: Discovery,
  "Discovery Sport": LandRoverDS,
  "Range Rover": RR,
  "Range Rover Evoque": RRE,
  "Range Rover Velar": RRV,

  //BMW Cars
  "3 Series": BMW_3_SERIES,
  "4 Series": BMW_4_SERIES,
  "8 Series": BMW_8_SERIES,
  "4 Series Gran Coupe": BMW_4_SERIES_GRAN_COUPE,
  "8 Series Gran Coupe": BMW_8_SERIES_GRAN_COUPE,
  X2: X2,
};

const carRentals = {
  Acura: 12,
  Volvo: 15,
  BMW: 20,
  Jaguar: 25,
  Landrover: 30,
};

const Carcard = ({ carDictionary }) => {
  return (
    <div className="pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
      <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Types Of Cars You Can Rent
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          We have a variety of cars in which you can rent from!
        </p>
        <h2 className="text-3xl font-papyrus font-bold underline">Acura</h2>
        <div
          data-aos="fade-up"
          data-aos-duration={1000}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12 pt-12"
        >
          {carDictionary["Acura"] &&
            carDictionary["Acura"].map((car) => (
              <div
                key={car.id}
                className="space-y-3 border-2 border-gray-300 hover:border-green-500 p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={carImages[car.name]}
                    alt={car.name}
                    className="w-full h-[120px] -ml-10 object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-blue-500 font-oswald font-bold">
                    {car.name}
                  </h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>Rental: {carRentals.Acura}/hr</p>
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="button-outline"
                    >
                      Let's Rent
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="pb-24 pt-12">
        <div className="container">
          <h2 className="text-3xl font-papyrus font-bold underline">Volvo</h2>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12 pt-12"
          >
            {carDictionary["Volvo"] &&
              carDictionary["Volvo"].map((car) => (
                <div
                  key={car.id}
                  className="space-y-3 border-2 border-gray-300 hover:border-green-500 p-3 rounded-xl relative group"
                >
                  <img
                    src={carImages[car.name]}
                    alt={car.name}
                    className="w-full h-[120px] -ml-10 object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                  <div className="space-y-2">
                    <h1 className="text-blue-500 font-oswald font-bold">
                      {car.name}
                    </h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>Rental: {carRentals.Volvo}/hr</p>
                      <button
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="button-outline"
                      >
                        Let's Rent
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="pb-24 pt-12">
        <div className="container">
          <h2 className="text-3xl font-papyrus font-bold underline">BMW</h2>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12 pt-12"
          >
            {carDictionary["BMW"] &&
              carDictionary["BMW"].map((car) => (
                <div
                  key={car.id}
                  className="space-y-3 border-2 border-gray-300 hover:border-green-500 p-3 rounded-xl relative group"
                >
                  <img
                    src={carImages[car.name]}
                    alt={car.name}
                    className="w-full h-[120px] -ml-10 object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                  <div className="space-y-2">
                    <h1 className="text-blue-500 font-oswald font-bold">
                      {car.name}
                    </h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>Rental: {carRentals.BMW}/hr</p>
                      <button
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="button-outline"
                      >
                        Let's Rent
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="pb-24 pt-12">
        <div className="container">
          <h2 className="text-3xl font-papyrus font-bold underline">Jaguar</h2>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12 pt-12"
          >
            {carDictionary["Jaguar"] &&
              carDictionary["Jaguar"].map((car) => (
                <div
                  key={car.id}
                  className="space-y-3 border-2 border-gray-300 hover:border-green-500 p-3 rounded-xl relative group"
                >
                  <img
                    src={carImages[car.name]}
                    alt={car.name}
                    className="w-full h-[120px] -ml-10 object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                  <div className="space-y-2">
                    <h1 className="text-blue-500 font-oswald font-bold">
                      {car.name}
                    </h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>Rental: {carRentals.Jaguar}/hr</p>
                      <button
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="button-outline"
                      >
                        Let's Rent
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="pb-24 pt-12">
        <div className="container">
          <h2 className="text-3xl font-papyrus font-bold underline">
            Land Rover
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12 pt-12"
          >
            {carDictionary["LandRover"] &&
              carDictionary["LandRover"].map((car) => (
                <div
                  key={car.id}
                  className="space-y-3 border-2 border-gray-300 hover:border-green-500 p-3 rounded-xl relative group"
                >
                  <img
                    src={carImages[car.name]}
                    alt={car.name}
                    className="w-full h-[120px] -ml-10 object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                  <div className="space-y-2">
                    <h1 className="text-blue-500 font-oswald font-bold">
                      {car.name}
                    </h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>Rental: {carRentals.Jaguar}/hr</p>
                      <button
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="button-outline"
                      >
                        Let's Rent
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carcard;
