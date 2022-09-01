import React, { Component } from "react";

class Comments extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        let comment = event.target.elements.comment.value;
        this.props.addComment(comment, this.props.id)
    }

    render() {
        return (
            <div>
                {
                    this.props.comments.map((comment, index) => {
                        return (<p key={index} >{ comment }</p>)
                    })
                }
                <div className="comment">
                    <form className="comment-form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="comment" name="comment" />
                        <input type="submit" hidden/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Comments