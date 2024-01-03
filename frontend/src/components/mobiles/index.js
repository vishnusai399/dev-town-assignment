import React, { useEffect, useState } from "react";
import axios from "axios";
import Mobiles from "./components/Mobiles";
import Filters from "./components/Filters";
import NavBar from "../navbar/NavBar.jsx";

const MobileList = () => {
  const [mobiles, setMobiles] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState({
    brands: "all",
    processors: "all",
    price: "all",
    memory: "all",
    os: "all",
    type: "all",
  });

  const [cartItems, setCartItems] = useState([]);

  const filtersInputHandler = (event, name) => {
    setFilters({ ...filters, [name]: event?.target?.value });
  };

  const applyFiltersHandler = async () => {
    await fetchData(filters);
    setIsFiltered(true);
  };

  const removeFiltersHandler = async () => {
    setFilters({
      ...filters,
      brands: "all",
      processors: "all",
      price: "all",
      memory: "all",
      os: "all",
      type: "all",
    });
    await fetchData({
      brands: "all",
      processors: "all",
      price: "all",
      memory: "all",
      os: "all",
      type: "all",
    });
    setIsFiltered(false);
  };

  const addToCartHandler = (mobile) => {
    setCartItems((prevCartItems) => [...prevCartItems, mobile]);
  };

  const fetchData = (filters) => {
    axios
      .get(
        `http://localhost:5000/api/mobile?brand=${filters?.brands}&price=${filters?.price}&processor=${filters?.processors}&os=${filters?.os}&type=${filters?.type}&memory=${filters?.memory}`
      )
      .then((res) => {
        setMobiles(res.data?.mobileData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(filters);
  }, []);

  return (
    <div className="mobile-list-wrapper">
      <NavBar cartItemCount={cartItems.length} />
      <Filters
        filters={filters}
        filtersInputHandler={filtersInputHandler}
        applyFiltersHandler={applyFiltersHandler}
        isFiltered={isFiltered}
        removeFiltersHandler={removeFiltersHandler}
      />
      <Mobiles mobiles={mobiles} addToCartHandler={addToCartHandler} />
    </div>
  );
};

export default MobileList;
