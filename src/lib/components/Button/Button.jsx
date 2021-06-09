import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.color};
    font-size: 1.2rem;
    padding: ${props => props.padding};
    background: ${props => props.bgColor};
    box-shadow: none;
    border: none;
    min-width: 100px;
    border-radius: 20px;
`;

export default Button;