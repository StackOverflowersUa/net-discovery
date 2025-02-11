import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
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
                <div className="media d-flex">
                    <img className="align-self-start mr-3 quest-image-big" src="../logo512.png" alt="Quest image"/>
                    <div className="media-body">
                        <h5 className="mt-0">{id}</h5>
                        <p>{id}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestInfoPage;

