import React from "react";

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
      >
        <img
          width="632"
          height="418"
          src="https://www.linode.com/wp-content/uploads/2020/08/nextcloud-gradient-632x418.png"
          className="c-featured__background"
          alt=""
          srcSet="https://www.linode.com/wp-content/uploads/2020/08/nextcloud-gradient-632x418.png 632w, https://www.linode.com/wp-content/uploads/2020/08/nextcloud-gradient-416x275.png 416w, https://www.linode.com/wp-content/uploads/2020/08/nextcloud-gradient-768x508.png 768w, https://www.linode.com/wp-content/uploads/2020/08/nextcloud-gradient.png 1000w"
          sizes="(max-width: 632px) 100vw, 632px"
        />
        <img
          width="416"
          height="416"
          src="https://www.linode.com/wp-content/uploads/2020/05/linode-nextcloud-white.svg"
          className="c-featured__image"
          alt=""
          srcSet="https://www.linode.com/wp-content/uploads//2020/05/linode-nextcloud-white.svg 416w, https://www.linode.com/wp-content/uploads//2020/05/linode-nextcloud-white.svg 632w, https://www.linode.com/wp-content/uploads//2020/05/linode-nextcloud-white.svg 1064w"
          sizes="(max-width: 416px) 100vw, 416px"
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
