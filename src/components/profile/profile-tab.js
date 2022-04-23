

import '../app/App.css';


const ProfileTab = ({tabIndex}) => {

    return (
        <div className={tabIndex === 3 ? 'tab active' : 'tab'}>
            <div className="tab_content">
                {/* {elements} */}
            </div>
            
        </div>
    )
}

export default ProfileTab;
