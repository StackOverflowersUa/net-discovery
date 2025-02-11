import React from "react";
import { Link } from "react-router-dom";

function ProfilePanel(props) {
    return (
        <div className="dropdown ms-3">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                    <img src={props.pfpSource ?? "https://preview.redd.it/poll-what-should-i-do-with-my-pokemon-go-ban-v0-vqk7zlwas7bb1.jpg?width=455&format=pjpg&auto=webp&s=2570d1506506872cf0a1b7acf729f28da1fa72ef"} className="rounded-circle me-2 pfp-small" alt="pfp"></img>
                    <span className="me-2">{props.username ?? "Username"}</span>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item" href="profile/{props.id}">Profile</Link></li>
                <li><Link className="dropdown-item" href="#">Log out</Link></li>
            </ul>
        </div>
    )
}

export default ProfilePanel;