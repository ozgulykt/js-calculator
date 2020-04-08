import React, { Component } from 'react';
import '../App.css';

class KeyPads extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.value);
    }
    render() {
        return (
            <div>
                <div className="buttons" id={this.props.id} onClick={this.handleClick} >
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default KeyPads;