import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/MyContext";

const Return = () => {
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
          Return Policy
        </h3>
        <div className=" pb-[1%] ml-[10%] mr-[10%] text-lg">
          <p>
            At LR-Commerce, we want you to shop with confidence and be
            completely satisfied with your purchase. If for any reason you're
            not satisfied with your order, we're here to help. Please review our
            return policy below for information on returns, exchanges, and
            refunds.
          </p>
          <h4 className="text-3x1 font-bold">Eligibility Criteria</h4>
          <p>
            To be eligible for a return, your item must be unused, unworn, and
            in the same condition that you received it. It must also be in the
            original packaging with all tags and labels intact. Please note that
            certain items, such as perishable goods, personalized items, and
            gift cards, are not eligible for return.
          </p>
          <h4 className="text-3x1 font-bold">Return Process</h4>
          <p>To initiate a return, please follow these steps:</p>
          <ol>
            <li>
              <p>
                <strong>Contact Customer Service</strong>: Reach out to our
                customer service team within 8-10 days of receiving your order
                to request a return authorization. You can contact us via email
                at leopardruns.technology@gmail.com or by phone at
                +91-8269861090.
              </p>
            </li>
            <li>
              <p>
                <strong>Provide Details</strong>: Provide your order number, the
                item(s) you wish to return, and the reason for the return. Our
                customer service team will guide you through the return process
                and provide you with a return authorization number (RMA) if
                applicable.
              </p>
            </li>
            <li>
              <p>
                <strong>Packaging</strong>: Carefully package the item(s) in
                their original packaging, ensuring that they are securely packed
                to prevent damage during transit.
              </p>
            </li>
            <li>
              <p>
                <strong>Return Shipping</strong>: Ship the item(s) back to us
                using a trackable shipping method. You will be responsible for
                the return shipping costs unless the return is due to an error
                on our part or a defective product.
              </p>
            </li>
            <li>
              <p>
                <strong>Inspection and Refund</strong>: Once we receive your
                returned item(s), our team will inspect them to ensure they meet
                our return eligibility criteria. If the return is approved, we
                will process a refund to your original method of payment within
                7 days.
              </p>
            </li>
          </ol>
          <h4>Exchanges</h4>
          <p>
            If you would like to exchange an item for a different size, color,
            or style, please follow the return process outlined above and place
            a new order for the desired item. Exchanges are subject to
            availability.
          </p>
          <h4 className="text-3x1 font-bold">Damaged or Defective Items</h4>
          <p>
            If you receive a damaged or defective item, please contact us
            immediately to report the issue. We will work with you to resolve
            the problem as quickly as possible, whether it's issuing a
            replacement, providing a refund, or offering store credit.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Return;
