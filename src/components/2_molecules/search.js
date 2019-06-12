import React, { Component } from "react";
import { Index } from "elasticlunr";
import { Link } from "gatsby";

const _ = require("lodash");

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: []
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          onChange={this.search}
          placeholder="Search"
        />
        <ul className="p-0 search-results-list">
          {this.state.results.map((n, i) => {
            const { query } = this.state;
            return (
              <React.Fragment key={i}>
                {n.getSummary &&
                  n.getSummary.toLowerCase().includes(query.toLowerCase()) && (
                    <li className="list-reset p-1 px-4 md:p-0 md:px-0">
                      <Link to={`/api/v4/${_.kebabCase(n.name)}`}>
                        {n.getSummary}
                      </Link>
                    </li>
                  )}
                {n.postSummary &&
                  n.postSummary.toLowerCase().includes(query.toLowerCase()) && (
                    <li className="list-reset p-1 px-4 md:p-0 md:px-0">
                      <Link to={`/api/v4/${_.kebabCase(n.name)}/#post`}>
                        {n.postSummary}
                      </Link>
                    </li>
                  )}
                {n.putSummary &&
                  n.putSummary.toLowerCase().includes(query.toLowerCase()) && (
                    <li className="list-reset p-1 px-4 md:p-0 md:px-0">
                      <Link to={`/api/v4/${_.kebabCase(n.name)}/#put`}>
                        {n.putSummary}
                      </Link>
                    </li>
                  )}
                {n.deleteSummary &&
                  n.deleteSummary
                    .toLowerCase()
                    .includes(query.toLowerCase()) && (
                    <li className="list-reset p-1 px-4 md:p-0 md:px-0">
                      <Link to={`/api/v4/${_.kebabCase(n.name)}/#delete`}>
                        {n.deleteSummary}
                      </Link>
                    </li>
                  )}
              </React.Fragment>
            );
          })}
          {this.state.query && this.state.results.length === 0 && (
            <div>No results</div>
          )}
        </ul>
      </div>
    );
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    });
  };
}
