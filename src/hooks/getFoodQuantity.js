import { useEffect, useState } from "react";
import { getStoredCart } from "./localStorageCart3";

const getFoodQuantity = foodId => {
    const foodItems = getStoredCart();
    const restItem = foodItems.find((p) => p.id === foodId);
    return restItem;

}
export default getFoodQuantity;