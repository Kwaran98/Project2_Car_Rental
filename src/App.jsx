import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import CustomFilter from "./components/CustomFilter/CustomFilter";
import { getCarData } from "./utils/index";
import CarCard from "./components/Carcard/Carcard";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [allCars, setAllCars] = useState([]);
  const [carDictionary, setCarDictionary] = useState({});

  useEffect(() => {
    const tempCarDictionary = {};
    for (let car of allCars) {
      if (!(car.make.name in tempCarDictionary)) {
        tempCarDictionary[car.make.name] = [];
      }
      tempCarDictionary[car.make.name].push(car);
    }

    // Group all Acuras together
    const acuraCars = tempCarDictionary["Acura"] || [];
    // Group all Audis together
    const VolvoCars = tempCarDictionary["Volvo"] || [];
    // Group all BMWs together
    const bmwCars = tempCarDictionary["BMW"] || [];
    //Group all Jaguars togetehr
    const jaguarCars = tempCarDictionary["Jaguar"] || [];
    //Group all Land Rovers together
    const landRoverCars = tempCarDictionary["Land Rover"] || [];

    setCarDictionary({
      Acura: acuraCars,
      Volvo: VolvoCars,
      BMW: bmwCars,
      Jaguar: jaguarCars,
      LandRover: landRoverCars,
    });
  }, [allCars]);

  useEffect(() => {
    getCarData().then((data) => {
      setAllCars(data);
    });
  }, []);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Services />
      <div className= "bg-white dark:bg-dark dark:text-white">
        <div
          className="padding-x padding-y max-width sm:place-items-center bg-white dark:bg-dark dark:text-white"
          id="discover"
        >
          {!isDataEmpty ? (
            <section className=" bg-white dark:bg-dark dark:text-white">
              <div className=" bg-white dark:bg-dark dark:text-white">
                <CarCard carDictionary={carDictionary} />
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, No Results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
