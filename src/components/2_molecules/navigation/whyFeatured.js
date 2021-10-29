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
        href="https://www.linode.com/content/macrometa/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','macrometa')
        }
      >
        <img
          width="632"
          height="279"
          src="https://www.linode.com/wp-content/uploads/2021/04/macrometa5-opt-632x279.jpg"
          className="c-featured__background"
          alt="Durga Gokina, CTO and Head of R&amp;D, and Chetan Venkatesh, Co-Founder and CEO of Macrometa"
          loading="lazy"
          srcset="https://www.linode.com/wp-content/uploads/2021/04/macrometa5-opt-632x279.jpg 632w, https://www.linode.com/wp-content/uploads/2021/04/macrometa5-opt-1064x470.jpg 1064w, https://www.linode.com/wp-content/uploads/2021/04/macrometa5-opt-1944x858.jpg 1944w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 565px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            <b>Craft of Code:</b>
            <br/>
            Macrometa
          </div>
          <div className="c-featured__excerpt">
            Bringing Innovation to the Edge
          </div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/content/macrometa/"
          >
              Read Macrometa's Story
          </span>
        </div>
      </a>
    </div>
);

export default WhyFeaturedNav;
