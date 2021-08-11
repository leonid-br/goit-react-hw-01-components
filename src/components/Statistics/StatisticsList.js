import Statistics from './Statistics';
import PropTypes from 'prop-types';

const StatisticList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <Statistics
          key={stat.id}
          lable={stat.label}
          percentage={stat.percentage}
        />
      ))}
    </ul>
  );
};

StatisticList.protoType = {
  item: PropTypes.array.isRequired,
};

export default StatisticList;
