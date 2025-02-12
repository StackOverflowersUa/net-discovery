import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import TitleHeader from "../components/TitleHeader";
import QuestMapTask from "../components/QuestMapTask";
import CenterSpinner from "../components/CenterSpinner";
import { getFormattedTime } from "../utils/StringUtils";


function PlayQuestPage() {
    const { id } = useParams();
    const [tasksCompleted, setTasksCompleted] = useState(1);
    const [timeSpent, setTimeSpent] = useState(8*60);

    const [isLoading, setIsLoading] = useState(false);

    const [questData, setQuestData] = useState({});
    const [questProgress, setQuestProgress] = useState({});
    const [questTasks, setQuestTasks] = useState([]);

    // TODO: fetch real data from the server
    useEffect(() => {
        fetchQuestData();
        fetchQuestProgress();
        fetchQuestTasks();
    }, []);

    function fetchQuestData() {
        setIsLoading(true);
        fetch('https://my-json-server.typicode.com/StackOverflowersUa/net-discovery-fake-json/quests')
            .then((response) => response.json())
            .then((data) => {
                for (const quest of data) {
                    if (quest.id != 0) continue;
                    setQuestData(quest);
                    setIsLoading(false);
                    break;
                }
            })
            .catch(error => console.error(error));
    }

    function fetchQuestProgress() {
        fetch('https://my-json-server.typicode.com/StackOverflowersUa/net-discovery-fake-json/quest_progress')
            .then((response) => response.json())
            .then((data) => {
                setQuestProgress(data);

                // Update tasks progress bar
                let counter = 0;
                for (const [_, value] of Object.entries(data.task_statuses)) {
                    if (value !== "unfinished") counter++;
                }
                setTasksCompleted(counter);

                // Update time progress bar
                setTimeSpent(data.time_spent);
            })
            .catch(error => console.error(error));
    }

    function fetchQuestTasks() {
        fetch('https://my-json-server.typicode.com/StackOverflowersUa/net-discovery-fake-json/quest_tasks')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setQuestTasks(data);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        setTimeout(() => { setTimeSpent(timeSpent + 1); }, 1000);
    }, [timeSpent])

    function handleTaskSubmit() {
        setTasksCompleted(tasksCompleted + 1);
    }

    return (
        <>
            <TitleHeader title={questData.title} />

            <div className="content-container">
                {isLoading && <CenterSpinner />}
                {!isLoading && !!questTasks?.length && !!Object.entries(questProgress).length &&
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
                                    {getFormattedTime(questData.time_limit - timeSpent, ":")} min
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
                            src={questData.map_image}
                            alt="Quest map"/>

                        {questTasks.map((item) =>
                            <QuestMapTask
                                task_number={item.task_number}
                                task_name={item.task_name}
                                position={item.position}
                                question_text={item.question_text}
                                options={item.options}
                                correct_index={item.correct_index}
                                status={questProgress.task_statuses[item.task_number]}
                                handleSubmit={handleTaskSubmit}
                            />
                        )}
                    </div>
                </div>
                }
            </div>
        </>
    );
}

export default PlayQuestPage;

