import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCard, closeModal } from '../../store/actions';

import './modal.scss';

const Modal = ({ id }) => {
	// @ts-ignore
	const selectCard = useSelector((state) => state.modal.selectCard);
	const dispatch = useDispatch();
	// @ts-ignore
	const visible = useSelector((state) => state.modal.isOpen);

	const onClosed = (e) => {
		if (e.target.classList.contains('open') || e.target.classList.contains('closed')) {
			dispatch(closeModal());
			console.log('Закрываю');
		}
	};

	const onDelete = (id) => {
		dispatch(deleteCard(id));
		dispatch(closeModal());
	};

	// const onValueChange = (e) => {
	// 	setState({ ...state, nameInput: e.target.value });
	// };

	// onSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (this.state.sumInput == '' || this.state.sumInput == 0) {
	// 		alert('Введите значение');
	// 	} else {
	// 		const sumDone = parseInt(this.state.sum, 10) + parseInt(this.state.sumInput, 10);
	// 		this.props.changeNameAndSum(this.state.id, sumDone, 'sum');
	// 		this.setState({
	// 			sumInput: ''
	// 		});
	// 	}
	// };

	// const { nameInput, sumInput } = this.state;

	let classNameModal = `modal ${visible ? 'open' : 'close'}`;

	return (
		<div className={classNameModal} onClick={(e) => onClosed(e)}>
			<form
				action="#"
				className="modalContent openContent"
				// onSubmit={onSubmit}
			>
				<div className="row">
					<input
						type="text"
						name="nameCard"
						placeholder="Новая категория"
						className="inputNewCtg"
						value={selectCard.name}
						// onChange={onValueChange}
						// onBlur={onChangeName}
					/>
					<span className="closed" onClick={onClosed}>
						&times;
					</span>
				</div>
				<span className="maneyCounterLog">
					{selectCard.sum}
					<span className="rubModal"> &#8381;</span>
				</span>
				<div>
					<input
						type="number"
						name="MoneyCount"
						// value={sumInput}
						// onChange={this.onChangeSumValue}
						className="maneyCounterInput"
						placeholder="Укажите сумму"
					/>
					<i className="iconTrash bi bi-trash3-fill" onClick={(e) => onDelete(id)}></i>
				</div>

				<button className="plusSum">Добавить</button>
			</form>
		</div>
	);
};

export default Modal;
