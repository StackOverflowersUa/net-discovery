import React from "react";
import SearchBarHeader from "../components/SearchBarHeader";
import QuestsGrid from "../components/QuestsGrid";


function StartPage() {
    return (
        <>
            <SearchBarHeader />

            <div className="content-container">
                <QuestsGrid />
            </div>
        </>
    );
}

export default StartPage;

