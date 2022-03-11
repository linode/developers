import React from "react";
import { Event } from "../tracking";

const styles = {
  color: '#ffffff'
};

const CommunityFeaturedNav = () => (
    <div className="o-layout__module">
      <h6>Free eBook</h6>
      <a
        id="c-featured--community"
        className="c-featured"
        href="https://www.linode.com/content/msps-guide-to-modern-cloud-infrastructure/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','ebook-msp')
        }
      >
        <img
          width="632"
          height="217"
          src="https://www.linode.com/wp-content/uploads/2022/01/MSPeBook_CommunityPage-632x217"
          className="c-featured__background"
          alt="MSP ebook"
          loading="lazy"
          srcset="https://www.linode.com/wp-content/uploads/2022/01/MSPeBook_CommunityPage-632x217.jpg 632w, https://www.linode.com/wp-content/uploads/2022/01/MSPeBook_CommunityPage-1064x366.jpg 1064w, https://www.linode.com/wp-content/uploads/2022/01/MSPeBook_CommunityPage-1944x669.jpg 1944w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"          sizes="(max-width:991px) 1px, 632px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            The MSP's Guide<br/>to Modern Cloud Infrastructure
          </div>
          <div className="c-featured__excerpt">Discover one of the best-kept secrets in building a scalable,<br/> thriving, modern Managed Service Provider business.</div>
          <span className="c-featured__button">
            Download
          </span>
        </div>
      </a>
    </div>
);

export default CommunityFeaturedNav;
