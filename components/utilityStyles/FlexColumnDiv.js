import styled from "styled-components";

export const FlexColumnDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.primaryBackground};
    color: ${props => props.primaryText};
`;