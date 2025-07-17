import { ProductList } from "../../components";
import data from "../../../server/data.json";

const Products = () => {
   return <ProductList products={data.products}></ProductList>;
};

export default Products;
