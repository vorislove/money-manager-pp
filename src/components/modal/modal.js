
import './modal.css';

const Modal = (props) => {
    

    return(
        <div className={`modal ${props.isOpened ? 'open' : 'close'}`}
            onClick={()=> props.onClosed()}
            id="exampleModal" 
            tabindex="-1" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden={props.isOpened}>
            <form action="#"  
            className="modalContent modal-dialog" 
            >
                <input 
                    type="text"
                    name="nameCard"     
                    placeholder="Новая категория" 
                    className="inputNewCtg"
                    value={props.name}/>
                <span 
                    className="maneyCounterLog">{props.sum}</span>
                <input 
                    type="number" 
                    name="MoneyCount"   
                    className="maneyCounterInput"   
                    placeholder="Укажите сумму"/>
                <button className="plusSum">Добавить</button>
            </form>
        </div>
    );
}

export default Modal;