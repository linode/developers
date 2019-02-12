import React from "react";
// import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import { Link, graphql, StaticQuery } from "gatsby";

const ChangelogList = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <ul>
    {group.map(changelog => (
      <li key={changelog.fieldValue}>
        <Link to={`/changelog/${kebabCase(changelog.fieldValue)}/`}>
          {changelog.fieldValue} ({changelog.totalCount})
        </Link>
      </li>
    ))}
  </ul>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 2000) {
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
