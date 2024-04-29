import { motion, useTransform, useScroll } from "framer-motion";
import NodeJsIcon from "../assets/svg/node-js.svg";
import FirebaseIcon from "../assets/svg/firebase.svg";
import PHPIcon from "../assets/svg/php.svg";
import HTMLIcon from "../assets/svg/html.svg";
import SQLServerIcon from "../assets/svg/sql-server.svg";
import TailwindcssIcon from "../assets/svg/tailwind-css.svg";
import PhotoProfile from "../assets/img/photo-profile.jpeg";

const Dashboard = () => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 577], [0, -300]);

  const technologies = [
    { name: "Angular", icon: NodeJsIcon },
    { name: "Firebase", icon: FirebaseIcon },
    { name: "PHP", icon: PHPIcon },
    { name: "HTML", icon: HTMLIcon },
    { name: "SQL Server", icon: SQLServerIcon },
    { name: "Tailwind CSS", icon: TailwindcssIcon },
  ];

  return (
    <div className="bg-image h-screen flex items-center justify-center" id="Dashboard">
      <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full lg:w-4/5">
        <div className="w-full lg:w-1/3 flex justify-center">
          <motion.img
            src={PhotoProfile}
            alt="Profile"
            className="rounded-full w-36 h-36 lg:w-52 lg:h-52"
            style={{ y: translateY }}
          />
        </div>
        <div className="flex flex-col lg:w-2/3 justify-center items-center lg:items-start w-full lg:pl-8">
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            style={{ y: translateY }}
            className="text-3xl lg:text-6xl text-white font-bold text-center lg:text-left px-2 lg:px-0 pt-3  lg:pt-0"
          >
            Hi, I'm Kevin Romero
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            style={{ y: translateY }}
            className="text-white text-lg lg:text-2xl text-center lg:text-left mt-4 lg:mt-2"
          >
            I'm a software developer with a passion for web technologies.
          </motion.p>

          <div className="w-full mt-4 lg:mt-4 space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ y: translateY }}
              className="text-2xl lg:text-4xl text-white font-bold text-center lg:text-left"
            >
              Technologies
            </motion.h2>
            <div className="flex items-center justify-between flex-wrap w-full lg:w-auto mt-2 px-2 lg:px-0">
              {technologies.map((technology, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                  style={{ y: translateY }}
                  className="flex items-center justify-center bg-white w-8 h-8 lg:w-14 lg:h-14 rounded-full mb-2 lg:mb-0 mr-2 lg:mr-4"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-6 h-6 lg:w-10 lg:h-10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
