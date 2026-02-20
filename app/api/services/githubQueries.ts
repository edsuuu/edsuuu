export const GET_USER_REPOS_QUERY = `
  query {
    user(login: "edsuuu") {
      repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}, isFork: false, privacy: PUBLIC) {
        nodes {
          id
          name
          description
          url
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          updatedAt
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
              }
            }
          }
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;
