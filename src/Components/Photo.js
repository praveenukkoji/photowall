import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

class Photo extends Component {
    render() {
        const post = this.props.post
        const { navigate } = this.props
        return (
            <figure className="figure">
                <Link to={`/single/${post.id}`}>
                    <img className="photo" src={post.imageLink} alt={post.description} />
                </Link>
                <figcaption>
                    <p>
                        { post.description }
                    </p>
                </figcaption>
                <div className="button-container">
                    <button className="remove-button" onClick={() => {
                        this.props.removePost(this.props.index)
                        navigate('/')
                    }}> Remove </button>

                    <Link className="button" to={`/single/${post.id}`}>
                        <div className="comment-count">
                            <div className="speech-bubble"></div>
                            {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                        </div>
                    </Link>
                </div>
            </figure>
        )
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    removePost: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

const withNavigate = (Component) => props => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
};

export default withNavigate(Photo)