import { Link } from 'react-router-dom';
import { AlbumItem } from '../../components/AlbumItem';
import { ListTrack } from '../../components/ListTrack';
import * as C from './styles';


export const SelectTrack = () => {
    return(
        <C.Container>
            <C.Row>
            <Link to="/" className="backButton"> ◄ Voltar</Link>
            </C.Row>
            <C.Column>
                <AlbumItem
                title="nome do Album"
                description="nome do artist"
                size="large"
                imgSize="large"
                />
                <ListTrack />
                
            </C.Column>
            

        </C.Container>
    );
}