import './categorie-card.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/actions';

const CategorieCard = ({ name, sum, img, id }) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.card.data);

	const onOpen = (id) => {
		const card = data.find((item) => item.id === id);
		dispatch(openModal({ id, card }));
	};

	return (
		<div className="categorie_card" onClick={() => onOpen(id)}>
			<div className="categorie_card_info">
				<span className="categorie_card_name">{name}</span>
				<div className="white_info">
					<i className={img} />
					<span className="categorie_card_sum">
						{sum}
						<span className="rub"> &#8381;</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CategorieCard;
