import React from "react";
import { Link } from "react-router-dom";

function QuestCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image ?? "/logo192.png"} alt="Quest image"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={`/quest/${props.title}`} className="stretched-link" />
            </div>
        </div>
    )
}

export default QuestCard;