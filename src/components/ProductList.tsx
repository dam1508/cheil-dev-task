import { useProductContext } from "../pages/Products/Products.helpers";
import ProductCard from "./ProductCard";

const ProductList = () => {
   const { filteredProducts } = useProductContext();

   return (
      <div className="product-list">
         {filteredProducts.map(product => (
            <ProductCard
               key={product.id}
               product={product}
            ></ProductCard>
         ))}
      </div>
   );
};

export default ProductList;
