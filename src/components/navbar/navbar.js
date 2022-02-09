import './navbar.css';
import NavBarBtn from './nav-bar-btn';

const NavBar = () => {
    return (
        <div className="navBar">
            <NavBarBtn name="Категори"
                icon="bi bi-bookmark"/>
            <NavBarBtn name="Операции"
                icon="bi bi-list-ul" />
            <NavBarBtn name="Бюджет"
                icon="bi bi-piggy-bank" />
            <NavBarBtn name="Профиль"
                icon="bi bi-person" />
        </div>
    );
}

export default NavBar;

