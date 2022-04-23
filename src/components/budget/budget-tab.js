

import '../app/App.css';


const BudgetTab = ({tabIndex}) => {

    return (
        <div className={tabIndex === 2 ? 'tab active' : 'tab'}>
            <div className="tab_content">
                {/* {elements} */}
            </div>
            
        </div>
    )
}

export default BudgetTab;
