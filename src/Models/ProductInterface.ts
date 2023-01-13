export default interface ProductInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stockAmount: number;
  image: string;
  description: string;
  type: string;
  isImported: boolean;
  isTaxable: boolean;
}
