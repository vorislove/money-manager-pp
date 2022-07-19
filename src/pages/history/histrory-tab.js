import HystoryCard from '../../components/history-card/history-card';

import '../../components/history-card/history-card.scss';
import React from 'react';

const HistoryTab = () => {
	return (
		<div className="tab_content">
			<div className="card_day">
				<div className="date">
					21 апреля 2021
					<span className="week_day"> пятница</span>
				</div>
				<HystoryCard />
				<HystoryCard />
				<HystoryCard />
			</div>
			<div className="card_day">
				<div className="date">
					22 апреля 2021
					<span className="week_day"> пятница</span>
				</div>
				<HystoryCard />
				<HystoryCard />
				<HystoryCard />
				<HystoryCard />
			</div>
			<div className="card_day">
				<div className="date">
					23 апреля 2021
					<span className="week_day"> пятница</span>
				</div>
				<HystoryCard />
				<HystoryCard />
				<HystoryCard />
				<HystoryCard />
				<HystoryCard />
			</div>
			<div className="card_day">
				<div className="date">
					24 апреля 2021
					<span className="week_day"> пятница</span>
				</div>
				<HystoryCard />
				<HystoryCard />
				<HystoryCard />
			</div>
		</div>
	);
};

export default HistoryTab;
