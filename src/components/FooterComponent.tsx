import Logo from "../assets/img/Logo.jpeg";
import LinkedInIcon from "../assets/svg/linkedin.svg";
import InstagramIcon from "../assets/svg/instagram.svg";
import FacebookIcon from "../assets/svg/facebook.svg";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "http://www.linkedin.com/in/kevin-jair-romero-pulido-450b41205",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/kjromero08?igsh=NXQyaDd5djlydjMx",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/kevin.romero.165470?mibextid=ZbWKwL",
  },
];

const navigation = [
  { name: "Dashboard", idToNavigate: "Dashboard" },
  { name: "About Me", idToNavigate: "About Me" },
  { name: "Projects", idToNavigate: "Projects" },
  { name: "Contact", idToNavigate: "Contact" },
];

const Footer = () => {
  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    document.getElementById("mobile-menu")?.click();
  };

  return (
    <footer className="bg-portfolio-500 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Sección de navegación */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.idToNavigate)}
                  className="hover:underline"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="mb-2">Email: kevinro0829@gmail.com</p>
          <p className="mb-2">Phone: +52 442 466 7799</p>
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        {/* Redes Sociales */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Redes Sociales</h2>
          <ul className="flex space-x-4">
            {socialMedia.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank">
                  <img src={social.icon} alt={social.name} className="h-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
