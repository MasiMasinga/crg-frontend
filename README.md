# CRG Frontend

A React-based frontend application using Vite as the build tool. This project uses modern React features, Tailwind CSS for styling, and fetches timeline data from an external API.

Deployed Website Link: [https://crg-frontend.onrender.com](https://crg-frontend.onrender.com)

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/MasiMasinga/crg-frontend.git
   cd crg-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or with yarn:
   ```
   yarn install
   ```

## Running the Application

### Development Mode

To run the application in development mode with hot module replacement (HMR):

```
npm run dev
```
or with yarn:
```
yarn dev
```

This will start the development server, typically at http://localhost:5173

### Building for Production

To build the application for production:

```
npm run build
```
or with yarn:
```
yarn build
```

This will generate optimized assets in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```
npm run preview
```
or with yarn:
```
yarn preview
```

## Project Structure

- `src/` - Application source code
  - `components/` - React components
  - `App.jsx` - Main application component
  - `main.jsx` - Application entry point
- `public/` - Static assets
- `index.html` - HTML template

## Technologies Used

- React 19
- Vite 6
- Tailwind CSS 4
- ESLint 9
- SWC (for Fast Refresh)
