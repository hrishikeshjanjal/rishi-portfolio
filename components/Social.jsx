import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/hrishikeshjanjal" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/hrishikesh-janjal/" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/hrishikeshjanjal/" },
  { icon: <FaTwitter />, path: "https://x.com/janjal_rishi" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link target="_blank" key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
