import * as C from './styles';
import Logo from '../../assets/images/spotifylogo.png'

export const Header = () => {
    return(
        <C.Container>
            <img alt='logo' src={Logo}></img>

        </C.Container>

        
    );
};