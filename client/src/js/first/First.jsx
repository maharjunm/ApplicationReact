import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

class First extends Component {
    render() {
        return (
            <div>
                <h1>Hello World </h1>
                <section className="main">
                    { this.props.names.map( (name, index) => <h2 key={index}> {name} </h2>) }
                </section>
            </div>
        );
    }
}

First.propTypes = {
    "names": PropTypes.array
};

const mapToStore = (store) => {
    return { "names": store.sourceResults }
};

export default connect(mapToStore)(First);
