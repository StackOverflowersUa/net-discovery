import React from "react";
import { Link } from "react-router-dom";

function QuestCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image ?? "https://files.idyllic.app/files/static/3773316?width=256&optimizer=image"} alt="Quest image"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={`quest/${props.id}`} className="stretched-link" />
            </div>
        </div>
    )
}

export default QuestCard;