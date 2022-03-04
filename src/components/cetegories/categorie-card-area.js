import CategorieCard from './categories-card/categorie-card';
import PageName from '../pages-name/pages-name';

import './categories-card/categorie-card.css';


const CategorieCardArea = ({data, onAdd, openModal, rename}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <CategorieCard key={id} 
                {...itemProps}
                onOpenModal={() => openModal(id)}
                rename={() => rename(id)} />
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
