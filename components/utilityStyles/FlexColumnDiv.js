import styled from "styled-components";

export const FlexColumnDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: ${props => props.height || "100%"};
    background-color: ${props => props.primaryBackground};
    color: ${props => props.primaryText};
`;