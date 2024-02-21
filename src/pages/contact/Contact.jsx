import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/MyContext";

const Contact = () => {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <Layout>
      <div
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h3 className="text-center font-extrabold text-5xl pt-10 mb-10 ">
          Contact Us
        </h3>
        <div className=" pb-[1%] ml-[10%] mr-[20%] text-lg">
          <p>
            Have a question, feedback, or just want to say hello? We'd love to
            hear from you! Get in touch with us using the following contact
            information or fill out the form below and we'll get back to you as
            soon as possible.
          </p>
          <h4 className="font-extrabold mt-5">Contact Information</h4>
          <ul>
            <li>
              <strong>Email</strong>:{" "}
              <a target="_new">leopardruns.technology@gmail.com</a>
            </li>
            <li>
              <strong>Phone</strong>: [+91-8269861090]
            </li>
            <li>
              <strong>Address</strong>: [LR-Commerce Headquarters, Office No.250
              Third floor,Sagar Plaza, MP Nagar Zone 2, Bhopal, MP 462011]
            </li>
          </ul>
          <h4>Social Media</h4>
          <p>
            Connect with us on social media for the latest updates, promotions,
            and more:
          </p>
          <ul>
            <li>
              <strong>Facebook</strong>:{" "}
              <a target="_new">facebook.com/lrcommerce</a>
            </li>
            <li>
              <strong>Twitter</strong>:{" "}
              <a target="_new">twitter.com/lrcommerce</a>
            </li>
            <li>
              <strong>Instagram</strong>:{" "}
              <a target="_new">instagram.com/lrcommerce</a>
            </li>
          </ul>
          <h4>Business Hours</h4>
          <p>
            Our customer service team is available to assist you during the
            following hours:
          </p>
          <ul>
            <li>
              <strong>Monday to Friday</strong>: 9:00 AM - 6:00 PM (IST)
            </li>
            <li>
              <strong>Saturday</strong>: 9:00 AM - 1:00 PM (IST)
            </li>
            <li>
              <strong>Sunday</strong>: Closed
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
