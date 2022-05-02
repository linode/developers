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
          href="https://www.linode.com/content/cloudways/"
          style={styles}
          onClick={()=>
            Event('Navigation','click','cloudways')
          }
        >
          <img
            width="632"
            height="235"
            src="https://www.linode.com/wp-content/uploads/2022/04/cloudways-2-632x235.jpg"
            className="c-featured__background"
            alt="Cloudways Customer Story"
            loading="lazy"
            srcSet="https://www.linode.com/wp-content/uploads/2022/04/cloudways-2-632x235.jpg 632w, https://www.linode.com/wp-content/uploads/2022/04/cloudways-2-1064x395.jpg 1064w, https://www.linode.com/wp-content/uploads/2022/04/cloudways-2.jpg 1215w, data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
            sizes="(max-width:991px) 1px, 632px"
          />
          <div className="c-featured__text">
            <div className="c-featured__headline">
              Cloudways
            </div>
            <div className="c-featured__excerpt">
              Turning a Partnership into Profit
            </div>
            <span className="c-featured__button">
              Read Story
            </span>
          </div>
        </a>
    </div>
);

export default SolutionsFeaturedNav;
