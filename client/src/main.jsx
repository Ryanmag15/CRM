import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Inicio from "./routes/inicio";
import User from "./routes/user";
import Account from "./routes/account";
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

      <Route path="inicio" element={<Inicio />} />
      <Route path="user" element={<User />} />
      <Route path="account" element={<Account />} />
    </Routes>
  </BrowserRouter>
);
