import AuthMiddleware from "./middlewares/AuthMiddleware";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Task from "./pages/Task";
import Panel from "./pages/Panel";
import Calendar from "./pages/Calendar";

import LeadShow from "./pages/LeadShow";
import LeadCreate from "./pages/LeadCreate";
import LeadEdit from "./pages/LeadEdit";

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

import ActivityShow from "./pages/ActivityShow";
import ActivityCreate from "./pages/ActivityCreate";
import ActivityEdit from "./pages/ActivityEdit";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthMiddleware />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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

          <Route path="/activity" element={<ActivityShow />} />
          <Route path="/activity/create" element={<ActivityCreate />} />
          <Route path="/activity/edit/:id" element={<ActivityEdit />} />

          <Route path="/lead" element={<LeadShow />} />
          <Route path="/lead/create" element={<LeadCreate />} />
          <Route path="/lead/edit/:id" element={<LeadEdit />} />

          <Route path="/report" element={<Report />} />
          <Route path="/task" element={<Task />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
