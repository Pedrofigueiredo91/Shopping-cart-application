## Overview
This is a shopping cart application built using Next.js, designed to provide a streamlined shopping experience. It leverages Next.js for server-side rendering and optimized page loads, ensuring a fast, dynamic user experience. Users can add products to a shopping cart, update item quantities, remove items, and view the total cost, including individual and total discounts.

## Features
- **Server-Side Rendering**: Leverages Next.js for fast page loads and optimized SEO.
- **Add to Cart**: Users can add items to their cart from a list of available products.
- **Update Quantity**: For each item in the cart, users can increase or decrease the quantity or remove the item entirely.
- **Discounts**: Supports individual product discounts with different percentages.
- **Total Calculation**: Provides a total cost calculation, factoring in product prices, quantities, and discounts.

## Technical Stack
- **Framework**: Next.js for React
- **State Management**: React Context for managing cart state
- **Styling**: Tailwind CSS for component styling
- **Notifications**: `react-hot-toast` for toast notifications (e.g., confirmations for removing items)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Getting Started

1. Clone the repository:
git clone https://github.com/Pedrofigueiredo91/Shopping-cart-application

2. Navigate to the application directory:
cd your-cart-app

3. Install dependencies:
npm install 

4. Start the development server:
npm run dev

## Usage
- **Add Products to Cart**: Click on the "Add to Cart" button next to any listed product.
- **Update Quantity**: Use the "+" and "-" buttons to adjust the quantity of a cart item.
- **Remove Item**: Click the "Remove" button to delete an item from the cart.
- **View Total and Discounts**: The bottom of the cart displays the total price and total discounts.



## License
[MIT License](https://opensource.org/licenses/MIT)

