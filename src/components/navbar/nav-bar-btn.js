import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { togglePage } from '../../store/actions';
import './navbar.css';

const NavBarBtn = ({ name, icon, link, active }) => {
	const dispatch = useDispatch();

	const onSelectPage = (name) => {
		dispatch(togglePage(name));
	};

	return (
		<Link style={{ textDecoration: 'none' }} to={`/${link}`}>
			<div className="navbar_btn" onClick={() => onSelectPage(name)}>
				<i className={`icon ${icon}${active ? '-fill' : ''}`}></i>
				<span className={active ? 'active' : ''}>{name}</span>
			</div>
		</Link>
	);
};

export default NavBarBtn;
