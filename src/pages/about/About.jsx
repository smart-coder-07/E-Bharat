import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/MyContext";

const About = () => {
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
        <p className=" text-lg   pt-[10%] pb-[10%] ml-[10%] mr-[10%]">
          Welcome to{" "}
          <span style={{ color: "blue", fontSize: "25px" }}>LR-Commerce</span> ,
          your one-stop destination for all your online shopping needs in India.
          At LR-Commerce, we're on a mission to revolutionize the way Indians
          shop online by offering a diverse range of products, unparalleled
          customer service, and a seamless shopping experience.
          <br />
          <br />
          <span style={{ fontSize: "30px" }}>Our Story</span>
          <br />
          LR-Commerce was founded in 2024 with a vision to empower consumers
          across India with convenient access to a wide variety of high-quality
          products, all in one place. Our journey began with a simple idea: to
          create a platform that brings together the best of Indian
          craftsmanship, innovation, and culture, while also offering
          international brands and products to meet the evolving needs of our
          customers.
          <br />
          <br />
          <span style={{ fontSize: "30px" }}> Our Values</span>
          <br />
          At LR-Commerce, we're driven by a set of core values that guide
          everything we do:
          <br />
          <span className="we-do">Quality:</span> We're committed to offering
          products of the highest quality, sourced from trusted suppliers and
          brands.
          <br />
          <span className="we-do">Customer Satisfaction:</span> Our customers
          are at the heart of everything we do, and we strive to exceed their
          expectations with every interaction.
          <br />
          <span className="we-do">Innovation:</span> We're constantly innovating
          to improve our platform, enhance the shopping experience, and stay
          ahead of the curve.
          <br />
          <span className="we-do">Transparency:</span> We believe in
          transparency and honesty in all our dealings, from pricing and product
          information to customer service.
          <br />
          <span className="we-do">Community:</span> We're dedicated to
          supporting local artisans, businesses, and communities across India,
          and we actively seek opportunities to give back.
          <br />
          <br />
          <span style={{ fontSize: "30px" }}> Our Vision</span>
          <br />
          Our vision for LR-Commerce is to become the premier online shopping
          destination for every Indian, offering a curated selection of products
          that cater to their diverse preferences, lifestyles, and aspirations.
          We're committed to fostering a culture of innovation, inclusivity, and
          sustainability as we continue to grow and evolve in the dynamic
          ecommerce landscape. <br />
          <br />
          <span style={{ fontSize: "30px" }}>Get in Touch</span>
          <br /> We'd love to hear from you! Whether you have a question,
          feedback, or just want to say hello, don't hesitate to reach out to
          us. You can contact us{" "}
          <span style={{ color: "black", fontSize: "20px" }}>
            Email: leopardruns.technology@gmail.com
          </span>{" "}
          or connect with us on social media. Thank you for choosing LR-Commerce
          for your online shopping needs.
          <span style={{ color: "blue", fontSize: "25px" }}>
            Happy shopping!
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default About;
