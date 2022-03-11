import React from "react";
import { Event } from "../tracking";

const styles = {
  color: '#ffffff',
  borderWidth: 2,
  borderColor: '#ededf4'
};

const SolutionsFeaturedNav = () => (
    <div className="o-layout__module">
      <h6>Featured</h6>
        <a
          id="c-featured--solutions"
          className="c-featured"
          href="https://www.linode.com/content/dev-mukherjee/"
          style={styles}
          onClick={()=>
            Event('Navigation','click','ou')
          }
        >
          <img
            width="632"
            height="279"
            src="https://www.linode.com/wp-content/uploads/2021/10/anomaly-ltd-header-632x279.jpg"
            className="c-featured__background"
            alt="Dev Mukherjee"
            loading="lazy"
            srcSet="https://www.linode.com/wp-content/uploads/2021/10/anomaly-ltd-header-632x279.jpg 632w, https://www.linode.com/wp-content/uploads/2021/10/anomaly-ltd-header-1064x470.jpg 1064w, https://www.linode.com/wp-content/uploads/2021/10/anomaly-ltd-header-1944x858.jpg 1944w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
            sizes="(max-width:991px) 1px, 632px"
          />
          <div className="c-featured__text">
            <div className="c-featured__headline">
              Dev Mukherjee <br/>@ Anomaly
            </div>
            <div className="c-featured__excerpt">
              Innovation Down Under and Beyond:<br/> From Virtualization to Electric Vehicles
            </div>
            <span className="c-featured__button">
              Read Dev's Story
            </span>
          </div>
        </a>
    </div>
);

export default SolutionsFeaturedNav;
