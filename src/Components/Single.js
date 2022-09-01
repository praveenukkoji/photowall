import React, { Component } from "react";
import { useParams } from 'react-router-dom'
import Comments from "./Comments";
import Photo from "./Photo";

class Single extends Component {
    render() {
        const { params, posts } = this.props
        const id = Number(params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comments[id] || []
        const index = posts.findIndex((post) => post.id === id);

        return (
            <div className="single-photo">
                <Photo post={post} {...this.props} index={index}/>
                <Comments addComment={this.props.addComment} comments={comments} id={id}/>
            </div>
        )
    }
}

const withParams = (Component) => props => {
    const params = useParams();
    return <Component {...props} params={params} />;
};

export default withParams(Single)