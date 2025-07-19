import { productDescriptions } from "./helpers/constants";
import "./Components.css";
import { ChooseButton, EnergyClassIndicator } from "./ui";
import type { Price, ProductType } from "./helpers/types";

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
      <span className="energy-class-info">
         {description}
         <EnergyClassIndicator value={value} />
      </span>
   );
};

const PriceTag = ({ price }: { price: Price }) => {
   const { value, symbol, dateFrom, dateTo, rates } = price;

   const priceAbsoluteValue = Math.floor(value);
   const priceDecimal = (value - priceAbsoluteValue).toFixed(2);
   const priceDecimalValue = priceDecimal.toString().slice(2);

   const dates = dateFrom.toString() + " - " + dateTo.toString();

   const rateValue = rates > 0 ? value / rates : null;
   const ratesInfo =
      rateValue && rateValue.toFixed(2) + " " + symbol + " x " + rates + " rat";

   return (
      <div className="product-info-container">
         <span className="price-dates">
            {productDescriptions.washingMashine.priceDateDescription}
            {dates}
         </span>
         <div className="price-container">
            <span className="price-value">{priceAbsoluteValue}</span>
            <div className="price-rest">
               <span>{priceDecimalValue}</span>
               <span>{symbol}</span>
            </div>
         </div>
         {rateValue && <div className="rates">{ratesInfo}</div>}
      </div>
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
         <div className="product-info-container">
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
         </div>
         <EnergyClassInfo
            description={energyClassDescription}
            value={energyClass}
         />
         <PriceTag price={price.pln} />
         <ChooseButton />
      </div>
   );
};

export default ProductCard;
