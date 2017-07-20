import React from "react"
import PropTypes from "prop-types"
import "../css/styles.scss";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-6 center page">
                   {children()}
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
