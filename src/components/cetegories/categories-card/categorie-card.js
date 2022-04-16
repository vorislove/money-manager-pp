import { Component } from "react/cjs/react.production.min";

import Modal from "../../modal/modal";

import './categorie-card.css';
import '../../modal/modal.css';

class CategorieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal = () => {
        this.props.onOpenModal();
        this.setState({
            visible: true
        })
    }


    onClosed = (e) => {
        if (e.target.classList.contains('open') || e.target.classList.contains('closed')) {
            this.setState({
                visible: false
            });
            console.log('Закрываю');
        }
    }

    render() {
        const {name, sum, img, changeNameAndSum, idCard, deleteCard} = this.props;
        const {visible} = this.state;
        let classNameModal = `modal ${visible ? 'open' : 'close'}`;
        

        return(
            <div className="categorie_card">
                <div className="categorie_card_info"
                    onClick={this.openModal}
                    >
                    <span className="categorie_card_name">{name}</span>
                    <div className="white_info">
                        <i className={img}/>
                        <span className="categorie_card_sum">{sum}</span>
                    </div>
                </div>
                <div className={classNameModal}
                    onClick={(e) => this.onClosed(e)}>
                    <Modal name={name}
                        sum={sum}
                        visible={visible}
                        idCard={idCard}
                        deleteCard={deleteCard}
                        onClosed={this.onClosed}
                        changeNameAndSum={changeNameAndSum}
                    />
                </div>
            </div>
            
        );
    }
}

export default CategorieCard;