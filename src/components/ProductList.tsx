import ProductCard from "./ProductCard";

export type ProductType = {
   id: string;
   name: string;
   capacity: { kg: number };
   dimensions: string;
   functions: string[];
   energyClass: string;
   price: number;
   picture: string;
};
const ProductList = ({ products }: { products: ProductType[] }) => {
   return (
      <div>
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
