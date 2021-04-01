import React from "react";
import { Event } from "../tracking";

const styles = {
  borderWidth: 2,
  borderColor: '#ededf4'
};

const ProductsFeaturedNav = () => (

    <div className="o-layout__module">
      <h6>Featured</h6>
      <a
        id="c-featured--products"
        className="c-featured"
        href="https://www.linode.com/blog/linode/cloud-firewall-beta-open/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','cloud-firewall-beta')
        }
      >
        <img
          width="571"
          height="200"
          src="https://www.linode.com/wp-content/uploads/2020/12/cloud-firewall-all-together-now-background-MIN.jpg"
          className="c-featured__background"
          alt=""
          loading="lazy"
          srcset="https://www.linode.com/wp-content/uploads/2020/12/cloud-firewall-all-together-now-background-MIN.jpg 571w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 571px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            <b>Now In Beta:<br/>Linode Cloud Firewall</b>
          </div>
          <div className="c-featured__excerpt">
            Simple, Scalable Network Security
          </div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/blog/linode/cloud-firewall-beta-open/"
          >
            Register for the Beta
          </span>
        </div>
      </a>
    </div>
);

export default ProductsFeaturedNav;
