interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Samsung Galaxy S10",
  price: 554,
};

const tablet: Product = {
  description: "iPad Pro",
  price: 900,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

function taxCalculation({ tax, products }: TaxCalculationOptions) {
  const total = products.reduce((total, { price }) => total + price, 0);
  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({ tax, products: shoppingCart });

console.table({ total, taxTotal });
