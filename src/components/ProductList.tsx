import type { ProductType } from "./helpers/types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: ProductType[] }) => {
   return (
      <div className="product-list">
         {products.map(product => (
            <ProductCard
               key={product.id}
               product={product}
            ></ProductCard>
         ))}
      </div>
   );
};

export default ProductList;
