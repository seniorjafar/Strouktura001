import { Home } from "../pages/home/home.jsx";
import { About } from "../pages/about";
import { Products } from "../pages/products/products.js";
import { Downloads } from "../pages/downloads/downloads.js";
import { Contact } from "../pages/contact/contact.js";

export const routes = [
  {
    component: Home,
    path: "/",
  },
  {
    component: About,
    path: "/about",
  },
  {
    component: Products,
    path: "/products",
  },
  {
    component: Downloads,
    path: "/downloads",
  },
  {
    component: Contact,
    path: "/contact",
  },
];
