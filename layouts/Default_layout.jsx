import Header from "../components/header";
import { Outlet } from "react-router-dom";

function Default_layout() {
  return;
  <>
    <Header />
    <Outlet />;
  </>;
}

export default Default_layout;
