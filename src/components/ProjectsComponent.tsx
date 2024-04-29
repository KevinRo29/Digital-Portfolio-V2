import { motion } from "framer-motion";

import DigitalPortfolioV1 from "../assets/img/digital-portfolio-v1.png";
import IonicIcon from "../assets/svg/ionic.svg";
import AngularIcon from "../assets/svg/angular.svg";
import TypeScriptIcon from "../assets/svg/typescript.svg";
import FirebaseIcon from "../assets/svg/firebase.svg";

import VueIcon from "../assets/svg/vue.svg";
import JavaScripIcon from "../assets/svg/javascript.svg";
import TailwindCSSIcon from "../assets/svg/tailwind-css.svg";

import PHPIcon from "../assets/svg/php.svg";
import HTMLIcon from "../assets/svg/html.svg";
import BootstrapIcon from "../assets/svg/bootstrap.svg";

function Projects() {
  return (
    <main
      className="bg-portfolio-700 min-h-screen flex flex-col justify-center space-y-12 py-10"
      id="Projects"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300 mx-4">
          Check out some of the projects I've worked on.
        </p>
      </div>

      {/* First Project */}
      <div className="w-3/4 flex flex-col lg:flex-row items-center space-x-4 mx-auto">
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full lg:w-1/3"
        >
          <a
            href="https://github.com/KevinRo29/Thesis-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://via.placeholder.com/300"
              alt="Project 1"
              className="rounded-lg w-auto h-[275px] object-cover"
            />
          </a>
        </motion.div>

        {/* Description */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-xl font-bold text-white mt-4 sm:mt-0">
            Mobile Application
          </h3>
          <p className="text-gray-300 mt-2">
            Mobile application developed in Ionic and integrated with Firebase
            that aims to revolutionize the 5's assessment process. With a focus
            on efficiency and sustainability, the platform completely digitizes
            the assessment process, eliminating the need for paper sheets and
            drastically reducing the time required to conduct each assessment.
          </p>
          <p className="text-gray-200 mt-4 font-bold">
            Techonologies used in this project
          </p>
          <div className="flex flex-row mt-2">
            <div className="flex flex-row space-x-6">
              <img
                src={IonicIcon}
                alt="Ionic"
                className="w-12 h-12 rounded-lg"
              />
              <img
                src={AngularIcon}
                alt="Angular"
                className="w-12 h-12 rounded-lg"
              />
              <img
                src={TypeScriptIcon}
                alt="TypeScript"
                className="w-12 h-12 rounded-lg"
              />
              <img
                src={FirebaseIcon}
                alt="Firebase"
                className="w-12 h-12 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Project */}
      <div className="w-3/4 flex flex-col lg:flex-row items-center space-x-4 mx-auto">
        {/* Description */}
        <div className="w-full lg:w-2/3 order-2 lg:order-1">
          <h3 className="text-xl font-bold text-white mt-4 sm:mt-0 text-right">
            Digital Porftolio
          </h3>
          <p className="text-gray-300 mt-2 text-right">
            Creation of the initial version of an innovative digital portfolio
            using advanced technologies such as Vue.js and JavaScript. This
            platform is designed to highlight my experience, skills and
            professional projects in an attractive and dynamic way.
          </p>
          <p className="text-gray-200 mt-4 font-bold text-right">
            Techonologies used in this proyect
          </p>
          <div className="flex flex-row justify-end mt-2">
            <div className="flex flex-row space-x-6">
              <img src={VueIcon} alt="Vue" className="w-12 h-12 rounded-lg" />
              <img
                src={JavaScripIcon}
                alt="JavaScript"
                className="w-12 h-12 rounded-lg"
              />
              <img
                src={TailwindCSSIcon}
                alt="Tailwind CSS"
                className="w-12 h-12 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full lg:w-1/2 order-1 lg:order-2"
        >
          <a
            href="https://github.com/KevinRo29/Digital-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={DigitalPortfolioV1}
              alt="Project 2"
              className="rounded-lg w-auto h-[275px] object-cover"
            />
          </a>
        </motion.div>
      </div>

      {/* Third Project */}
      <div className="w-3/4 flex flex-col lg:flex-row items-center space-x-4 mx-auto">
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full lg:w-1/3"
        >
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="https://via.placeholder.com/300"
              alt="Project 1"
              className="rounded-lg w-auto h-[275px] object-cover"
            />
          </a>
        </motion.div>

        {/* Description */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-xl font-bold text-white mt-4 sm:mt-0">
            Integrated Inventory Control Project
          </h3>
          <p className="text-gray-300 mt-2">
            Project designed to simplify and optimize inventory management in
            retail stores. The platform offers a comprehensive solution that
            allows owners and managers to maintain precise control over their
            stock, register sales, manage new products, adjust stock levels and
            much more, all from an intuitive and easy-to-use interface.
          </p>
          <p className="text-gray-200 mt-4 font-bold">
            Techonologies used in this proyect
          </p>
          <div className="flex flex-row mt-2">
            <div className="flex flex-row space-x-6">
              <img src={PHPIcon} alt="PHP" className="w-12 h-12 rounded-lg" />
              <img src={HTMLIcon} alt="HTML" className="w-12 h-12 rounded-lg" />
              <img
                src={BootstrapIcon}
                alt="Bootstrap"
                className="w-12 h-12 rounded-lg"
              />
              <img
                src={FirebaseIcon}
                alt="Firebase"
                className="w-12 h-12 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
