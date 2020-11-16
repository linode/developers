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
          href="https://www.linode.com/lp/tco-calculator/"
          style={styles}
          onClick={()=>
            Event('Navigation','click','TCO')
          }
        >
          <img
            width="290"
            height="262"
            src="https://www.linode.com/wp-content/uploads/2020/11/tco-report-menu-feature-fg-MIN.png"
            className="c-featured__image"
            alt=""
            loading="lazy"
          />
          <div className="c-featured__text">
            <div className="c-featured__headline">
              Total Cost of Ownership Calculator
            </div>
            <div className="c-featured__excerpt">
              Migrating from on-premises or between cloud providers for hosting, cloud storage, or cloud computing?
            </div>
            <span
              className="c-featured__button"
              href="https://www.linode.com/lp/tco-calculator/"
            >
              Launch Calculator
            </span>
          </div>
        </a>
    </div>
);

export default PricingFeaturedNav;
