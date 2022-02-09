import styled from "styled-components";


export const Container = styled.div`
    padding: 0px var(--paddingMain);
    color: var(--secondary)
   
        
`;

export const Row = styled.div `
    display: flex;
    justify-content: flex-start;
    padding: 15px 0px 30px;
    text-align: center;
    align-items: center;
    h2 {
        font-size: var(--fontSmall);
        font-weight: normal;
    }

    .backButton {
        text-decoration: none;
        color: var( --secondary);
        padding-bottom: 30px;
)
    }
    

`;
export const Column = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 35px;

`;