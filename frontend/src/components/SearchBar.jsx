import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchBar() {
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")

    function onSearchSubmit() {
        const encodedQuery = encodeURI(searchQuery)
        navigate(`/search?query=${encodedQuery}`)
    }

    return (
        <form className="d-flex search-bar">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Find quests..."
                aria-label="Search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") { onSearchSubmit() } } }/>

            <button
                className="btn btn-outline-light"
                type="submit"
                onClick={onSearchSubmit}>
                    Search
            </button>
        </form>
    );
}

export default SearchBar;
