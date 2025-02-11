import React from "react";
import ProfilePanel from "./ProfilePanel"

function TitleHeader(params) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Net Discovery</a>

                <span className="navbar-brand">{params.title}</span>

                <ProfilePanel />
            </div>
        </nav>
    );
}

export default TitleHeader;
