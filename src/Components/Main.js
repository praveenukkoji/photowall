import React, { Component } from "react";
import Photowall from "./Photowall";
import Title from "./Title"
import AddPhoto from "./AddPhoto";
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Single from "./Single";

class Main extends Component {

    render() {
        const { navigate } = this.props;
        return (
            <div>
                <Link to="/">
                    <Title title={"Photowall"} />
                </Link>
                <Routes>
                    <Route exact path="/" element={
                        <div>
                            <Photowall {...this.props} />
                        </div>
                    } />

                    <Route path="/AddPhoto" element={
                        <div>
                            <AddPhoto onAddPost={(addedPost) => {
                                this.props.addPost(addedPost)
                                navigate('/')
                            }} />
                        </div>
                    }/>

                    <Route path="/single/:id" element={<Single {...this.props} />}/>
                </Routes>
            </div>
        )
    }
}

const withNavigate = (Component) => props => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
};

export default withNavigate(Main)