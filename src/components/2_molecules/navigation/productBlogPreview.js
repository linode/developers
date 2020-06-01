import React from "react";

const ProductBlogPreview = () => (
    <div className="o-layout__module">
        <div className="fl-post-column">
            <div className="c-post-preview c-post-preview--column hentry o-card" itemScope itemType="https://schema.org/BlogPosting">
                <meta itemScope itemProp="mainEntityOfPage" itemType="https://schema.org/WebPage" itemID="https://linode.com/2020/02/28/new-web-development-and-database-one-click-apps/" content="New Web Development &#038; Database One-Click Apps"/>
                <meta itemProp="datePublished" content="2020-02-28"/>
                <meta itemProp="dateModified" content="2020-02-28"/>
                <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Linode" />
                </div>
                <div itemScope itemProp="author" itemType="https://schema.org/Person">
                    <meta itemProp="url" content="https://linode.com/author/hwilmoth/"/>
                    <meta itemProp="name" content="Hillary Wilmoth"/>
                </div>
                <div itemScope itemProp="image" itemType="https://schema.org/ImageObject">
                    <meta itemProp="url" content="https://linode.com/wp-content/uploads/2020/02/hello-oca-apps.jpg"/>
                    <meta itemProp="width" content="1920"/>
                    <meta itemProp="height" content="1008"/>
                </div>
                <div itemProp="interactionStatistic" itemScope itemType="https://schema.org/InteractionCounter">
                    <meta itemProp="interactionType" content="https://schema.org/CommentAction"/>
                    <meta itemProp="userInteractionCount" content="0"/>
                </div>
                <a className="c-post-preview__permalink" href="https://linode.com/2020/02/28/new-web-development-and-database-one-click-apps/">
                    <div className="c-post-preview__image">
                        <img width="632" height="332" src="https://linode.com/wp-content/uploads/2020/02/hello-oca-apps-632x332.jpg" className="attachment-medium size-medium wp-post-image" alt="" srcSet="https://linode.com/wp-content/uploads/2020/02/hello-oca-apps-632x332.jpg 632w, https://linode.com/wp-content/uploads/2020/02/hello-oca-apps-1064x559.jpg 1064w, https://linode.com/wp-content/uploads/2020/02/hello-oca-apps-416x218.jpg 416w, https://linode.com/wp-content/uploads/2020/02/hello-oca-apps-768x403.jpg 768w, https://linode.com/wp-content/uploads/2020/02/hello-oca-apps-1536x806.jpg 1536w, https://linode.com/wp-content/uploads/2020/02/hello-oca-apps.jpg 1920w" sizes="(max-width: 632px) 100vw, 632px"/>
                    </div>
                    <div className="c-post-preview__body">
                        <div className="c-post-preview__badge c-post-preview__author">
                            <img width="416" height="416" src="https://linode.com/wp-content/uploads/2019/07/0-416x416.jpg" className="attachment-thumbnail size-thumbnail" alt="" srcSet="https://linode.com/wp-content/uploads/2019/07/0-416x416.jpg 416w, https://linode.com/wp-content/uploads/2019/07/0.jpg 500w" sizes="(max-width: 416px) 100vw, 416px"/>
                        </div>
                        <h3 className="c-post-preview__title">New Web Development &#038; Database One-Click Apps </h3>
                        <div className="c-post-preview__meta">
                            <span className="c-post-preview__date">
                            Feb 28, 2020 </span>
                            <span className="c-post-preview__meta-sep">|</span>
                            <span className="c-post-preview__author">
                            by Hillary Wilmoth </span>
                        </div>
                        <div className="c-post-preview__excerpt">
                            <p>We’re proud to add seven new one-click apps to our growing library. This set of apps is focused on web development and database management, helping developers get up-and-running quickly on Linode.</p>
                        </div>
                        <div className="c-post-preview__categories">
                            One-Click Apps
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default ProductBlogPreview;