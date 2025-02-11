import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import SearchHeader from "../components/SearchHeader";


function QuestInfoPage() {
    const { id } = useParams();

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch('https://my-json-server.typicode.com/StackOverflowersUa/net-discovery-fake-json/quests')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setQuestList(data);
    //             setIsLoading(false);
    //         })
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <>
            <SearchHeader />

            <div className="content-container">
                <div className="d-flex">
                    <div className="info-left-panel">
                        <img className="info-image" src="../logo512.png" alt="Quest image"/>

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
                            <span>Tasks: 4</span>
                        </div>

                        <p>description jsl;;sadfjsdkaf jaskldfhslf dhsajkf hasd dhskfla hfdkhjlasfdns fkajlh hlskj
                            hdfkalsn dslkhf dsa fhkaslf asf s jasfdhk alsdh klsd</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestInfoPage;

