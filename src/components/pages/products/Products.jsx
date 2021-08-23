import React from "react";

import * as S from "./style";

// import { DataContext } from "../../../context/DataContext";
import { useContainer } from "./container";

const Home = () => {
  const { handleFilter, filteredArray } = useContainer();
  // const { someData } = useContext(DataContext);

  // const [filteredArray, setFilterArray] = useState(someData);
  // console.log(filteredArray);

  // function showWomens() {
  //   const arr = someData.filter((item) => item.category === "women's clothing");
  //   setFilterArray(arr);
  // }

  // const handleFilter = (category) => {
  //   console.log(category);
  //   if (category === "men's clothing") {
  //     const arr = someData.filter((item) => item.category === category);
  //     return setFilterArray(arr);
  //   }

  //   if (category === "women's clothing") {
  //     const arr = someData.filter((item) => item.category === category);
  //     return setFilterArray(arr);
  //   }

  //   if (category === "all") {
  //     return setFilterArray(someData);
  //   } else {
  //     const arr = someData.filter(
  //       (item) =>
  //         item.category !== "men's clothing" &&
  //         item.category !== "women's clothing"
  //     );
  //     return setFilterArray(arr);
  //   }
  // };

  console.log(filteredArray);

  return (
    <S.Home>
      <S.ButtonsPanel>
        <S.Button onClick={() => handleFilter("all")}>All</S.Button>
        <S.Button onClick={() => handleFilter("women's clothing")}>
          Women's
        </S.Button>
        <S.Button onClick={() => handleFilter("men's clothing")}>
          Men's{" "}
        </S.Button>
        <S.Button onClick={() => handleFilter("accesories")}>
          Accessoreis{" "}
        </S.Button>
      </S.ButtonsPanel>
      <S.ProducstWrapper>
        {/* <S.ProductFrame>
          <img src={someData[1]?.image} alt="product" />
          <p>{someData[1]?.title}</p>
          <p>£{someData[1]?.price}</p>
          <S.Button>Add to basket</S.Button>
        </S.ProductFrame> */}
        {filteredArray.map((item) => {
          const { id, title, image, price } = item;
          return (
            <S.ProductFrame id={id}>
              <div className="imgWrapper">
                <img src={image} alt="product" />
              </div>

              <p className="title">{title}</p>
              <p className="price">£{price}</p>
              <S.Button>Add to basket</S.Button>
            </S.ProductFrame>
          );
        })}
      </S.ProducstWrapper>
    </S.Home>
  );
};

export default Home;
