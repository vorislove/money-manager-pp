import CategorieCard from './categories-card/categorie-card';

import '../app/App.css';


const CategorieTab = ({data, openModal, changeNameAndSum, deleteCard, tabIndex}) => {

    const elements = data.map(item => {
        const {id, name, sum, ...itemProps} = item;
        return(
            <CategorieCard key={id} 
                {...itemProps}
                sum={sum}
                idCard={id}
                name={name}
                deleteCard={() => deleteCard(id)}
                onOpenModal={() => openModal(id)}
                changeNameAndSum={changeNameAndSum} />
        )
    })

    return (
        <div className={tabIndex === 0 ? 'tab active' : 'tab'}>
            <div className="tab_content">
                {elements}
            </div>
            
        </div>
    )
}

export default CategorieTab;
