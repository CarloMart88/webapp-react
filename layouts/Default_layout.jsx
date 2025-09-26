import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import GlobalContext from "../src/contexts/globalContext";
import { useContext } from "react";
import Loader from "../components/Loader";

function Default_layout() {
  const { isLoading } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <Outlet />
      {isLoading && <Loader />}
    </>
  );
}

export default Default_layout;
