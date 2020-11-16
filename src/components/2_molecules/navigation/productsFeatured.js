import React from "react";
import { Event } from "../tracking";

const styles1 = {
  borderWidth: 2,
  borderColor: '#ededf4'
};
const styles2 = {
  alignSelf: 'flex-end',
  marginBottom: -24,
  marginLeft: -24,
  marginRight: -24,
  maxWidth: '50%'
};

const ProductsFeaturedNav = () => (

    <div className="o-layout__module">
      <h6>Featured</h6>
      <a
        id="c-featured--products"
        className="c-featured"
        href="https://www.linode.com/products/gpu/"
        style={styles1}
        onClick={()=>
          Event('Navigation','click','gpus-mumbai')
        }
      >
        <img
          width="400"
          height="339"
          src="https://www.linode.com/wp-content/uploads/2020/11/mumbai-menu-feature-fg-MIN.png"
          className="c-featured__image"
          alt=""
          loading="lazy"
          style={styles2}
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            <b>GPUs have landed in Mumbai!</b>
          </div>
          <div className="c-featured__excerpt">
            On-demand GPUs for machine learning, scientific computing, and video processing.
          </div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/products/gpu/"
          >
            Try Today
          </span>
        </div>
      </a>
    </div>
);

export default ProductsFeaturedNav;
