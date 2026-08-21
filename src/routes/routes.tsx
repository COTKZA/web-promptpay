import { createBrowserRouter } from "react-router";
import PaymentQRCode from "../pages/PaymentQRCode";
import SlipVerification from "../pages/SlipVerification";
// import Home from "../pages/Home";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   Component: Home,
  // },
  {
    path: "/",
    Component: PaymentQRCode,
  },
  {
    path: "/payment/slip-verification",
    Component: SlipVerification,
  },
]);

export default router;
