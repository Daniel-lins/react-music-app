import { Header } from '../../components/Header';
import React, { ReactNode } from 'react';
import * as C from './styles';

type ReactProps = {
    children: ReactNode
}
export const Default = ({ children }: ReactProps) => {
    return(

        <C.Container>
            <Header />
            {children}

        </C.Container>
    )   
};