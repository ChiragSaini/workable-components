import StyledButton from './Button';

import React from 'react'

const Button = (props) => {
    return (
        <StyledButton color={props.color} padding={props.padding} bgColor={props.bgColor}>
            {props.children}
        </StyledButton>
    )
}

export default Button
