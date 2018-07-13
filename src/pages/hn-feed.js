import React from 'react'
import Link from 'gatsby-link'

export default ( {data} ) => {
  return(
    <div>
      <h1>Since you asked, here is the HackerNews feed:</h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>score</th>
            <th>by</th>
            <th>timeISO</th>
          </tr>
        </thead>
        <tbody>
          {data.allHnStory.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
              <Link to={node.url}>{node.title}</Link>
              </td>
              <td>
                {node.score}
              </td>
              <td>
                {node.by}
              </td>
              <td>
                {node.timeISO}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )    
}

export const query = graphql `
query HNQuery{
  allHnStory {
    edges {
      node {
        title
        score
        url
        by
        timeISO
      }
    }
  }
}
`
