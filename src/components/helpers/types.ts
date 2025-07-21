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

export type ProductFiltersType = {
   query: string;
   functions: string;
   energyClass: string;
   capacity: string;
};

export type ProductContextType = {
   currentUnits: ProductUnits;
   filters: ProductFiltersType;
   filteredProducts: ProductListType;
   onSubmitFilters: (filters: string) => void;
};

export type ProductsApiResponse = {
   products: ProductListType;
};
