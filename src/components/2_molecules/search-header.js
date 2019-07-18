import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Search from "./search";

class SearchHeader extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          <header className={"md:mb-4 search-header"}>
            <Search searchIndex={data.siteSearchIndex.index} />
          </header>
        )}
      />
    );
  }
}

export default SearchHeader;
