import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import SocialButton from "../assets/buttons/SocialButton";
import "../App.css";

function Header() {
  const socialsLeft = [
    { icon: FaFacebookF, link: "https://facebook.com" },
    { icon: FaInstagram, link: "https://instagram.com"},
    { icon: FaXTwitter, link: "https://x.com"},
  ];

  const socialsRight = [
    { icon: FaLinkedinIn, link: "https://linkedin.com" },
    { icon: FaGithub, link: "https://linkedin.com" },
  ];

  return (
    <div className="header">
      <div className="social-buttons left">
        {socialsLeft.map((s, i) => (
          <SocialButton key={i} icon={s.icon} link={s.link} color={s.color} />
        ))}
      </div>

      <div className="social-buttons right">
        {socialsRight.map((s, i) => (
          <SocialButton key={i} icon={s.icon} link={s.link} color={s.color} />
        ))}
      </div>
    </div>
  );
}

export default Header;
