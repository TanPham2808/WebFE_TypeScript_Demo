import React, { useEffect, useState } from "react";
import { menuProductModel } from "../../../Interfaces";
import MenuProductCard from "./MenuProductCard";

function MenuProductList() {
  const [menuProduct, setMenuProduct] = useState<menuProductModel[]>([]);

  useEffect(() => {
    fetch("https://localhost:7258/api/product")
      .then((response) => response.json())
      .then((data) => {
        setMenuProduct(data.result);
        console.log(data);
      });
  }, []);

  return (
    <div className="container row">
      {menuProduct.length > 0 &&
        menuProduct.map((item, index) => (
          <MenuProductCard key={index} menuProduct={item} />
        ))}
    </div>
  );
}

export default MenuProductList;
