import React, { Component } from "react";
import PropTypes from 'prop-types'

class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        let imgLink = event.target.elements.link.value;
        let description = event.target.elements.description.value;

        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imgLink
        }

        if(imgLink && description){
            this.props.onAddPost(post)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" name="link" placeholder="Link"/>
                        <input type="text" name="description" placeholder="Description"/>
                        <button>POST</button>
                    </form>
                </div>
            </div>
        )
    }
}

AddPhoto.propTypes = {
    onAddPost: PropTypes.func.isRequired
}

export default AddPhoto