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
        href="https://www.linode.com/content/try-infrastructure-as-code-ebook-series/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','ebook-iac')
        }
      >
        <img
          width="632"
          height="217"
          src="https://www.linode.com/wp-content/uploads/2022/04/IaCeBook-CommunityPg-632x217"
          className="c-featured__background"
          alt="IAC eBook"
          loading="lazy"
          srcset="https://www.linode.com/wp-content/uploads/2022/04/IaCeBook-CommunityPg-632x217.jpg 632w, https://www.linode.com/wp-content/uploads/2022/04/IaCeBook-CommunityPg-1064x366.jpg 1064w, https://www.linode.com/wp-content/uploads/2022/04/IaCeBook-CommunityPg-1944x669.jpg 1944w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"          sizes="(max-width:991px) 1px, 632px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            Try IAC by Justin Mitchel
          </div>
          <div className="c-featured__excerpt">A step-by-step IAC guide for Terraform,<br/> Ansible, Puppet, Chef, and Salt</div>
          <span className="c-featured__button">
            Download
          </span>
        </div>
      </a>
    </div>
);

export default CommunityFeaturedNav;
