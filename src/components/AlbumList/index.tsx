import { AlbumItem } from '../AlbumItem';
import * as C from './styles';

type AlbumProps = {
    title: string;

}
export const AlmbumList = ({ title, ...props }: AlbumProps) => {
    return(
        <C.Container>
           <C.SubTitle>{title}</C.SubTitle> 
           <C.Wrapper>
           <AlbumItem
                title="nome do Album"
                description="nome do artist"
                size="medium"
                imgSize="medium"
                />
               <AlbumItem
                title="nome do Album"
                description="nome do artist"
                size="medium"
                imgSize="medium"
                />
              <AlbumItem
                title="nome do Album"
                description="nome do artist"
                size="medium"
                imgSize="medium"
                />
               <AlbumItem
                title="nome do Album"
                description="nome do artist"
                size="medium"
                imgSize="medium"
                />
               
               
               </C.Wrapper>
           
        </C.Container>
    );
}