import './history-card.css';

const HistroyCard = () => {

    return (
        <div className="card_content">
            <div className="icon_name">
                <div className="iconCircle">
                    <i className='bi bi-bag-fill'/>
                </div>
                <span className="categoriy_name">Продукты</span>
            </div>
            <span className="category_log_sum">500</span>
        </div> 
    )
}

export default HistroyCard;