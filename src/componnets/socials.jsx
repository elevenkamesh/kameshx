import { IoLogoLinkedin } from "react-icons/io5";
import { FaFileDownload, FaGithub, FaDev, FaMedium } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import links from '../utils/links';

const Social = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center gx-3 gy-4">
        {/* Each social link card */}
        {[ 
          { icon: <IoLogoLinkedin />, label: "LinkedIn", link: links.linkedin },
          { icon: <FaGithub />, label: "GitHub", link: links.github },
          { icon: <FaDev />, label: "Dev.to", link: links.dev },
          { icon: <FaMedium />, label: "Medium", link: links.medium },
          { icon: <TbBrandLeetcode />, label: "Leetcode", link: links.leetcode }
        ].map((item, i) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center" key={i}>
            <a
              href={item.link}
              className="d-flex flex-column align-items-center justify-content-center text-decoration-none border border-secondary-subtle  py-2 h-100"
              style={{ minHeight: "100px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fs-4 text-secondary-emphasis mb-1">{item.icon}</div>
              <div className="text-secondary-emphasis small fw-medium">{item.label}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
