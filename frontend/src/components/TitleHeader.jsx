import React from "react";
import ProfileDropdown from "./ProfileDropdown"

function TitleHeader(params) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Net Discovery</a>

                <span className="navbar-brand">{params.title}</span>

                <ProfileDropdown />
            </div>
        </nav>
    );
}

export default TitleHeader;
