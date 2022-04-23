import HystoryCard from './history-card/history-card';

import '../app/App.css';
import './history-card/history-card.css';


const HistoryTab = ({tabIndex}) => {


    return (
        <div className={tabIndex === 1 ? 'tab active' : 'tab'}>
            <div className="tab_content">
                <div className="card_day">
                    <div className="date">
                        21 апреля 2021
                        <span className="week_day"> пятница</span>
                    </div>
                    <HystoryCard/>
                    <HystoryCard/>
                    <HystoryCard/>

                </div>
                <div className="card_day">
                    <div className="date">
                        22 апреля 2021
                        <span className="week_day"> пятница</span>
                    </div>
                    <HystoryCard/>
                    <HystoryCard/>
                    <HystoryCard/>
                    <HystoryCard/>

                </div>
                <div className="card_day">
                    <div className="date">
                        23 апреля 2021
                        <span className="week_day"> пятница</span>
                    </div>
                    <HystoryCard/>
                    <HystoryCard/>
                    <HystoryCard/>
                    <HystoryCard/>
                    <HystoryCard/>
                </div>
                <div className="card_day">
                    <div className="date">
                        24 апреля 2021
                        <span className="week_day"> пятница</span>
                    </div>
                    <HystoryCard/>
                    <HystoryCard/>
                    <HystoryCard/>

                </div>
            </div>
            
        </div>
    )
}

export default HistoryTab;
