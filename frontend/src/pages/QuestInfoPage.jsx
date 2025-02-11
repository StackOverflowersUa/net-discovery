import React from "react";
import {useParams, Link} from 'react-router-dom';
import SearchBarHeader from "../components/SearchBarHeader";


function QuestInfoPage() {
    const { id } = useParams();

    return (
        <>
            <SearchBarHeader />

            <div className="content-container">
                <div className="d-flex">
                    <div className="info-left-panel">
                        <img className="info-image" src="/logo512.png" alt="Quest image"/>

                        <Link
                            role="button"
                            className="btn btn-success quest-info-play-btn"
                            to={`/play/${id}`}>
                                Play
                        </Link>
                    </div>

                    <div>
                        <h5 className="mt-0">{id}</h5>

                        <div className="d-flex quest-info">
                            <span className="me-5">Rating: * * * * *</span>
                            <span className="me-5">Time: 20 min</span>
                            <span className="me-5">Tasks: 4</span>
                            <span>Creator: Name</span>
                        </div>

                        <p>description jsl;;sadfjsdkaf jaskldfhslf dhsajkf hasd dhskfla hfdkhjlasfdns fkajlh hlskj
                            hdfkalsn dslkhf dsa fhkaslf asf s jasfdhk alsdh klsd</p>

                        <br />

                        <h5>Comments:</h5>

                        {/*TODO: comments section*/}

                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestInfoPage;

