import styled from "styled-components";


export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px var(--paddingMain);
    margin-bottom: 75px;

    label {
        font-size: var(--fontMedium);
        color: var(--secondary);
    }
    input {
        font-size: var(--fontXLarge);
        font-weight:: bold;
        color: var(--secondary);
        height: 70px;
        padding-bottom: 12px;
        pading-bottom: 12px;
        border: 0;
        border-bottom: 2px solid var(--secondary);
        background-color: transparent;
        outline: 0;
        padding-left: 10px;
    }
`;