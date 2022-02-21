import { Component } from "react/cjs/react.production.min";

import Modal from "../../modal/modal";

import './categorie-card.css';

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

    onClosed = () => {
        this.setState({
            visible: false
        })
        console.log('Закрываю')
    }

    render() {
        const {name, sum, img} = this.props;
        const {visible} = this.state;

        return(
            <div
                className="categorie_card"
                onClick={this.openModal}
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                >
                <span className="categorie_card_name">{name}</span>
                <div className="white_info">
                    <i className={img}/>
                    <span className="categorie_card_sum">{sum}</span>
                </div>
            <Modal isOpened={visible}
                name={name}
                sum={sum}
                onClosed={this.onClosed}
                />
            </div>
            
        );
    }
}

export default CategorieCard;