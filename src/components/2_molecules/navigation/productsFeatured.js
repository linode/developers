import React from "react";
import { Event } from "../tracking";

const styles = {
  color: '#ffffff',
  borderWidth: 2,
  borderColor: '#ededf4'
};

const ProductsFeaturedNav = () => (

    <div className="o-layout__module">
      <h6>Featured</h6>
      <a
        id="c-featured--products"
        className="c-featured"
        href="https://www.linode.com/products/linode-terraform-provider/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','terraform-provider')
        }
      >
        <img
          width="632"
          height="316"
          src="https://www.linode.com/wp-content/uploads/2021/05/Terraform_Page_Hero-632x316.png"
          className="c-featured__background"
          alt=""
          loading="lazy"
          srcset="https://www.linode.com/wp-content/uploads/2021/05/Terraform_Page_Hero-632x316.png 632w, https://www.linode.com/wp-content/uploads/2021/05/Terraform_Page_Hero-1064x532.png 1064w, https://www.linode.com/wp-content/uploads/2021/05/Terraform_Page_Hero.png 1350w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 632px"
        />
        <img
          width="416"
          height="416"
          src="https://www.linode.com/wp-content/uploads/2020/11/linode-splash-integrations-terraform-integration-4.svg"
          className="c-featured__image"
          alt=""
          loading="lazy"
          srcset="https://www.linode.com/wp-content/uploads//2020/11/linode-splash-integrations-terraform-integration-4.svg 632w, https://www.linode.com/wp-content/uploads//2020/11/linode-splash-integrations-terraform-integration-4.svg 1064w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 416px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            <b>Linode Terraform Provider</b>
          </div>
          <div className="c-featured__excerpt">
            Streamline Linode resource management using the Linode Terraform Provider.
          </div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/products/linode-terraform-provider/"
          >
            Learn More
          </span>
        </div>
      </a>
    </div>
);

export default ProductsFeaturedNav;
