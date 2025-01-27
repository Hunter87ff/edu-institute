import { lazy } from "react";


const NaavBar = lazy(() => import("./block/utility/Naavbar"));
const Landing = lazy(() => import("../pages/info/Home"));
const Footer = lazy(() => import("./block/utility/Footer"));



export { NaavBar, Landing, Footer };