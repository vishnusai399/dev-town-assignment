import React, { useEffect, useState } from "react";
import axios from "axios";
import Mobiles from "./components/Mobiles";
import Filters from "./components/Filters";

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

  // filters input values
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

  // module to fetch mobiles
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
      <Filters
        filters={filters}
        filtersInputHandler={filtersInputHandler}
        applyFiltersHandler={applyFiltersHandler}
        isFiltered={isFiltered}
        removeFiltersHandler={removeFiltersHandler}
      />
      <Mobiles mobiles={mobiles} />
    </div>
  );
};

export default MobileList;
