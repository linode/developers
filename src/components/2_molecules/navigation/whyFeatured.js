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
          width="565"
          height="249"
          src="https://www.linode.com/wp-content/uploads/2020/11/cloudnet-menu-feature-bg-MIN.jpg"
          className="c-featured__background"
          alt=""
          loading="lazy"
          srcSet="https://www.linode.com/wp-content/uploads/2020/11/cloudnet-menu-feature-bg-MIN.jpg 565w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 565px"
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
