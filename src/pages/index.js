import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Home from "../components/Home";
export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Home>
              <h1>Welcome to Practical Cook!</h1>
              <p>Currently in development, this is a place where tips, recipes, equipment guides
              and more will be displayed with a focus on Australian home cooking.</p>
              <p>If you'd like to sign up for notification of launch, you can add your email here;</p>
              <form name="contact" action="thanks" data-netlify>
                <p>
                  <label>Your Name: <input type="text" name="name" className="form-control" /></label>
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email" className="form-control" /></label>
                </p>
                <p>
                  <button type="submit" className="btn btn-primary">Send</button>
                </p>
              </form>
            </Home>
          </div>
        </div>
      </div>
    )
  }
}
