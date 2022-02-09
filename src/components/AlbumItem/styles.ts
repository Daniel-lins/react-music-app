import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: var(--${( props: {size:string})=> props.size})
    height: var(--${( props: {size:string})=> props.size})
    
`;


export const Title = styled.h3 `
    font-size: var(--fontSmall);
    color: var(--tertiary);
    margin: 10px;
   
    
`;

export const Artist = styled.h4 `


    font-size: var(--fontSmall);
    color: var(--tertiary);
  
`;

export const Imagem = styled.img`
    
    width:var(--${( props: {imgSize:string} )=> props.imgSize});
    // height:var(--${( props: {imgSize:string} )=> props.imgSize});
`;