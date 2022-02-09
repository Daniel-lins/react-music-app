import { useState } from 'react';
import * as C from './styles';
import { SearchBar } from '../../components/SearchBar';
import { AlmbumList } from '../../components/AlbumList';


export const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>();


    const handleSetTerm = ( value: string) => {
      setSearchTerm(value);
      console.log(value);
      
    };

    return(
        <C.Container>

                <SearchBar
                searchTerm={searchTerm}
                handleSetTerm={handleSetTerm}
                />
                <AlmbumList
                    title={ searchTerm ? `Resultados encontrados para ${searchTerm}` :  'Álbuns buscados recentemente'}
                    
                />
                {
                    !searchTerm &&
                    <AlmbumList 
                            title="Albuns Buscados recentemente "
                        />

                }
        </C.Container>
    );
}