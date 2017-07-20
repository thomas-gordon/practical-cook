import React from "react"
import PropTypes from "prop-types"
import "../css/styles.scss";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6 center page">
                   {children()}
              </div>
          </div>

      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
