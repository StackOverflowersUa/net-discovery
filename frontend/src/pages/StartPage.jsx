import React, {useState, useEffect} from "react";
import SearchBarHeader from "../components/SearchBarHeader";
import QuestCard from "../components/QuestCard";


function StartPage() {
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
            <SearchBarHeader />

            <div className="content-container">
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
        </>
    );
}

export default StartPage;

