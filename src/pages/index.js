import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes: customers },
  } = data
  return (
    <Layout>
      <Hero />
      <About />
      <GridProjects projects={projects} title="latest projects" page />
      <Slider customers={customers} />
      <Survey />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          name
          type
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
    customers: allAirtable(
      filter: { table: { eq: "Customers" } }
      sort: { fields: data___name, order: DESC }
    ) {
      nodes {
        id
        data {
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FIXED
                  width: 150
                  height: 150
                )
              }
            }
          }
          title
          name
        }
      }
    }
  }
`

export default HomePage
