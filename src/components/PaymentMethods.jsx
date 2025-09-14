import { FaApplePay, FaCcPaypal, FaGooglePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { BiLogoMastercard } from "react-icons/bi";

const PaymentMethods = () => {
  return (
    <ul className="paymentMethods">
      <li>
        <FaApplePay />
      </li>
      <li>
        <SiVisa />
      </li>
      <li>
        <img src="https://www.buzzbingo.com/library/Footer/payment-icons/verified-by-visa.png" />
      </li>
      <li>
        <img src="https://www.buzzbingo.com/library/Footer/payment-icons/mastercard-colour.png" />
      </li>
      <li>
        <img src="https://www.buzzbingo.com/library/Footer/payment-icons/securecode.png" />
      </li>
      <li>
        <img src="https://www.buzzbingo.com/library/Footer/payment-icons/paypal.png" />
      </li>
      <li>
        <BiLogoMastercard />
      </li>
      <li>
        <FaGooglePay />
      </li>
    </ul>
  );
};

export default PaymentMethods;
