import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Search from "./search";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchIsFixed: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.innerWidth >= 640) {
      this.setState({ searchIsFixed: false });
    } else if (window.scrollY === 0 && this.state.searchIsFixed === true) {
      this.setState({ searchIsFixed: false });
    } else if (window.scrollY !== 0 && this.state.searchIsFixed !== true) {
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
            className={`md:mb-4 searchHeader ${
              searchIsFixed ? "searchHeader--fixed" : ""
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
