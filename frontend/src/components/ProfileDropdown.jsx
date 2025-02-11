import React from "react";
import { Link } from "react-router-dom";

function ProfileDropdown(props) {
    return (
        <div className="dropdown ms-3">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                    <img src={props.avatar ?? "/logo192.png"} className="rounded-circle me-2 pfp-small" alt="pfp"></img>
                    <span className="me-2">{props.username ?? "Username"}</span>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item" to={`/profile/${props.id}`}>Profile</Link></li>
                <li><Link className="dropdown-item" to="#">Log out</Link></li>
            </ul>
        </div>
    )
}

export default ProfileDropdown;