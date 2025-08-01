
# Food Delivery Website

A modern food delivery web app built with React, Redux, Vite, and Tailwind CSS.

## Features
- Browse food categories and dishes
- Add items to cart
- Adjust item quantities in cart
- Dynamic cart calculation (subtotal, delivery fee, taxes, total)
- Responsive design
- Deployable to GitHub Pages

## Getting Started

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/RobinNegi7/Food-delivery-website.git
   cd Food-delivery-website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running Locally
Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.


## Project Structure
```
public/                 # Static assets (images, icons, etc.)
src/
  assets/               # App-specific images and SVGs
  components/           # Reusable React components (Cards, CartItem, Nav, etc.)
  context/              # React context for global state (UserContext)
  pages/                # Page components (Home, etc.)
  redux/                # Redux store and slices (cartSlice, store)
  App.jsx               # Main app component
  Category.jsx          # Food category logic
  food.js               # Food items data
  index.css             # Global styles
  main.jsx              # App entry point
  ...
.gitignore              # Files/folders to ignore in git
vite.config.js          # Vite configuration
package.json            # Project metadata and scripts
README.md               # Project documentation
```
(Project still in progress)