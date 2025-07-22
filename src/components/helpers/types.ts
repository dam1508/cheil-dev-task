import { productFilterValues } from "./constants";

type WeightUnit = "kg";

type EnergyClass = "A" | "B" | "C" | "D" | "E" | "F";

type Currency = "pln";

export type ProductUnits = {
   weight: WeightUnit;
   currency: Currency;
};

export type Price = {
   value: number;
   symbol: string;
   dateFrom: Date;
   dateTo: Date;
   rates: number;
};

export type ProductType = {
   id: string;
   name: string;
   capacity: Record<WeightUnit, number>;
   dimensions: string;
   functions: string[];
   energyClass: EnergyClass;
   price: Record<Currency, Price>;
   picture: string;
};

export type ProductListType = ProductType[];

export type ProductFiltersKeys = keyof typeof productFilterValues | "query";

export type ProductFiltersType = Record<ProductFiltersKeys, string>;

export type ProductContextType = {
   currentUnits: ProductUnits;
   filters: ProductFiltersType;
   filteredProducts: ProductListType;
   chosenProductId?: string;
   setChosenProductId: React.Dispatch<React.SetStateAction<string | undefined>>;
   changeFilter: (filter: ProductFiltersKeys, value: string) => void;
};

export type ProductsApiResponse = {
   products: ProductListType;
};
