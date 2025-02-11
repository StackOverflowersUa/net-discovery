import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import TitleHeader from "../components/TitleHeader";


function PlayQuestPage() {
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
            <TitleHeader title={id} />

            <div className="content-container">
                <div className="d-flex">
                    <div className="play-quest-left-panel">
                        <h5>Description:</h5>
                        <p>description jsl;;sadfjsdkaf jaskldfhslf dhsajkf hasd dhskfla hfdkhjlasfdns fkajlh hlskj
                            hdfkalsn dslkhf dsa fhkaslf asf s jasfdhk alsdh klsd</p>

                        <br/>

                        <h5>Progress:</h5>

                        <span>Tasks:</span>
                        <div className="progress">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{width: "25%"}}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                    1/4
                            </div>
                        </div>

                        <span>Time:</span>
                        <div className="progress">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{width: "50%"}}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                    10 min
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-danger play-quest-finish-btn">
                                Finish
                        </button>
                    </div>
                    <img
                        className="quest-map"
                        src="https://2minutetabletop.com/wp-content/uploads/2020/02/Arvyre-Continent-Map-23x16-Base-Map.jpg"
                        alt="Quest map" />
                </div>
            </div>
        </>
    );
}

export default PlayQuestPage;

