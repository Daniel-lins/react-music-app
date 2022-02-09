import * as C from './styles';

type AlbumItemProps = {
    size: string;
    title?: string;
    description: string;
    imgSize: string;
}


export const AlbumItem = ({size, title, description, imgSize}: AlbumItemProps) => {
    return(
        <C.Container size={size}>
            <C.Imagem 
            src={"https://via.placeholder.com/160/170"}
            imgSize={imgSize}
            />
            <C.Title>{title}</C.Title>
            <C.Artist> {description} </C.Artist>

        </C.Container>
    );
};