import React, {useState} from "react";
import {Button, Modal, Form} from "react-bootstrap";

function QuestMapTask(props) {
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(props.status !== "unfinished");
    const [selectedIndex, setSelectedIndex] = useState(null);

    // TODO: icons
    const iconUnfinished = "https://cdn-icons-png.flaticon.com/512/5860/5860579.png";
    const iconDone = "https://cdn1.iconfinder.com/data/icons/infinity-symbols-arrows/48/012_002_check_done_tick-512.png";
    const iconFailed = "https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";

    const [markerImage, setMarkerImage] = useState(getInitialMarkerImage());

    function getInitialMarkerImage() {
        if (props.status === "unfinished") {
            return iconUnfinished;
        } else if (props.status === "done") {
            return iconDone;
        } else {
            return iconFailed;
        }
    }

    const handleClose = () => setShow(false);

    function handleShow() {
        if (submitted) return;
        setSelectedIndex(null);
        setShow(true);
    }

    function handleSubmit() {
        if (selectedIndex == null) return;

        if (selectedIndex.toString() == props.correct_index) {
            setMarkerImage(iconDone);
        } else {
            setMarkerImage(iconFailed);
        }

        props.handleSubmit(selectedIndex.toString() == props.correct_index);

        setSubmitted(true);

        setShow(false);

        // TODO: send request about task completion
    }

    return (
        <div
            className="quest-map-marker"
            style={{left: `${props.position[0]}%`, top: `${props.position[1]}%`, position: "absolute"}}>
                <h5 className="quest-map-marker-header">
                    {props.task_name}<br/>
                </h5>

                <img
                    key={props.task_number}
                    className="quest-map-marker-image"
                    src={markerImage}
                    onClick={handleShow}
                />

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered >

                    <Modal.Header closeButton>
                        <Modal.Title>{props.task_name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{props.question_text}</p>

                        <Form>
                            {props.options.map((item, index) =>
                                <Form.Check
                                    type="radio"
                                    label={item}
                                    name="radioGroup"
                                    id={"radio-" + index}
                                    onChange={() => setSelectedIndex(index)}
                                />
                            )}
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Return
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Submit answer
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}

export default QuestMapTask;
