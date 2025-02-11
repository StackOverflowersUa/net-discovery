import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import SearchHeader from "../components/SearchHeader";
import QuestCard from "../components/QuestCard";


function ProfileInfoPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [questList, setQuestList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://my-json-server.typicode.com/StackOverflowersUa/net-discovery-fake-json/quests')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setQuestList(data);
                setIsLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <SearchHeader />

            <div className="content-container">
                <div className="d-flex">
                    <div className="info-left-panel">
                        <img className="info-image" src="../logo512.png" alt="Profile picture"/>
                    </div>

                    <div>
                        <h5 className="mt-0">{id}</h5>

                        <div className="d-flex quest-info">
                            <span className="me-5">Rating: * * * * *</span>
                            <span className="me-5">Quests played: 12</span>
                            <span>Quests created: 2</span>
                        </div>

                        <p>description jsl;;sadfjsdkaf jaskldfhslf dhsajkf hasd dhskfla hfdkhjlasfdns fkajlh hlskj
                            hdfkalsn dslkhf dsa fhkaslf asf s jasfdhk alsdh klsd</p>

                        <br/>

                        <h5>History:</h5>
                        <ul>
                            <li>Played <a href="/quest/this">this</a></li>
                            <li>Played <a href="/quest/that">that</a></li>
                            <li>Blah-blah-blah</li>
                        </ul>

                        <br/>

                        <h5>Created quests:</h5>
                        <div>
                            {isLoading && <>Loading...</>}
                            {!isLoading && !!questList?.length &&
                                <div className="quest-grid">
                                    {questList.map((item) =>
                                        <QuestCard
                                            title={item.title}
                                            description={item.description}
                                            image={item.image} />
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileInfoPage;

