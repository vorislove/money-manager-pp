import { Component } from 'react';
import './modal.css';

class Modal extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            id: '',
            sum: '',
            sumInput: ''
        }
    }

    componentDidMount() {
        this.setState({
            nameInput: this.props.name,
            id: this.props.idCard,
            sum: this.props.sum
        })
    }

    onValueChange = (e) => {
        this.setState({
            nameInput: e.target.value
        })
    }
    
    onChangeName = () => {
        this.props.changeNameAndSum(this.state.id, this.state.nameInput, 'name');
    }

    onChangeSumValue = (e) => {
        this.setState({
            sumInput: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.sumInput == '' || this.state.sumInput == 0) {
            alert('Введите значение')
        } else {
            const sumDone = parseInt(this.state.sum, 10) + parseInt(this.state.sumInput, 10);
            this.props.changeNameAndSum(this.state.id, sumDone, 'sum');
            this.setState({
                sumInput: ''
            })
            
        }
        
    }

    render() {
        const {visible, sum, deleteCard, onClosed} = this.props;
        const {nameInput, sumInput} = this.state;
        
        let className = `modalContent ${visible ? 'openContent' : ''}`;
        

        return(
            <form action="#"  
                className={className}
                onSubmit={this.onSubmit} >
                <div className="row">
                    <input 
                        type="text"
                        name="nameCard"     
                        placeholder="Новая категория" 
                        className="inputNewCtg"
                        value={nameInput}
                        onChange={this.onValueChange}
                        onBlur={this.onChangeName} />
                    <span 
                        className='closed'
                        onClick={onClosed}>
                        &times;
                    </span>
                </div>
                <span className="maneyCounterLog">
                    {sum} 
                    <span className='rubModal'> &#8381;</span>
                </span>
                <div>
                    <input 
                    type="number" 
                    name="MoneyCount" 
                    value={sumInput}  
                    onChange={this.onChangeSumValue}
                    className="maneyCounterInput"   
                    placeholder="Укажите сумму"/>
                    <i className="iconTrash bi bi-trash3-fill"
                        onClick={deleteCard}></i>
                </div>
                
                <button 
                    className="plusSum">
                    Добавить
                </button>
            </form>
            
        );
    }
}

export default Modal;