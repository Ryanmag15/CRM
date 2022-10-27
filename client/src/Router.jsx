import AuthMiddleware from "./middlewares/AuthMiddleware";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio";
import Report from "./pages/Report";

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

const Router = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthMiddleware />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
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

          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
