import { useState } from "react";
import { useProductContext } from "../pages/Products/Products.helpers";
import ProductCard from "./ProductCard";

const NoResults = () => {
   return <h4>Brak wynikow</h4>;
};

const ProductList = () => {
   const [numberOfProductsShown, setNumberOfProductsShown] =
      useState<number>(6);
   const { filteredProducts } = useProductContext();

   const compactedFilteredProducts = filteredProducts.slice(
      0,
      numberOfProductsShown
   );

   return filteredProducts.length > 0 ? (
      <>
         <div className="product-list">
            {compactedFilteredProducts.map(product => (
               <ProductCard
                  key={product.id}
                  product={product}
               />
            ))}
         </div>
         {filteredProducts.length > numberOfProductsShown ? (
            <button onClick={() => setNumberOfProductsShown(prev => prev + 6)}>
               Pokaż więcej
            </button>
         ) : null}
      </>
   ) : (
      <NoResults />
   );
};

export default ProductList;
