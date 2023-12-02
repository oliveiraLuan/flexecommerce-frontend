import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderClient";

export default function CustomerHome() {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
}
