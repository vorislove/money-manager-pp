import './navbar.css';
import NavBarBtn from './nav-bar-btn';

const NavBar = ({onToggleTab, tabIndex}) => {
    const name = ['Категории', 'Операции', 'Бюджет', 'Профиль'];
    const icon = ['bi bi-bookmark', 'bi bi-clock', 'bi bi-piggy-bank', 'bi bi-person'];

    const btnElements = name.map((item, i) => {
       return( 
            <NavBarBtn
                key={i}
                name={item}
                icon={icon[i]}
                onToggleTab={() => onToggleTab(i, item)}
                tabIndex={tabIndex === i ? true : false} />
        )
    })

    return (
        <div className="navBar">
            {btnElements}
        </div>
    );
}

export default NavBar;

