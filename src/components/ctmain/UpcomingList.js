import React from 'react';
import Upcoming from './Upcoming';

const UpcomingList = (props) => {
    const cardStyle = {
        padding:'7px', 
        border: '1.5px solid',
        borderRadius: '10px',
        borderColor: "#707070",
        width:"100%"
    };
    return(
        <div>
            {props.jobs.map(job => 
                <div key={job.key} style={cardStyle}>
                    <Upcoming {...job} />
                </div>
            )}
        </div>
    );
};

UpcomingList.propTypes = {
    jobs: React.PropTypes.array.isRequired
};

export default UpcomingList;