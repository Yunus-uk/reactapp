import React from "react";
import { Route, Routes } from "react-router"; // Import from 'react-router-dom'
import GithubSearch from "./pages/GithubSearch";
import Counter from "./pages/Counter";
import Products from "./pages/Products";
import Layout from "./components/Layout";
import Mortgage from "./pages/Mortgage";
import TipCalculator from "./pages/TipCalculator";
import { TipProvider } from './components/TipContext';  // Import the TipProvider

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<GithubSearch />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mortgage" element={<Mortgage />} />
        
        {/* Wrap TipCalculator route with TipProvider */}
        <Route
          path="/tipcalculator"
          element={
            <TipProvider> {/* Wrap TipCalculator with TipProvider */}
              <TipCalculator />
            </TipProvider>
          }
        />
      </Route>
    </Routes>
  );
}
