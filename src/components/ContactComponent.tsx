import React, { useState } from "react";
import ContactImage from "../assets/img/contact-image.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const { name, email, phone, message } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d+$/.test(value)) {
      return; // Evita que se ingresen caracteres no numéricos
    }

    if (name === "phone" && value.length > 10) {
      return; // Evita que se ingresen más de 10 dígitos
    }

    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!isValidEmail(value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
    if (name === "phone") {
      if (!isValidPhone(value)) {
        setPhoneError(true);
      } else {
        setPhoneError(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      message.trim() !== "" &&
      !emailError &&
      !phoneError
    );
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 lg:p-0 bg-portfolio-800"
      id="Contact"
    >
      <div className="max-w-lg w-full bg-white p-8 shadow-lg rounded-2xl lg:rounded-s-2xl lg:rounded-none md:mb-0">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Contact Me!
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="input border border-portfolio-400 rounded-lg px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={`input border border-portfolio-400 rounded-lg px-2 py-1 ${
                emailError ? "border-red-500" : ""
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">Invalid email format</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              className={`input border border-portfolio-400 rounded-lg px-2 py-1 ${
                phoneError ? "border-red-500" : ""
              }`}
            />
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">Invalid phone number</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              rows={4}
              className="input border border-portfolio-400 rounded-lg px-2 py-1 resize-none"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!isFormValid()}
            className={`w-full bg-portfolio-600 ${
              isFormValid()
                ? "hover:bg-portfolio-700"
                : "cursor-not-allowed bg-portfolio-300"
            } rounded-lg py-1 text-white`}
          >
            Enviar
          </motion.button>
        </form>
      </div>

      <img
        src={ContactImage}
        alt="Contact Image"
        className="mt-8 shadow-xl md:mt-0 md:max-w-md md:w-full h-[525px] object-cover rounded-e-2xl hidden md:block"
      />
    </div>
  );
};

export default Contact;
