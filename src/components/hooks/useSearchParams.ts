import { useState } from "react";

export const useSearchParams = () => {
   const [params, setParams] = useState();
   const urlSearchParams = new URLSearchParams(window.location.search);

   console.log("a");
};
