import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
import PropTypes from 'prop-types';

class BlogIndex extends React.Component {
    render() {
        console.log("props", this.props)
        const pageLinks = []
        const siteTitle = get(this, "props.data.site.siteMetadata.title")
        const posts = get(this, "props.data.allMarkdownRemark.edges")

        posts.forEach(post => {
            if (post.node.path !== "/404/") {
                const title = get(post, "node.frontmatter.title") || post.node.path
                pageLinks.push(
                    <div className="col-12 col-lg-6 article-item">
                        <article className="article-link">
                            <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
                                <header><h2>{post.node.frontmatter.title}</h2></header>
                                <footer>{post.node.frontmatter.subtitle}</footer>
                            </Link>
                        </article>
                    </div>
                )
            }
        })
        return (
            <div>
                <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
                <div className="row flex-row">
                    {pageLinks}
                </div>
            </div>
        )
    }
}

BlogIndex.propTypes = {
    route: PropTypes.object,
};

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
  }
`;
