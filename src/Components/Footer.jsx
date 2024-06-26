import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/SH-logo.png";

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="bg-slate-800 text-white lg:px-48 px-4 py-16 "
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="cursor-pointer text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            <img height={60} width={60} src={logo} alt="SH logo" />
          </span>
          <p className="text-[16px] my-4 ">
            I embark on web and mobile app development, turning ideas into
            tangible digital solutions. Committed to excellence and client
            satisfaction, I create user-friendly experiences that stand out in
            today's digital landscape.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4 ">
            <li className="my-2">CRM Development</li>
            <li className="my-2">Web Designing</li>
            <li className="my-2">Web Developement</li>
            <li className="my-2">Mobile App Development</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <a href="mailto: sabiqhashilkp786@gmail.com" target="_blank">
            <p className="text-[16px] my-4">
              <span className="text-fuchsia-500">Email: </span>
              sabiqhashilkp786@gmail.com
            </p>
          </a>
          <a href="tel: +917559873623" target="_blank">
            <p className="text-[16px] my-4">
              <span className="text-fuchsia-500">Phone:</span> +91 75598 73623
            </p>
          </a>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <div className="lg:flex-space-x-4 lg:grid lg:gap-0 flex gap-3">
            <a
              target="_blank"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out "
              href="https://github.com/SabiqHashil"
            >
              <FaGithub size={30} />
            </a>
            <br />
            <a
              target="_blank"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out "
              href="https://www.linkedin.com/in/sabiqhashilkp"
            >
              <FaLinkedin size={30} />
            </a>
            <br />
            <a
              target="_blank"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out "
              href="https://x.com/SabiqHashil"
            >
              <FaTwitter size={30} />
            </a>
            <br />
            <a
              target="_blank"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out "
              href="https://www.instagram.com/sbq_developer"
            >
              <FaInstagram size={30} />
            </a>
            <br />
            <a
              target="_blank"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out "
              href="https://www.facebook.com/Sabiqhashilkp786/"
            >
              <FaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>
      <p className="justify-center text-center text-[16px] mt-5">
        Copyright © 2022 - 2024{" "}
        <span className="text-fuchsia-500">Sabiq Hashil</span>. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
