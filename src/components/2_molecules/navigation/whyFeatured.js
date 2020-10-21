import React from "react";
import { Event } from "../tracking";

const styles = {
  color: '#ffffff'
};

const WhyFeaturedNav = () => (
    <div className="o-layout__module">
      <h6>Featured</h6>
      <a
        id="c-featured--why_linode"
        className="c-featured"
        href="https://www.linode.com/spotlight/cloudnet/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','cloudnet')
        }
      >
        <img
          width="632"
          height="279"
          src="https://www.linode.com/wp-content/uploads/2020/08/cloudnet-hero-1-scaled-1-632x279.jpg"
          className="c-featured__background"
          alt=""
          srcSet="https://www.linode.com/wp-content/uploads/2020/08/cloudnet-hero-1-scaled-1-632x279.jpg 632w, https://www.linode.com/wp-content/uploads/2020/08/cloudnet-hero-1-scaled-1-1064x470.jpg 1064w, https://www.linode.com/wp-content/uploads/2020/08/cloudnet-hero-1-scaled-1-416x184.jpg 416w, https://www.linode.com/wp-content/uploads/2020/08/cloudnet-hero-1-scaled-1-768x339.jpg 768w, https://www.linode.com/wp-content/uploads/2020/08/cloudnet-hero-1-scaled-1-1536x678.jpg 1536w, https://www.linode.com/wp-content/uploads/2020/08/cloudnet-hero-1-scaled-1-2048x904.jpg 2048w"
          sizes="(max-width: 632px) 100vw, 632px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            <b>Craft of Code:</b>
            <br/>
            Cloudnet
          </div>
          <div className="c-featured__excerpt">
            Reliability Allows Customers (and Cloudnet) To Do What They Love
          </div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/spotlight/cloudnet/"
          >
              Read Cloudnet's Story
          </span>
        </div>
      </a>
    </div>
);

export default WhyFeaturedNav;
