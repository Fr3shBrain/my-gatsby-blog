import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { CardContainer } from "../elements/CardElements"
import CardItem from "./CardItem"

const Card = () => {
const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  return (
      <CardContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <CardItem
            key={node.fields.slug}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.publishedDate}
          />
        ))}
      </CardContainer>
  )
}

export default Card

