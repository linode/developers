import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Search from "./search";

const SearchHeader = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header className="mt-8 mb-4">
        <Search searchIndex={data.siteSearchIndex.index} />
      </header>
    )}
  />
);

export default SearchHeader;
