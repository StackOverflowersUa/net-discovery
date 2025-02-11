import React from "react";
import SearchBar from "./SearchBar"
import ProfilePanel from "./ProfilePanel"

function SearchHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Net Discovery</a>

                <SearchBar />

                <ProfilePanel />
            </div>
        </nav>
    );
}

export default SearchHeader;
