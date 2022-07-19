import React from 'react';
import CategorieCard from '../../components/categories-card/categorie-card';
import Modal from '../../components/modal/modal';
import { useSelector } from 'react-redux';

import '../../components/modal/modal.scss';

const CategorieTab = () => {
	// @ts-ignore
	const data = useSelector((state) => state.card.data);
	// @ts-ignore
	const selectedCard = useSelector((state) => state.modal.selectedCard);

	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return <CategorieCard key={id} id={id} {...itemProps} />;
	});

	return (
		<>
			<div className="tab_content">{elements}</div>
			<Modal id={selectedCard} />
		</>
	);
};

export default CategorieTab;
