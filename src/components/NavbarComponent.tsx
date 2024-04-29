import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/img/Logo.jpeg";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Dashboard" },
  { name: "About Me" },
  { name: "Projects" },
  { name: "Contact" },
];

export default function Example() {
  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    document.getElementById("mobile-menu")?.click();
  };

  return (
    <Disclosure as="nav" className="bg-portfolio-700">
      {({ open }) => (
        <>
          <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute left-0 z-50 lg:hidden ms-2">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-portfolio-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={open ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </motion.div>
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 items-center justify-center lg:justify-start hidden lg:flex">
                <img
                  className="h-14 w-auto rounded-full"
                  src={Logo}
                  alt="Kevin Romero"
                />
              </div>

              {/* Navigation */}
              <div className="hidden lg:flex lg:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => scrollToSection(item.name)}
                      className="rounded-md px-3 py-2 text-sm font-medium uppercase text-gray-100 hover:bg-portfolio-800 hover:text-white hover:cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Background overlay */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-20"
                onClick={() => document.getElementById("mobile-menu")?.click()}
              ></motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }} // Nueva animación de entrada
                className="fixed z-40 bg-portfolio-600 left-0 top-0 h-full w-3/4 lg:hidden"
              >
                <div className="flex flex-col h-full justify-center items-center space-y-2">
                  {/* Logo */}
                  <div className="flex items-center justify-center pb-4">
                    <img
                      className="h-16 w-auto rounded-full"
                      src={Logo}
                      alt="Kevin Romero"
                    />
                  </div>

                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      onClick={() => scrollToSection(item.name)}
                      className="block rounded-md px-3 py-2 text-base font-medium uppercase text-white hover:bg-portfolio-800"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}
