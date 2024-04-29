import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ComputerImage from "../assets/img/computer-image.png";
import GitHubIcon from "../assets/svg/github.svg";
import LinkedInIcon from "../assets/svg/linkedin.svg";
import DriveIcon from "../assets/svg/drive.svg";

const AboutMe = () => {
  const [text, setText] = useState("");
  const description = `Software Engineer with a year of outstanding experience in web development, working with technologies 
  such as JavaScript, TypeScript and frameworks like Node.js, as well as mastering tools like Tailwind CSS. I have demonstrated 
  solid skills in solving critical requirements in Angular. I am looking to continue to expand my skills and competencies in 
  an industry leading company, showing tenacity and ability to adapt to the environment, backed by solid self-analysis.`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(description);
    }, 100);

    return () => clearTimeout(timer);
  }, [description]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 py-12 h-auto flex flex-row items-center justify-center shadow-xl"
      id="AboutMe"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.img
              src={ComputerImage}
              alt="Computer"
              className="w-full max-w-lg mx-auto rounded-lg"
              whileHover={{ scale: 1.2 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 text-blue-400 uppercase">
                About Me
              </h2>
              <p className="text-sm lg:text-lg text-gray-300 leading-relaxed mb-4 font-consolas text-justify">
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.02, delay: index * 0.02 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1 }}
                className="border-t border-gray-600 mt-4 pt-4 text-gray-400"
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="rounded-lg hover:bg-blue-800 hover:cursor-pointer px-2 py-1">
                    <a
                      href="https://github.com/KevinRo29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white"
                    >
                      <img
                        src={GitHubIcon}
                        alt="Github"
                        className="w-6 h-6 mr-2"
                      />
                      GitHub
                    </a>
                  </div>

                  <div className="rounded-lg hover:bg-blue-800 hover:cursor-pointer px-2 py-1">
                    <a
                      href="http://www.linkedin.com/in/kevin-jair-romero-pulido-450b41205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white"
                    >
                      <img
                        src={LinkedInIcon}
                        alt="LinkedIn"
                        className="w-6 h-6 mr-2"
                      />
                      LinkedIn
                    </a>
                  </div>

                  <div className="rounded-lg hover:bg-blue-800 hover:cursor-pointer px-2 py-1">
                    <a
                      href="https://drive.google.com/drive/u/0/folders/1sRvRyG95ksmQ471mkK7OazvqG_RA3qWA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white"
                    >
                      <img
                        src={DriveIcon}
                        alt="Google Drive"
                        className="w-6 h-6 mr-2"
                      />
                      Drive
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
