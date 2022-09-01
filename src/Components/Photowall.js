import React, { Component } from "react"
import Photo from "./Photo"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Photowall extends Component {

    render() {
        return (
            <div>
                <Link className="addIcon" to="/AddPhoto">+</Link>
                <div className="photoGrid">
                    {
                        this.props.posts
                        .sort(function(a, b) {
                            return b.id - a.id
                        })
                        .map((post, index) => {
                            return <Photo key={ post.id } post={ post } {...this.props} index={index} />
                        }) 
                    }
                </div>
            </div>
        )
    }
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Photowall