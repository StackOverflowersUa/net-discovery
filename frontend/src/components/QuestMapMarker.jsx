import React, {useState} from "react";
// import Button from "bootstrap@5.3.3";
// import Modal from "bootstrap@5.3.3";

function QuestMapMarker(props) {
    // const [show, setShow] = useState(false);
    //
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
                    src={props.finished === "1" ? "https://cdn1.iconfinder.com/data/icons/infinity-symbols-arrows/48/012_002_check_done_tick-512.png" : "https://cdn-icons-png.flaticon.com/512/5860/5860579.png"}
                    onClick={props.onTaskClick}
                />

                {/*<Modal*/}
                {/*    show={show}*/}
                {/*    onHide={handleClose}*/}
                {/*    backdrop="static"*/}
                {/*    keyboard={false} >*/}
                {/*    <Modal.Header closeButton>*/}
                {/*        <Modal.Title>{props.task_name}</Modal.Title>*/}
                {/*    </Modal.Header>*/}
                {/*    <Modal.Body>*/}
                {/*        {props.question_text}*/}
                {/*    </Modal.Body>*/}
                {/*    <Modal.Footer>*/}
                {/*        <Button variant="secondary" onClick={handleClose}>*/}
                {/*            Return*/}
                {/*        </Button>*/}
                {/*        <Button variant="primary">*/}
                {/*            Answer*/}
                {/*        </Button>*/}
                {/*    </Modal.Footer>*/}
                {/*</Modal>*/}
        </div>

    );
}

export default QuestMapMarker;
