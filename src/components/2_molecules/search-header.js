import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Search from "./search";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchIsFixed: false
    };
  }

  componentDidMount() {
    if (window.innerWidth <= 640) {
      this.setState({ searchIsFixed: true });
    }
  }

  render() {
    const { searchIsFixed } = this.state;

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
          <header
            className={`md:mb-4 search-header ${
              searchIsFixed ? "search-header--fixed" : ""
            }`}
          >
            <Search searchIndex={data.siteSearchIndex.index} />
          </header>
        )}
      />
    );
  }
}

export default SearchHeader;
