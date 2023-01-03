import App from "./App";


import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import Navbar1 from "../commons/Navbar";

const PaginaInicio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  return (
    <>
      <Navbar1 />

      <App />
    </>
  );
};
export default PaginaInicio;
