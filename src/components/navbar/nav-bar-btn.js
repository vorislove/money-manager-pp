import './navbar.css';

const NavBarBtn = ({name, icon}) =>  {
 
    return(
        <div
            className='navbar_btn'>
            <i className={`icon ${icon}`}></i>
            <span>{name}</span>
        </div>
    )
}

export default NavBarBtn;