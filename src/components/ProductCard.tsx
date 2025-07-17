import type { ProductType } from "./ProductList";

const ProductCard = ({ product }: { product: ProductType }) => {
   return (
      <div className="product-card">
         <div>abc: {product.name} </div>
         <div>def: {product.capacity.kg} </div>
      </div>
   );
};

export default ProductCard;
