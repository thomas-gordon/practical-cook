import React from "react"
import get from "lodash/get"
import Helmet from "react-helmet"
import PropTypes from 'prop-types';

class ThanksIndex extends React.Component {
    render() {
        console.log("props", this.props)
        return (
            <div>
                <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
                <h1>Thanks for your submission!</h1>
                <p>When the site is fully up and running, I'll send you an email with the link.</p>
            </div>
        )
    }
}

ThanksIndex.propTypes = {
    route: PropTypes.object,
};

export default ThanksIndex
