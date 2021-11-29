const airtableQuery = `
{
    allAirtable(filter: {table: {eq: "Projects"}}) {
      nodes {
        id
        data {
          name
          type
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

function pageToAlgoliaRecords({ id, data: { name, type, date, image } }) {
  return {
    objectID: id,
    name,
    type,
    date,
    image: {
      ...image.localFiles[0].childImageSharp.gatsbyImageData,
    },
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecords),
  },
]

module.exports = queries
