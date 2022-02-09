import {Component} from 'react';
import './navbar.css';

class NavBarBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, icon} = this.props;

        return(
            <div type="button"
                className='navbar_btn flex-column'>
                <i class={icon}></i>
                <span>{name}</span>
            </div>
        );
    }
}

export default NavBarBtn;