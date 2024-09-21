"use client";

import { useState } from "react";
import Joi from "joi";
import { tlds } from "@hapi/tlds";
import styles from "@/styles/newsletter.module.css";
import { motion } from "framer-motion";

const NewsletterInput = (props: { status: boolean }) => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");

  const emailSchema = Joi.string()
    .email({ tlds: { allow: tlds } })
    .required();

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (emailValue: string) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue }),
      });
      const data = await response.json();
      if (response.ok) {
        setEmail("");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const subscribeUpdates = async (e: any) => {
    e.preventDefault();

    const lowerCaseEmail = email.toLowerCase();

    const loaderButton = document.getElementById(
      "loader-button"
    ) as HTMLButtonElement | null;
    const sendButton = document.getElementById(
      "send-button"
    ) as HTMLButtonElement | null;

    const { error } = emailSchema.validate(email);
    if (error) {
      setNotification("Por favor, introduz um endereço de e-mail válido.");
      setTimeout(() => {
        setNotification("");
      }, 5000);
      return;
    } else {
      setNotification("Subscreveste com sucesso à nossa newsletter! ✔︎");
      setTimeout(() => {
        setNotification("");
      }, 5000);
    }

    if (loaderButton) {
      loaderButton.style.display = "block";
      loaderButton.disabled = true;
    }

    if (sendButton) {
      sendButton.style.display = "none";
      sendButton.disabled = true;
    }

    handleFormSubmit(lowerCaseEmail);
  };

  return (
    <div className="relative pt-8 flex flex-col md:flex-row md:justify-center md:items-center text-white w-[80%] md:w-[375px]">
      <form
        name="cta-signup-form"
        aria-label="Email Form"
        onSubmit={subscribeUpdates}
        className="flex flex-col w-full"
      >
        <label htmlFor="CTA-Email-Address" className="sr-only">
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            className="w-full md:w-[375px] text-black bg-white border-2 border-black py-2 pl-4 pr-16 rounded-full"
            maxLength={256}
            name="EMAIL"
            placeholder="Escreve o teu email aqui"
            id="CTA-Email-Address-Footer"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <motion.button
            id="send-button"
            type="submit"
            className={`hidden md:block absolute top-1/2 right-1 transform -translate-y-1/2 ${
              props.status
                ? "border border-gray-400 bg-gray-300 text-gray-600"
                : "bg-black text-white rounded-full py-1.5 px-4"
            }`}
            whileHover={
              !props.status
                ? { backgroundColor: "#4337C9", color: "#fff" }
                : undefined
            }
            disabled={props.status}
          >
            Subscreve →
          </motion.button>
        </div>
                {/* Button for mobile */}
                <motion.button
          id="send-button-mobile"
          type="submit"
          className={`md:hidden w-full bg-black text-white rounded-full py-2 mt-2 ${
            props.status ? "opacity-50 cursor-not-allowed" : ""
          }`}
          whileHover={
            !props.status
              ? { backgroundColor: "#4337C9", color: "#fff" }
              : undefined
          }
          disabled={props.status}
        >
          Subscreve →
        </motion.button>
      </form>
      <div>
        {notification && (
          <div
            className={`text-sm ml-4 ${
              notification.includes("!") ? "text-green-500" : "text-red-500"
            }`}
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterInput;
