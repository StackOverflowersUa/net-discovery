import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import TitleHeader from "../components/TitleHeader";
import QuestMapTask from "../components/QuestMapTask";


function PlayQuestPage() {
    const { id } = useParams();
    const [tasksCompleted, setTasksCompleted] = useState(1);
    const [timeSpent, setTimeSpent] = useState(8*60);

    // TODO: get quest info from server
    const questData = {
        "title": "Medieval Fantasy Quest",
        "description": "description jsl;;sadfjsdkaf jaskldfhslf dhsajkf hasd dhskfla hfdkhjlasfdns fkajlh hlskj hdfkalsn dslkhf dsa fhkaslf asf s jasfdhk alsdh klsd",
        "image": "https://2minutetabletop.com/wp-content/uploads/2020/02/Arvyre-Continent-Map-23x16-Base-Map.jpg",
        "count_tasks": 3,
        "time_limit": 20*60,
        "difficulty": null,
        "rating": null,
        "status": null,
        "author": null
    }

    // TODO: get player progress from server
    const playerProgress = {
        "time_spent": 8*60,
        "task_statuses": {
            1: "done",
            2: "unfinished",
            3: "unfinished"
        }
    }

    // TODO: get tasks from server
    const questTasks = [
        {
            "task_number": 1,
            "task_name": "Town",
            "position": [37, 30],
            "question_text": "2 + 2 =",
            "options": ["1", "2", "3", "4"],
            "correct_index": 3
        },
        {
            "task_number": 2,
            "task_name": "Bridge",
            "position": [57, 10],
            "question_text": "Is this quest fun?",
            "options": ["Yes", "No"],
            "correct_index": 0
        },
        {
            "task_number": 3,
            "task_name": "City",
            "position": [78, 49],
            "question_text": "3 * 7 =",
            "options": ["37", "21", "10"],
            "correct_index": 1
        }
    ]

    useEffect(() => {
        setTimeout(() => { setTimeSpent(timeSpent + 1); }, 1000);
    }, [timeSpent])

    function getFormattedTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        return `${minutes}:${seconds - minutes * 60}`;
    }

    function handleTaskSubmit() {
        setTasksCompleted(tasksCompleted + 1);
    }

    return (
        <>
            <TitleHeader title={questData.title} />

            <div className="content-container">
                <div className="d-flex">
                    <div className="play-quest-left-panel">
                        <h5>Description:</h5>
                        <p>{questData.description}</p>

                        <br/>

                        <h5>Progress:</h5>

                        <span>Tasks:</span>
                        <div className="progress">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{width: `${tasksCompleted / questData.count_tasks * 100}%`}} >
                                    {tasksCompleted}/{questData.count_tasks}
                            </div>
                        </div>

                        <span>Time remaining:</span>
                        <div className="progress">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{width: `${(questData.time_limit - timeSpent) / questData.time_limit * 100}%`}} >
                                    {getFormattedTime(questData.time_limit - timeSpent)} min
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-danger play-quest-finish-btn">
                                Finish
                        </button>
                    </div>

                    <div style={{position: 'relative'}}>
                        <img
                            className="quest-map"
                            src={questData.image}
                            alt="Quest map"/>

                        {questTasks.map((item) =>
                            <QuestMapTask
                                task_number={item.task_number}
                                task_name={item.task_name}
                                position={item.position}
                                question_text={item.question_text}
                                options={item.options}
                                correct_index={item.correct_index}
                                status={playerProgress.task_statuses[item.task_number]}
                                handleSubmit={handleTaskSubmit}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlayQuestPage;

