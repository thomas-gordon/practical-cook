import React from "react"
import PropTypes from "prop-types"
import "../css/styles.scss";
import profileImage from "../tom-gordon.jpg";

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <div className="blog-page">
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="/">Practical Cook</a>
          information for australian home cooks
        </nav>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 center page">
              {children()}
            </div>
          </div>

          <hr />
          <footer className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 center page">
              <div className="media">
                <img className="d-flex mr-3" width="50" style={{ borderRadius: "999em" }} src={profileImage}
                     alt="Tom Gordon" />
                <div className="media-body">
                  <h5 className="mt-0">About the creator</h5>
                  Hi, I'm Tom! I make frontend web development during the day
                  and food at night. You can read more about me at <a href="//tomgordon.me"
                                                                      target="_blank">tomgordon.me</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-12 center">
              <hr />
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
          </div>
          </footer>
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
