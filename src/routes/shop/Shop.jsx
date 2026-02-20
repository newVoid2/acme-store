import { useContext } from "react";
import { ShopContext } from "../../contexts/shopContext";
import ProductCard from "../../components/product-card/ProductCard";
import './Shop.styles.scss'

const Shop = () => {
    const {shopData} = useContext(ShopContext)
    return (
        <div className="products-container">
            {shopData.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;