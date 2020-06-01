import React from "react";

const CommunityBlogPreview = () => (
    <div className="o-layout__module">
        <div className="fl-post-column">
            <div className="c-post-preview c-post-preview--column hentry o-card" itemScope itemType="https://schema.org/BlogPosting">
                <meta itemScope itemProp="mainEntityOfPage" itemType="https://schema.org/WebPage" itemID="https://linode.com/2020/02/11/were-hitting-the-road-for-developerweek-2020/" content="We&#8217;re Hitting the Road for DeveloperWeek 2020!"/>
                <meta itemProp="datePublished" content="2020-02-11"/>
                <meta itemProp="dateModified" content="2020-02-11"/>
                <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Linode" />
                </div>
                <div itemScope itemProp="author" itemType="https://schema.org/Person">
                    <meta itemProp="url" content="https://linode.com/author/linode/"/>
                    <meta itemProp="name" content="Linode"/>
                </div>
                <div itemScope itemProp="image" itemType="https://schema.org/ImageObject">
                    <meta itemProp="url" content="https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog.jpg"/>
                    <meta itemProp="width" content="1920"/>
                    <meta itemProp="height" content="1008"/>
                </div>
                <div itemProp="interactionStatistic" itemScope itemType="https://schema.org/InteractionCounter">
                    <meta itemProp="interactionType" content="https://schema.org/CommentAction"/>
                    <meta itemProp="userInteractionCount" content="0"/>
                </div>
                <a className="c-post-preview__permalink" href="https://linode.com/2020/02/11/were-hitting-the-road-for-developerweek-2020/">
                    <div className="c-post-preview__image">
                        <img width="632" height="332" src="https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog-632x332.jpg" className="attachment-medium size-medium" alt="" srcSet="https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog-632x332.jpg 632w, https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog-1064x559.jpg 1064w, https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog-416x218.jpg 416w, https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog-768x403.jpg 768w, https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog-1536x806.jpg 1536w, https://linode.com/wp-content/uploads/2020/02/dev-week-sf-blog.jpg 1920w" sizes="(max-width: 632px) 100vw, 632px"/>
                    </div>
                    <div className="c-post-preview__body">
                    <div className="c-post-preview__badge c-post-preview__author">
                        <img alt='' src='https://secure.gravatar.com/avatar/411d64ffaf7f5b09e4f3dab19a2b9767?s=48&#038;d=blank&#038;r=g' srcSet='https://secure.gravatar.com/avatar/411d64ffaf7f5b09e4f3dab19a2b9767?s=96&#038;d=blank&#038;r=g 2x' className='avatar avatar-48 photo' height='48' width='48'/>
                    </div>
                    <h3 className="c-post-preview__title">
                    We&#8217;re Hitting the Road for DeveloperWeek 2020! </h3>
                    <div className="c-post-preview__meta">
                        <span className="c-post-preview__date">
                        Feb 11, 2020 </span>
                        <span className="c-post-preview__meta-sep">|</span>
                        <span className="c-post-preview__author">
                        by Linode </span>
                    </div>
                    <div className="c-post-preview__excerpt">
                        <p>DevWeek provides an incredible opportunity to connect with the thousands of developers, engineers, software architects, and vendors converging on Oakland, CA, this week.</p>
                    </div>
                    <div className="c-post-preview__categories">
                    Linode </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
);

export default CommunityBlogPreview;