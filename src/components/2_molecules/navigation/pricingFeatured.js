import React from "react";
import { Event } from "../tracking";

const styles = {
  borderWidth: 2,
  borderColor: '#ededf4'
};

const PricingFeaturedNav = () => (
    <div className="o-layout__module">
      <h6>Featured</h6>
        <a
          id="c-featured--pricing"
          className="c-featured"
          href="https://www.linode.com/cloud-pricing-calculator/"
          style={styles}
          onClick={()=>
            Event('Navigation','click','Calculator')
          }
        >
          <img
            width="416"
            height="376"
            src="https://www.linode.com/wp-content/uploads/2020/02/Cloud_Pricing_MockUp2-416x376.png"
            className="c-featured__image"
            alt="Cloud Pricing Calculator"
            loading="lazy"
          />
          <div className="c-featured__text">
            <div className="c-featured__headline">
              Cloud Pricing Calculator
            </div>
            <div className="c-featured__excerpt">
              Estimate your cloud costs. Price and configure Linode features to match your needs.
            </div>
            <span className="c-featured__button">
              Launch Calculator
            </span>
          </div>
        </a>
    </div>
);

export default PricingFeaturedNav;
