import React, {useState, useEffect} from "react";
import SearchHeader from "../components/SearchHeader";
import QuestCard from "../components/QuestCard";


function StartPage() {
    const [isLoading, setIsLoading] = useState(false);
    // const [questList, setQuestList] = useState([]);

    const questList = [
        {
            "title": "Test Quest #1",
            "description": "Description for the test quest.",
            "count_tasks": 3,
            "time_limit": 20,
            "difficulty": "Easy",
            "rating": 4,
            "status": "Published",
            "author": "admin"
        },
        {
            "title": "Test Quest #2",
            "description": "Description for the test quest.",
            "count_tasks": 4,
            "time_limit": 30,
            "difficulty": "Medium",
            "rating": 3,
            "status": "Published",
            "author": "admin"
        },
        {
            "title": "Test Quest #3",
            "description": "Description for the test quest.",
            "count_tasks": 4,
            "time_limit": 30,
            "difficulty": "Medium",
            "rating": 3,
            "status": "Published",
            "author": "admin"
        },{
            "title": "Test Quest #4",
            "description": "Description for the test quest.",
            "count_tasks": 4,
            "time_limit": 30,
            "difficulty": "Medium",
            "rating": 3,
            "status": "Published",
            "author": "admin"
        },{
            "title": "Test Quest #5",
            "description": "Description for the test quest.",
            "count_tasks": 4,
            "time_limit": 30,
            "difficulty": "Medium",
            "rating": 3,
            "status": "Published",
            "author": "admin"
        },{
            "title": "Test Quest #6",
            "description": "Description for the test quest.",
            "count_tasks": 4,
            "time_limit": 30,
            "difficulty": "Medium",
            "rating": 3,
            "status": "Published",
            "author": "admin"
        },{
            "title": "Test Quest #7",
            "description": "Description for the test quest.",
            "count_tasks": 4,
            "time_limit": 30,
            "difficulty": "Medium",
            "rating": 3,
            "status": "Published",
            "author": "admin"
        },
    ];

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch('https://jsonplaceholder.typicode.com/users')
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
                {/*{isLoading && <>Loading....</>}*/}
                {/*{!isLoading && !!questList?.length &&*/}
                <div className="quest-grid">
                    {questList.map((item) =>
                        <QuestCard
                            title={item.title}
                            description={item.description} />
                    )}
                </div>
                {/*}*/}
            </div>
        </>
    );
}

export default StartPage;

