import React, { Fragment } from "react";
import working from "../../img/WorkingTogether.png";
import customer from "../../img/CustomerService.png";
import office from "../../img/OfficeHours.png";
function AboutUsItem() {
  return (
    <Fragment>
      <div className="box1">
        <div className="boxImage col4">
          <img src={working} alt="" />
        </div>
        <div className="boxContent col8">
          <h3>Our Team</h3>

          <p>
            Looking for a new a interesting job? We encourage interdiciplinary
            working and fundamentally believe in the power of teamwork. Whether
            you're a Marketing Profession, Programmer or a Logistics Lover -
            don't hestiate to get in contact with us about open opportunities.
          </p>
          <br />
          <span>
            JOBS AT URBAN LIVING:{" "}
            <a href="https://de.linkedin.com/in/tim-breuel">Go to site</a>
          </span>
          <span>
            Send us yor Initiave application today. <a href="#">Go to chat</a>
          </span>
        </div>
      </div>

      <div className="box2">
        <div className="boxContent2 col8">
          <h3>Contact Us</h3>

          <p>
            We strive to give the best possible customer service. Should you
            have any questions or need to talk to someone about an order, you
            can get in touch with us the following ways:
          </p>
          <br />
          <span>Phone: 0402 558 33</span>
          <span>Email: maxmusterman@gmail.com</span>
          <span>
            LinkedIn:{" "}
            <a href="https://de.linkedin.com/in/tim-breuel">Go to site</a>
          </span>
          <span>
            Chat: <a href="#">Go to chat</a>
          </span>
        </div>
        <div className="boxImage2 col4">
          <img src={customer} alt="" />
        </div>
      </div>

      <div className="box3">
        <div className="boxImage col4">
          <img src={office} alt="" />
        </div>
        <div className="boxContent col8">
          <h3>Our Office</h3>

          <p>
            Located in the heart of Hamburg, our dedicated teams with their
            passion for all things interior, work to provide you with the best
            possible online shopping experience. You can find us here:{" "}
          </p>
          <br />
          <span>Urban Living GmbH</span>
          <span>Landwehr 29</span>
          <span>22087 Hamburg</span>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUsItem;
