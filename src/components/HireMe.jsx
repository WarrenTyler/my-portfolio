import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiSolidErrorCircle,
} from "react-icons/bi";

const HireMe = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  // useEffect to reset the submissionStatus after a specific duration
  useEffect(() => {
    if (submissionStatus === "success") {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 6000);

      // Cleanup the timer when the component unmounts or when submissionStatus changes
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const isValidEmail = (email) => {
    // Your custom email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formValues.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formValues.email) {
      errors.email = "Email is required";
      isValid = false;
    } else {
      if (!isValidEmail(formValues.email)) {
        errors.email = "Invalid email address";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the form is currently being submitted
    if (submissionStatus === "submitting") {
      return;
    }

    // Check if the form is valid (all required fields are filled)
    if (validateForm()) {
      try {
        // Set submission status to 'submitting' when the form starts to submit
        setSubmissionStatus("submitting");

        // Use the values from useState to send the form
        await emailjs.send(serviceId, templateId, formValues, userId);

        // Set submission status for the success message
        setSubmissionStatus("success");

        // Reset the form after successful submission
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Email sending failed:", error);

        // Set submission status for an error message
        setSubmissionStatus("error");
      }
    }
  };

  return (
    <div className="section__layout">
      <section className="w-full">
        <h2 id="hire" className="section__title">
          Hire me
        </h2>
        <p className="section__paragraph">
          Feel free to contact me anytime through any method below.
        </p>

        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="relative block">
              <label
                htmlFor="name"
                className="dark:text-white block mb-6 text-xl font-bold"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="off"
                value={formValues.name}
                onChange={handleChange}
                className="w-full border border-input-border bg-input dark:border-input-border-dark dark:bg-input-dark px-4 py-4 mb-1"
              />
              {formValues.name === "" && (
                <div className="absolute inset-y-0 top-6 right-1 flex items-center pointer-events-none">
                  <BiSolidErrorCircle className="fill-red-500 dark:fill-red-300 text-2xl" />
                </div>
              )}
            </div>
            <span className="text-red-500 dark:text-red-300 ml-2">
              {formErrors.name}
            </span>
            <div className="relative block">
              <label
                htmlFor="email"
                className="dark:text-white block mb-6 text-xl font-bold"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                value={formValues.email}
                onChange={handleChange}
                className="w-full border border-input-border bg-input dark:border-input-border-dark dark:bg-input-dark px-4 py-4 mb-1"
              />
              {!isValidEmail(formValues.email) && (
                <div className="absolute inset-y-0 top-6 right-1 flex items-center pointer-events-none">
                  <BiSolidErrorCircle className="fill-red-500 dark:fill-red-300 text-2xl" />
                </div>
              )}
            </div>
            <span className="text-red-500 dark:text-red-300 ml-2">
              {formErrors.email}
            </span>
            <div>
              <label
                htmlFor="message"
                className="text-white block mb-6 text-xl font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="w-full border border-input-border bg-input dark:border-input-border-dark dark:bg-input-dark px-4 py-4 h-56 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submissionStatus === "submitting"}
              className={`px-6 py-2 bg-theme dark:bg-theme-dark text-white font-bold ${
                submissionStatus === "submitting"
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              {submissionStatus === "submitting" ? "Sending..." : "Send it!"}
            </button>
            {submissionStatus === "success" && (
              <div className="text-green-500 dark:text-green-300">
                Email sent successfully!
              </div>
            )}

            {submissionStatus === "error" && (
              <div className="text-red-500 dark:text-red-300">
                Email sending failed. Please try again.
              </div>
            )}
          </form>

          {/* Socials */}
          <div className="flex lg:flex-col mt-20 lg:mt-8 lg:ml-16 space-x-6 lg:space-x-0 lg:space-y-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/warren-tyler-a79a42278/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin account"
            >
              <BiLogoLinkedinSquare className="w-10 h-10 lg:w-20 lg:h-20 fill-theme dark:fill-theme-dark" />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/WarrenTyler"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github account"
            >
              <BiLogoGithub className="w-10 h-10 lg:w-20 lg:h-20 fill-theme dark:fill-theme-dark" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireMe;
