import React from 'react'
import Link from 'gatsby-link'

import g from "glamorous";

import { rhythm } from "../utils/typography";

const IndexPage = ({data}) => (
  <div>
    <h1>Amazing Pandas Eating Things</h1>
    <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>
    <div>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        Amazing Pandas Eating Things
      </g.H1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
        <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
          </g.H3>
          <p>{node.excerpt}</p>
        </Link>
        </div>
      ))}
    </div>
  </div>
);

export default IndexPage

export const query = graphql`
query blogListQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
        fields{
          slug
        }
       excerpt
       html
      }
    }
  }
}`
