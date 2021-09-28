import React from "react";
import Button from "../common/button";

import Label from "../common/label";
import { DRAW_BUTTON, POLL_HEADING } from "./constants";

import './polls.scss';

const PollItem = (props) => {
    const {leftButtonLabel, pollQuestion, rightButtonLabel, onClickHandler} = props;

    return (
        <>
            <div className="modal-background"></div>
            <div className="poll-item">
                <Label cssClass="heading" text={POLL_HEADING} />
                <Label cssClass="poll-question" text={pollQuestion} />
                <div className="button-set">
                    <Button cssClass="button" buttonLabel={leftButtonLabel} onClickHandler={() => onClickHandler(leftButtonLabel)}/>
                    <Button cssClass="button" buttonLabel={DRAW_BUTTON} onClickHandler={() => onClickHandler(DRAW_BUTTON)}/>
                    <Button cssClass="button" buttonLabel={rightButtonLabel} onClickHandler={() => onClickHandler(rightButtonLabel)}/>
                </div>
            </div>
        </>
    );
}

export default PollItem;