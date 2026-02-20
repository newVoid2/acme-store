import { useState } from "react";
import { ShopContext } from "./shopContext";
import SHOP_DATA from '../shop-data.json'

export const ShopProvider = ({children}) => {
    const [shopData, setShopData] = useState(SHOP_DATA);
    const value = {shopData }
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}