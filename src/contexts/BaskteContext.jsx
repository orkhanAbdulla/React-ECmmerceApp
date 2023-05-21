import { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  let basketFromStorage = null;
  if (localStorage.getItem("basket") !== null) {
    basketFromStorage = JSON.parse(localStorage.getItem("basket"));
  }
  const [items, setItems] = useState(basketFromStorage ?? []);
  const isExistItem = (id) => items.some((item) => item.id == id);
  const addToBasket = (data) => {
    if (isExistItem(data.id)) {
      const newItems = items.filter((x) => x.id !== data.id);
      setItems(newItems);
      newItems.length > 0
        ? localStorage.setItem("basket", JSON.stringify(newItems))
        : localStorage.removeItem("basket");
    } else {
      setItems((oldData) => [...oldData, data]);
      localStorage.setItem("basket", JSON.stringify([...items, data]));
    }
  };
  const values = {
    items,
    setItems,
    addToBasket,
    isExistItem,
  };
  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};
