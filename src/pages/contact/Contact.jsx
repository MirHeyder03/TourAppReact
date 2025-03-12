import React from "react";
import Header from "../../components/layout/Header";
import ContactUs from "./ContactUs";

const Contact = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-gazangul-lake">
      <Header currentPage={5} color="white" />
      <ContactUs />
    </div>
  );
};
export default Contact;
