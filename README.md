# Nozama E-Commerce Take Home Assignment

### Problem Statement

We’re working on a snazzy new E-Commerce website called Nozama. When the user is
checking out, we want to add taxes to the cart items.
Basic sales tax is applicable at a rate of 10% on all goods. However, books, food, and medical
products are exempt from sales tax. Import duty is an additional sales tax applicable on all
imported goods at a rate of 5%, with no exemptions.
When you purchase items you receive a receipt, which lists the name of all the items and their
price (including tax), finishing with the total cost of the items, and the total amounts of sales
taxes paid.
The sales tax is rounded up to the nearest 0.05 amounts.
Write an application that prints out the receipt details for these shopping baskets

| Sr. NO | Input                                                                                                                                                | Output                                                                                                                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | 1 book at 12.49<br>1 music CD at 14.99<br>1 chocolate bar at 0.85                                                                                    | 1 book: 12.49<br>1 music CD: 16.49<br>1 chocolate bar: 0.85<br><b>Sales Taxes: 1.50</b><br><b>Total: 29.83</b>                                                                                  |
| 2      | 1 imported box of chocolates at 10.00<br>1 imported bottle of perfume at 47.50                                                                       | 1 imported box of chocolates: 10.50<br>1 imported bottle of perfume: 54.65<br><b>Sales Taxes: 7.65</b><br><b>Total: 65.15</b>                                                                   |
| 3      | 1 imported bottle of perfume at 27.99<br>1 bottle of perfume at 18.99<br>1 packet of headache pills at 9.75<br>1 box of imported chocolates at 11.25 | 1 imported bottle of perfume: 32.19<br>1 bottle of perfume: 20.89<br>1 packet of headache pills: 9.75<br>1 imported box of chocolates: 11.85<br><b>Sales Taxes: 6.70</b><br><b>Total: 74.68</b> |

### Solution

#### The solution is built using

- ReactJS
- Typescript
- MUI
- TailwindCSS

#### Products Data

To keep the solution simple, I have assumed that the products will have names to distinguish them. They each will have properties like price, stockAmount, quantity, image, description, type, isImported, isTaxable.

Example JSON :

```json
{
  "id": "1",
  "name": "Fire and Blood",
  "price": 12.49,
  "stockAmount": 100,
  "quantity": 1,
  "image": "./images/book.jpg",
  "description": "A Book by George R.R. Martin",
  "type": "Book",
  "isImported": false,
  "isTaxable": false
}
```

#### User Interaction

- There is no login system in place, so the user is not authenticated. But can be implemented in future.
- The user can add any number of items to the cart.
- The user can remove any item from the cart.
- The user can update the quantity of any item in the cart.
- The user can checkout the cart.
- The user can view the Receipt of the cart order.

#### Tax Calculation

- All the products are taxed at 10% except the products which are of type Book, Food or Medical.
- All the imported products are taxed at 5%.
- Rounding is done to the nearest 0.05 amounts using Math.ceil() function.

```typescript
// calculate sales tax
const calculateSalesTax = (item: CartItemInterface): number => {
  let salesTax: number = 0;
  if (
    // exempt items
    item.type !== "Book" &&
    item.type !== "Food" &&
    item.type !== "Medical"
  ) {
    // 10% sales tax on non-exempt items
    salesTax += item.price * 0.1;
  }
  if (item.isImported) {
    // 5% sales tax on imported items
    salesTax += item.price * 0.05;
  }
  return Math.ceil(salesTax * 20) / 20;
};
```

### Receipt Solution Images

---

#### Cart List 1 Receipt

![Receipt 1](https://github.com/burdeamit/nozama-client/blob/main/public/solution/Cart1.png?raw=true)

#### Cart List 2 Receipt

![Receipt 2](https://github.com/burdeamit/nozama-client/blob/main/public/solution/Cart2.png?raw=true)

#### Cart List 3 Receipt

![Receipt 3](https://github.com/burdeamit/nozama-client/blob/main/public/solution/Cart3.png?raw=true)

### Future Improvements

- Add a login system.
- Database to store the products and cart items.
- Add a payment gateway.
- Add a search bar to search for products.

## Getting Started with The Project

### Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies required for the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

```

```
