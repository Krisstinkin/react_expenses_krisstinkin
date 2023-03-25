import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import ExpensesPage from "components/ExpensesPage";
import HomePage from "components/HomePage";
import IncomePage from "components/IncomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {

  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ExpensesPage" element={<ExpensesPage />} />
            <Route path="/IncomePage" element={<IncomePage />} />
          </Routes>
        <Footer />
      </BrowserRouter>  
    </div>
  );

}

export default App;