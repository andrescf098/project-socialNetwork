import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import useAuth from "../../../hooks/useAuth";

const PublicLayout = () => {
  const { auth } = useAuth();
  return (
    <>
      <Header />
      <section className="layout__public">
        {!auth._id ? <Outlet /> : <Navigate to="/social" />}
      </section>
    </>
  );
};

export default PublicLayout;
