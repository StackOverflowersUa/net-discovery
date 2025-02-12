import React, {useState, useEffect} from "react";
import SearchBarHeader from "../components/SearchBarHeader";
import QuestCard from "../components/QuestCard";
import CenterSpinner from "../components/CenterSpinner";


function QuestsGrid() {
    const [isLoading, setIsLoading] = useState(false);
    const [questList, setQuestList] = useState([]);

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
            {isLoading && <CenterSpinner />}
            {!isLoading && !!questList?.length &&
            <div className="quest-grid">
                {questList.map((item) =>
                    <QuestCard
                        quest_id={item.id}
                        title={item.title}
                        description={item.description}
                        thumbnail={item.thumbnail} />
                )}
            </div>
            }
        </>
    );
}

export default QuestsGrid;

