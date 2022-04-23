import './pages-name.css';
import { Component } from 'react';

class PageName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {namePage, onAdd} = this.props;
        const btnAdd = namePage == 'Категории' ? <button className="new_categorie" onClick={onAdd}>+</button> : null;

        return(
            <div className="page_name">
                <div className="categorie_name">
                    {namePage}
                    {btnAdd}
                </div>
            </div>
        );
    }
}

export default PageName;