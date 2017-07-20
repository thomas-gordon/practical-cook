import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Header from '../components/Header';
import "../css/styles.scss"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Practical Cook"
          meta={[
            { name: "description", content: "practical cooking resources for at home cooks." },
            { name: "keywords", content: "cooking, practical, efficient, organise, recipes" },
          ]}
        />
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">
            Practical Cook
          </a>
        </nav>
        {this.props.children()}
      </div>
    )
  }
}
