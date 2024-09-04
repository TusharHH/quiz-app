import React from "react";
import "./MessageCard.css";

class MessageCard extends React.Component {
    render() {
        const { name, msg } = this.props;
        return (
            <div className="card-container shadow-xl">
                <h2>{name}</h2>
                <p>{msg}</p>
            </div>
        );
    }
}

export default MessageCard;
