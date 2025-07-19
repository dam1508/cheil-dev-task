type WeightUnit = "kg";

type EnergyClass = "A" | "B" | "C" | "D" | "E" | "F";

type Currency = "pln";

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
