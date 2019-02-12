import React from "react";
// import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { Link, graphql, StaticQuery } from "gatsby";

const ChangelogList = ({
  data: {
    allMarkdownRemark: { group, totalCount }
  }
}) => (
  <nav className="flex mb-4 items-center">
    <span className="uppercase font-semibold text-xs mr-4">Products:</span>
    <Link to="/changelog" className="btn btn-small btn-grey mr-2 uppercase">
      All ({totalCount})
    </Link>
    {group.map(changelog => (
      <Link
        key={changelog.fieldValue}
        to={`/changelog/${kebabCase(changelog.fieldValue)}/`}
        className="btn uppercase btn-small btn-grey mr-2"
      >
        {changelog.fieldValue} ({changelog.totalCount})
      </Link>
    ))}
  </nav>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 2000
          filter: { fileAbsolutePath: { regex: "/content/changelog/" } }
        ) {
          totalCount
          group(field: frontmatter___changelog) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => <ChangelogList data={data} {...props} />}
  />
);
