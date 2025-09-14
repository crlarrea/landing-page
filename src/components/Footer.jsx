import Contact from "./Contact";
import PlayerProtection from "./PlayerProtection";
import PaymentMethods from "./PaymentMethods";
const Footer = () => {
  return (
    <footer>
      <PlayerProtection />
      <Contact />
      <PaymentMethods />
    </footer>
  );
};

export default Footer;
