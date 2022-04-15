import CategorieCard from './categories-card/categorie-card';
import PageName from '../pages-name/pages-name';

import './categories-card/categorie-card.css';


const CategorieCardArea = ({data, onAdd, openModal, rename, changeSum}) => {

    const elements = data.map(item => {
        const {id, name, sum, ...itemProps} = item;
        return(
            <CategorieCard key={id} 
                {...itemProps}
                sum={sum}
                idCard={id}
                name={name}
                onOpenModal={() => openModal(id)}
                rename={rename}
                changeSum={changeSum} />
        )
    })

    return (
        <div className='tab'>
            <PageName name='Категории'
            onAdd={() => onAdd()} />
            <div className="categorie_card_area">
                {elements}
            </div>
            
        </div>
    )
}

export default CategorieCardArea;
