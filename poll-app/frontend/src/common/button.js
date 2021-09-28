import React from 'react';

const Button = (props) => {
    const { buttonLabel, cssClass, onClickHandler } = props;

    return (
        <>
            <input
                className={cssClass}
                value={buttonLabel}
                type='submit'
                onClick={onClickHandler}
            ></input>
        </>
    );
}

export default Button;