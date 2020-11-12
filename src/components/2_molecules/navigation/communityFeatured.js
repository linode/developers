import React from "react";
import { Event } from "../tracking";

const styles = {
  color: '#ffffff'
};

const CommunityFeaturedNav = () => (
    <div className="o-layout__module">
      <h6>Featured</h6>
      <a
        id="c-featured--community"
        className="c-featured"
        href="https://www.linode.com/marketplace/apps/linode/nextcloud/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','nextcloud')
        }
      >
        <img
          width="565"
          height="374"
          src="https://www.linode.com/wp-content/uploads/2020/11/nextcloud-menu-feature-bg-MIN.jpg"
          className="c-featured__background"
          alt=""
          loading="lazy"
          srcSet="https://www.linode.com/wp-content/uploads/2020/11/nextcloud-menu-feature-bg-MIN.jpg 565w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 565px"
        />
        <img
          width="416"
          height="416"
          src="https://www.linode.com/wp-content/uploads/2020/05/linode-nextcloud-white.svg"
          className="c-featured__image"
          alt=""
          loading="lazy"
          srcSet="https://www.linode.com/wp-content/uploads/2020/05/linode-nextcloud-white.svg 632w, https://www.linode.com/wp-content/uploads/2020/05/linode-nextcloud-white.svg 1064w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 416px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            New One Click App:<br/>
            <b>Nextcloud</b>
          </div>
          <div className="c-featured__excerpt">Open source productivity and storage management platform.</div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/marketplace/apps/linode/nextcloud/"
          >
            Deploy App
          </span>
        </div>
      </a>
    </div>
);

export default CommunityFeaturedNav;
