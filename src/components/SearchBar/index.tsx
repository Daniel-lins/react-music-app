import * as C from './styles';

type SearchBarProps = {
    handleSetTerm: (prop: string)=>void;
    searchTerm: string|undefined ;
}

export const SearchBar = ({handleSetTerm, searchTerm}:SearchBarProps) => {
    return(
        <C.Container>
            <label>Busque por artistas álbums ou musicas </label>
            <input 
            placeholder='Comece a escrever...'
            onChange={(e) => handleSetTerm(e.target.value)}
            value={searchTerm}
            />
            
        </C.Container>
    );
}