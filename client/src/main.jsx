import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Inicio from "./routes/inicio";

import Navbar from "./components/Navbar";

import UserShow from "./pages/UserShow";
import UserCreate from "./pages/UserCreate";
import UserEdit from "./pages/UserEdit";

import AccountShow from "./pages/AccountShow";
import AccountCreate from "./pages/AccountCreate";
import AccountEdit from "./pages/AccountEdit";

import ContactShow from "./pages/ContactShow";
import ContactCreate from "./pages/ContactCreate";
import ContactEdit from "./pages/ContactEdit";

import OpportunityShow from "./pages/OpportunityShow";
import OpportunityCreate from "./pages/OpportunityCreate";
import OpportunityEdit from "./pages/OpportunityEdit";

import ProductShow from "./pages/ProductShow";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/user" element={<UserShow />} />
      <Route path="/user/create" element={<UserCreate />} />
      <Route path="/user/edit/:id" element={<UserEdit />} />

      <Route path="/account" element={<AccountShow />} />
      <Route path="/account/create" element={<AccountCreate />} />
      <Route path="/account/edit/:id" element={<AccountEdit />} />

      <Route path="/contact" element={<ContactShow />} />
      <Route path="/contact/create" element={<ContactCreate />} />
      <Route path="/contact/edit/:id" element={<ContactEdit />} />

      <Route path="/opportunity" element={<OpportunityShow />} />
      <Route path="/opportunity/create" element={<OpportunityCreate />} />
      <Route path="/opportunity/edit/:id" element={<OpportunityEdit />} />

      <Route path="/product" element={<ProductShow />} />
      <Route path="/product/create" element={<ProductCreate />} />
      <Route path="/product/edit/:id" element={<ProductEdit />} />

      <Route path="inicio" element={<Inicio />} />
    </Routes>
  </BrowserRouter>
);
