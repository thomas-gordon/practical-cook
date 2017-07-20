import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import PropTypes from "prop-types"
import "../css/styles.scss";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <div>
          <nav className="navbar navbar-light bg-faded">
            <Link
              className="navbar-brand"
              to={"/"}
            >
              <img src="http://placehold.it/30x30" width="30" height="30" className="d-inline-block align-top" alt="" /> Practical Cook
            </Link>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">

          </div> 
          </nav>
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-6 center page">
                       {children()}
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.function,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
