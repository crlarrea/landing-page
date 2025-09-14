import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <ul className="socialMedia">
      <li>
        <a target="_blank" rel="">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a target="_blank" rel="">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a target="_blank" rel="">
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );
};
export default SocialMedia;
