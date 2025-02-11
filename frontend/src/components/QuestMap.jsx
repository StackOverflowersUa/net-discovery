import React, {useState} from "react";
import QuestMapMarker from "./QuestMapMarker";

function QuestMap(props) {

    const questTasks = [
        {
            "task_number": 1,
            "task_name": "Town",
            "position": [36, 32],
            "question_text": "2 + 2 =",
            "options": ["1", "2", "3", "4"],
            "correct_answer": 3
        },
        {
            "task_number": 2,
            "task_name": "City",
            "position": [79, 55],
            "question_text": "3 * 7 =",
            "options": ["37", "21", "10"],
            "correct_answer": 1
        }
    ]

    return (
        <div style={{position: 'relative'}}>
            <img
                className="quest-map"
                src={props.image}
                alt="Quest map"/>

            {questTasks.map((item) =>
                <>
                    <QuestMapMarker
                        task_number={item.task_number}
                        task_name={item.task_name}
                        position={item.position}
                        question_text={item.question_text}
                        options={item.options}
                        finished="0"
                        onTaskClick={(number) => console.log("clicked task number", number)}
                    />
                </>
            )}
        </div>
    );
}

export default QuestMap;
