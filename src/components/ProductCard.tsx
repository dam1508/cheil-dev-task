import type { ProductType } from "./ProductList";
import { productDescriptions } from "./helpers/constants";
import "./Components.css";
import { EnergyClassIndicator } from "./ui";

const InfoEntry = ({
   description,
   value,
}: {
   description: string;
   value: string;
}) => {
   return (
      <span className="product-info">
         <span>{description} </span>
         <b className="info-value">{value}</b>
      </span>
   );
};

const EnergyClassInfo = ({
   description,
   value,
}: {
   description: string;
   value: string;
}) => {
   return (
      <span className="product-info">
         {description}
         <EnergyClassIndicator value={value} />
      </span>
   );
};

const ProductCard = ({ product }: { product: ProductType }) => {
   const {
      picture,
      name,
      capacity,
      dimensions,
      functions,
      energyClass,
      price,
   } = product;

   const {
      capacityDescription,
      dimensionsDescription,
      functionsDescription,
      energyClassDescription,
   } = productDescriptions.washingMashine;

   return (
      <div className="product-card">
         <img
            src={picture}
            alt="pralka"
            className="product-picture"
         />
         <h3 className="product-name">{name}</h3>
         <InfoEntry
            description={capacityDescription}
            value={capacity.kg.toString()}
         />
         <InfoEntry
            description={dimensionsDescription}
            value={dimensions}
         />
         <InfoEntry
            description={functionsDescription}
            value={functions.join(", ")}
         />
         <EnergyClassInfo
            description={energyClassDescription}
            value={energyClass}
         />
      </div>
   );
};

export default ProductCard;
