import React from 'react';

const Label = (props) => {
    const { cssClass, text } = props;

    return (
        <>
            <div className={cssClass}>{text}</div>
        </>
    );
}

export default Label;