import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import SearchBarHeader from "../components/SearchBarHeader";
import CenterSpinner from "../components/CenterSpinner";
import QuestsGrid from "../components/QuestsGrid";


function ProfileInfoPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://my-json-server.typicode.com/StackOverflowersUa/net-discovery-fake-json/profiles')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProfileData(data);
                setIsLoading(false);
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
                        <img className="rounded-circle info-image" src={profileData.avatar ?? "/logo512.png"} alt="Profile picture"/>
                    </div>

                    <div className="info-right-panel">
                        <h5 className="mt-0">{profileData.name}</h5>

                        <div className="d-flex quest-info">
                            <span className="me-5">Rating: {profileData.avarage_rating}</span>
                            <span className="me-5">Quests played: -</span>
                            <span>Quests created: -</span>
                        </div>

                        <p>{profileData.description}</p>

                        <br/>

                        <h5>History:</h5>
                        <ul>
                            <li>Played <a href="/quest/this">this</a></li>
                            <li>Played <a href="/quest/that">that</a></li>
                            <li>Blah-blah-blah</li>
                        </ul>

                        <br/>

                        <h5>Created quests:</h5>

                        <QuestsGrid />
                    </div>
                </div>
                }
            </div>
        </>
    );
}

export default ProfileInfoPage;

