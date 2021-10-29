import React from "react";
import { Event } from "../tracking";

const styles = {
  color: '#32363b',
  borderWidth: 2,
  borderColor: '#ededf4'
};

const ProductsFeaturedNav = () => (

    <div className="o-layout__module">
      <h6>Featured</h6>
      <a
        id="c-featured--products"
        className="c-featured"
        href="https://www.linode.com/free-bundled-services/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','free-bundled-services')
        }
      >
        <img
          width="632"
          height="316"
          src="https://www.linode.com/wp-content/uploads/2021/10/benefits-bg-632x316.png"
          className="c-featured__background"
          alt="Free Services from Linode"
          loading="lazy"
          srcset="https://www.linode.com/wp-content/uploads/2021/10/benefits-bg-632x316.png 632w, https://www.linode.com/wp-content/uploads/2021/10/benefits-bg-1064x532.png 1064w, https://www.linode.com/wp-content/uploads/2021/10/benefits-bg.png 1350w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 632px"
        />
        <img
          width="416"
          height="410"
          src="https://www.linode.com/wp-content/uploads/2021/10/benefits-front-416x410.png"
          className="c-featured__image"
          alt="Free Bundled Services"
          loading="lazy"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            <b>Free Bundled Services</b>
          </div>
          <div className="c-featured__excerpt">
            Discover our no-cost security, networking, maintenance, and monitoring solutions.
          </div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/free-bundled-services/"
          >
            Learn More
          </span>
        </div>
      </a>
    </div>
);

export default ProductsFeaturedNav;
