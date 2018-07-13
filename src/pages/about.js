import React from "react";
import { strictEqual } from "assert";

export default ({ data }) => (
    <div>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>that I could never tell you...</p>
    </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
