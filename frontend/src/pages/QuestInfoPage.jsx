import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import SearchBarHeader from "../components/SearchBarHeader";
import {getFormattedTime} from "../utils/StringUtils";
import CenterSpinner from "../components/CenterSpinner";


function QuestInfoPage() {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [questData, setQuestData] = useState({});

    useEffect(() => {
        setIsLoading(true);
        fetch('https://my-json-server.typicode.com/StackOverflowersUa/net-discovery-fake-json/quests')
            .then((response) => response.json())
            .then((data) => {
                for (const quest of data) {
                    if (quest.id != id) continue;
                    setQuestData(quest);
                    setIsLoading(false);
                    break;
                }
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <SearchBarHeader />

            <div className="content-container">
                {isLoading && <CenterSpinner />}
                {!isLoading &&
                <div className="d-flex">
                    <div className="info-left-panel">
                        <img className="info-image" src={questData.thumbnail ?? "/logo512.png"} alt="Quest image"/>

                        <Link
                            role="button"
                            className="btn btn-success quest-info-play-btn"
                            to={`/play/${id}`}>
                                Play
                        </Link>
                    </div>

                    <div className="info-right-panel">
                        <h5 className="mt-0">{questData.title}</h5>

                        <div className="d-flex quest-info">
                            <span className="me-5">Rating: {questData.rating}</span>
                            <span className="me-5">Time: {getFormattedTime(questData.time_limit, " min ")} sec</span>
                            <span className="me-5">Tasks: {questData.count_tasks}</span>
                            <span>Creator: {questData.author}</span>
                        </div>

                        <p>{questData.description}</p>

                        <br />

                        <h5>Comments:</h5>

                        {/*TODO: comments section*/}

                    </div>
                </div>
                }
            </div>
        </>
    );
}

export default QuestInfoPage;

