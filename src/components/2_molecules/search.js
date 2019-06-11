import React from "react";
import SearchResult from './searchResult';
import {
  InstantSearch,
  Index,
  Hits,
  connectSearchBox,
  connectStateResults,
} from "react-instantsearch-dom"
import algoliasearch from 'algoliasearch/lite';

const Input = connectSearchBox(({refine, ...rest }) => {
  return (<form>
    <input 
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
  </form>)
})

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`
)

// Search component
export default (props) => {
  
  const searchClient = algoliasearch(
      process.env.GATSBY_ALGOLIA_APP_ID,
      process.env.GATSBY_ALGOLIA_SEARCH_KEY
    )
  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName={'linode-api-spec'}
      >
        <Input />
        <Results>
          <Hits hitComponent={SearchResult(() => null)} />
        </Results>
      </InstantSearch>
    </div>
  );
}
