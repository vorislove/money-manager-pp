import {Component} from 'react';
import './navbar.css';

class NavBarBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const {name, icon} = this.props;

        return(
            <div
                className='navbar_btn'>
                <i className={`icon ${icon}`}></i>
                <span>{name}</span>
            </div>
        );
    }
}

export default NavBarBtn;