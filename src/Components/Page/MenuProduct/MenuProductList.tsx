import React, { useEffect, useState } from "react";
import { menuProductModel } from "../../../Interfaces";
import MenuProductCard from "./MenuProductCard";
import { useGetMenuProductsQuery } from "../../../Apis/menuProductApi";
import { useDispatch } from "react-redux";
import { setMenuProduct } from "../../../Storage/Redux/menuItemSlice";

function MenuProductList() {
  //const [menuProduct, setMenuProduct] = useState<menuProductModel[]>([]);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuProductsQuery(null);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMenuProduct(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="container row">
      {data.result.length > 0 &&
        data.result.map((item: menuProductModel, index: number) => (
          <MenuProductCard key={index} menuProduct={item} />
        ))}
    </div>
  );
}

export default MenuProductList;
