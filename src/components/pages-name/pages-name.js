import './pages-name.css';
import { Component } from 'react';

class PageName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, onAdd} = this.props;

        return(
            <div className="page_name">
                <div className="categorie_name">
                    {name}
                    <button className="new_categorie" 
                        onClick={onAdd}>+</button>
                </div>
            </div>
        );
    }
}

export default PageName;