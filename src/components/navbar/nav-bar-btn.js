import './navbar.css';

const NavBarBtn = ({name, icon, onToggleTab, tabIndex}) =>  {
 
    return(
        <div
            className='navbar_btn'
            onClick={onToggleTab} >
            <i className={`icon ${icon}${tabIndex ? '-fill' : ''}`}></i>
            <span className={tabIndex ? 'active' : ''}>{name}</span>
        </div>
    )
}

export default NavBarBtn;