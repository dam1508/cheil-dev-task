import { type ProductsApiResponse } from "../helpers/types.ts";

export const getProducts = () => {
   const products = fetch("../../../server/data.json")
      .then(response => {
         return new Promise(resolve =>
            setTimeout(() => resolve(response), 200)
         ) as Promise<Response>;
      })
      .then(response => {
         return response.json();
      });

   return products as Promise<ProductsApiResponse>;
};
