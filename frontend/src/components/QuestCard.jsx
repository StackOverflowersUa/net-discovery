import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../utils/StringUtils";

function QuestCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.thumbnail ?? "/logo192.png"} alt="Quest thumbnail" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{truncate(props.description, 100)}</p>
                <Link to={`/quest/${props.quest_id}`} className="stretched-link" />
            </div>
        </div>
    )
}

export default QuestCard;