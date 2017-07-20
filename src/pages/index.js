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
                    <div className="col-12 col-lg-6">
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
                <h1 className="text-center">Welcome to Practical Cook!</h1>
                <p>Currently in development, this is a place where tips, recipes, equipment guides
                    and more will be displayed with a focus on Australian home cooking.</p>
                {/*<p>Our first two articles are on...:</p>
                <div className="row flex-row">
                    {pageLinks}
                </div>*/}

                <hr />
                <p>If you{"'"}d like to sign up for notification of launch, you can add your email here. We won't
                    give away your email to <strong>anyone at all.</strong></p>

                <form name="contact" action="thanks" data-netlify>
                    <div className="row">
                        <div className="form-group col-12 col-md-6">
                            <label><strong>Your Name:</strong>
                                <input type="text" name="name" className="form-control" />
                            </label>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label><strong>Your Email:</strong>
                                <input type="email" name="email" className="form-control" />
                            </label>
                        </div>
                    </div>
                    <p>
                        <button type="submit" className="btn btn-primary">Get updates</button>
                    </p>
                </form>

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
