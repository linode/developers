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
        href="https://www.linode.com/content/cloud-block-storage-benchmarks/"
        style={styles}
        onClick={()=>
          Event('Navigation','click','storage-benchmark-report')
        }
      >
        <img
          width="632"
          height="217"
          src="https://www.linode.com/wp-content/uploads/2021/11/site-preview-pill-632x217.jpg"
          className="c-featured__background"
          alt="Cloud Spectator Cloud Storage Benchmark Report"
          loading="lazy"
          srcSet="https://www.linode.com/wp-content/uploads/2021/11/site-preview-pill-632x217.jpg 632w, https://www.linode.com/wp-content/uploads/2021/11/site-preview-pill-1064x366.jpg 1064w, https://www.linode.com/wp-content/uploads/2021/11/site-preview-pill.jpg 1070w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
          sizes="(max-width:991px) 1px, 632px"
        />
        <div className="c-featured__text">
          <div className="c-featured__headline">
            <b>Cloud Spectator</b>
            <br/>
            Benchmark Report
          </div>
          <div className="c-featured__excerpt">
            Cloud Block Storage
          </div>
          <span
            className="c-featured__button"
            href="https://www.linode.com/content/cloud-block-storage-benchmarks/"
          >
              Access Report
          </span>
        </div>
      </a>
    </div>
);

export default WhyFeaturedNav;
