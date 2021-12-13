import styled from "styled-components";

export const StandardButton = styled.button`
    background-color: ${props => props.theme.secondaryBackground};
    color: ${props => props.theme.secondaryText};
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.secondaryBackgroundHover};
    }
`;


