import React from 'react';

const validation = (props) => {

    let validationMessage = 'Text long enough';
    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            {/* {
                props.inputLength > 5 ?
                    <p> text long enough</p> :
                    <p> Text too short !</p>
            } */}
            <p> {validationMessage}</p>
            <p> {props.upperCase} </p>
        </div>
    )
}

export default validation;