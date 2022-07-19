// @ts-nocheck
import './pages-name.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../store/actions';
import { useRef } from 'react';
import { useState } from 'react';

const PageName = () => {
	const dispatch = useDispatch();
	const selectedPage = useSelector((state) => state.page.pageName);
	// const [scrollTop, setScroll] = useState(140);

	const onAdd = () => {
		dispatch(addCard());
	};

	// const reducingHeight = (scroll) => {
	// 	if (scroll > 140) {
	// 		setScroll(80);
	// 	}
	// };

	// reducingHeight();

	const btnAdd =
		selectedPage === 'Категории' ? (
			<button className="new_categorie" onClick={onAdd}>
				+
			</button>
		) : null;

	return (
		<div className="page_name">
			<div className="categorie_name">
				{selectedPage}
				{btnAdd}
			</div>
		</div>
	);
};

export default PageName;
