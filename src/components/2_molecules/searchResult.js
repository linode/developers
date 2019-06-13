import React from 'react';
import { Highlight, Snippet } from "react-instantsearch-dom";
import { Link } from 'gatsby';

export default clickHandler => ({ hit }) => {
  return (
    <div className="flex items-start justify-start">
      <Link to={`/api/v4/${hit.slug}`} onClick={clickHandler}>
        <h4>
          <Highlight attribute="name" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <Snippet attribute="description" hit={hit} tagName="mark" />
    </div>
  )
}
