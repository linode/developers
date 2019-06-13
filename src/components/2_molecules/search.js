import React from "react";
import SearchResult from './searchResult';
import {
  InstantSearch,
  Hits,
  Panel,
  SearchBox,
  connectSearchBox,
  connectStateResults,
} from "react-instantsearch-dom"
import algoliasearch from 'algoliasearch/lite';
import '../../css/components/2_molecules/search.css';

import 'instantsearch.css/themes/reset.css';

// const Input = connectSearchBox(({refine, ...rest }) => {
//   return (
//     <form>
//       <input 
//         type="text"
//         placeholder="Search"
//         aria-label="Search"
//         onChange={e => refine(e.target.value)}
//         {...rest}
//       />
//     </form>
//   )
// })

const EmptyResult = () => {
  return <div className="emptyResult">No results</div>
}

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : <EmptyResult />
)

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

// Search component
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    }
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState({ focus: !this.state.focus });
  }

  render() {
    return (
      <div>
        <InstantSearch
          searchClient={searchClient}
          indexName={'linode-api-spec'}
        >
          <SearchBox 
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
          />
          {this.state.focus &&
            <Panel className={"absolute bg-white z-50 w-10/12"}>
              <Results>
                <Hits hitComponent={SearchResult(() => null)} />
              </Results>
            </Panel>
          }
        </InstantSearch>
      </div>
    );
  }
}
