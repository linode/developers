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
          href="https://www.linode.com/spotlight/the-university-of-oklahoma/"
          style={styles}
          onClick={()=>
            Event('Navigation','click','ou')
          }
        >
          <img
            width="632"
            height="279"
            src="https://www.linode.com/wp-content/uploads/2021/06/UO-632x279.jpg"
            className="c-featured__background"
            alt="The University of Oklahoma"
            loading="lazy"
            srcset="https://www.linode.com/wp-content/uploads/2021/06/UO-632x279.jpg 632w, https://www.linode.com/wp-content/uploads/2021/06/UO-1064x470.jpg 1064w, https://www.linode.com/wp-content/uploads/2021/06/UO-1944x858.jpg 1944w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
            sizes="(max-width:991px) 1px, 632px"
          />
          <div className="c-featured__text">
            <div className="c-featured__headline">
              <b>Higher Ed: The University of Oklahoma</b>
            </div>
            <div className="c-featured__excerpt">
              Developing Innovative Approaches <br/> to Understanding Social and Natural Risks
            </div>
            <span
              className="c-featured__button"
              href="https://www.linode.com/spotlight/the-university-of-oklahoma/"
            >
              Read OU Story
            </span>
          </div>
        </a>
    </div>
);

export default SolutionsFeaturedNav;
