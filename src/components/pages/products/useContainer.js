import React, { useState } from "react";
import { useSelector } from "react-redux";

export const useContainer = () => {
  const allProducts = useSelector((state) => state.shopProducts.products);

  const [filteredArray, setFilterArray] = useState(allProducts);

  const handleFilter = (category) => {
    if (category === "men's clothing") {
      const arr = allProducts.filter((item) => item.category === category);
      return setFilterArray(arr);
    }

    if (category === "women's clothing") {
      const arr = allProducts.filter((item) => item.category === category);
      return setFilterArray(arr);
    }

    if (category === "all") {
      return setFilterArray(allProducts);
    } else {
      const arr = allProducts.filter(
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
