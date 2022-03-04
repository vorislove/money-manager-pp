
import { useState } from 'react';
import './modal.css';

const Modal = (props) => {
    let className = `modalContent ${props.visible ? 'openContent' : ''}`;
    const [name, setName] = useState(props.name);
    const [sum, setSum] = useState(props.sum);

    return(
        <form action="#"  
            className={className}>
            <input 
                type="text"
                name="nameCard"     
                placeholder="Новая категория" 
                className="inputNewCtg"
                value={name}
                onChange={(e) => props.rename(e)} />
            <span className="maneyCounterLog">
                {sum}
                </span>
            <input 
                type="number" 
                name="MoneyCount"   
                className="maneyCounterInput"   
                placeholder="Укажите сумму"/>
            <button className="plusSum">Добавить</button>
        </form>
        
    );
}

export default Modal;