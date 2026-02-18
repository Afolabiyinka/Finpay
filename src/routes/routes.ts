import LandingPage from "@/pages/layouts/LandingPage";
import MainLayout from "@/pages/layouts/MainLayout";
import About from "@/pages/main/About";
import Feautures from "@/pages/main/Feautures";
import Learn from "@/pages/main/Learn";
import Pricing from "@/pages/main/Pricing";
import { type RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "features",
        Component: Feautures,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "learn",
        Component: Learn,
      },
      {
        path: "pricing",
        Component: Pricing,
      },
    ],
  },
];
