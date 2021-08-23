import React, { useState, useContext } from "react";

import { DataContext } from "../../../context/DataContext";

export const useContainer = () => {
  const { someData } = useContext(DataContext);

  const [filteredArray, setFilterArray] = useState(someData);

  const handleFilter = (category) => {
    console.log(category);
    if (category === "men's clothing") {
      const arr = someData.filter((item) => item.category === category);
      return setFilterArray(arr);
    }

    if (category === "women's clothing") {
      const arr = someData.filter((item) => item.category === category);
      return setFilterArray(arr);
    }

    if (category === "all") {
      return setFilterArray(someData);
    } else {
      const arr = someData.filter(
        (item) =>
          item.category !== "men's clothing" &&
          item.category !== "women's clothing"
      );
      return setFilterArray(arr);
    }
  };

  return { handleFilter, filteredArray };
};

export default useContainer;
