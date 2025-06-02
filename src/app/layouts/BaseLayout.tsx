import { Header } from "../../wigets/header";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default BaseLayout;
