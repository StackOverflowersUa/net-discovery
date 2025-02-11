import React from "react";
import SearchBar from "./SearchBar"
import ProfileDropdown from "./ProfileDropdown"

function SearchBarHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Net Discovery</a>

                <SearchBar />

                <ProfileDropdown />
            </div>
        </nav>
    );
}

export default SearchBarHeader;
