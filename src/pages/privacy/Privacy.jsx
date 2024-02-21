import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/MyContext";

const Privacy = () => {
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
          Privacy Policy
        </h3>
        <div className=" pb-[1%] ml-[10%] mr-[10%] text-lg">
          <p>
            This Privacy Policy outlines how LR-Commerce ("we," "us," or "our")
            collects, uses, discloses, and protects your personal information
            when you use our website ebharatshop.netlify.app and any related
            services (collectively, the "Service").
          </p>
          <h4>Information We Collect</h4>
          <p>
            When you use our Service, we may collect the following types of
            personal information:
          </p>
          <ul>
            <li>
              <strong>Personal Information</strong>: This may include your name,
              email address, phone number, shipping address, billing address,
              and other contact information.
            </li>
            <li>
              <strong>Payment Information</strong>: When you make a purchase, we
              collect payment information such as credit card details, PayPal
              account information, or other payment methods.
            </li>
            <li>
              <strong>Usage Data</strong>: We may collect information about how
              you interact with our Service, including your browsing activity,
              pages visited, products viewed, and other usage data.
            </li>
            <li>
              <strong>Device Information</strong>: We may collect information
              about your device, such as your IP address, browser type,
              operating system, and other technical details.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies</strong>: We use
              cookies, web beacons, and similar tracking technologies to enhance
              your browsing experience, analyze usage patterns, and personalize
              content and advertisements.
            </li>
          </ul>
          <h4>How We Use Your Information</h4>
          <p>
            We may use your personal information for the following purposes:
          </p>
          <ul>
            <li>
              To process and fulfill your orders, including payment processing,
              order confirmation, and shipping.
            </li>
            <li>
              To communicate with you about your orders, account information,
              and promotional offers.
            </li>
            <li>
              To personalize your shopping experience and provide tailored
              recommendations and advertisements.
            </li>
            <li>
              To improve our Service, analyze usage trends, and optimize website
              performance.
            </li>
            <li>
              To prevent fraud, protect against unauthorized access, and ensure
              the security of our website and users.
            </li>
            <li>
              To comply with legal obligations and enforce our Terms of Service.
            </li>
          </ul>
          <h4>Data Security</h4>
          <p>
            We take the security of your personal information seriously and
            implement appropriate measures to protect against unauthorized
            access, disclosure, alteration, or destruction. However, no method
            of transmission over the internet or electronic storage is 100%
            secure, and we cannot guarantee absolute security.
          </p>
          <h4>Data Retention</h4>
          <p>
            We will retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
          <h4>Your Rights and Choices</h4>
          <p>
            You have the right to access, update, or delete your personal
            information at any time. You may also opt out of receiving
            promotional communications from us by following the instructions
            provided in our emails or contacting us directly. Please note that
            opting out of certain communications may impact your ability to use
            certain features of the Service.
          </p>
          <h4>Changes to this Privacy Policy</h4>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the updated policy on our website
            or by other means of communication.
          </p>
          <h4>Contact Us</h4>
          <p>
            If you have any questions or concerns about our Privacy Policy or
            our handling of your personal information, please contact us at
            leopardruns.technology@gmail.com.
          </p>
          <p>Last Updated: 01/02/2024</p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
