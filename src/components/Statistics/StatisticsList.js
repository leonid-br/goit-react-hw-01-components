import Statistics from './Statistics';
import PropTypes from 'prop-types';
import style from './StatisticsList.module.css';


const StatisticList = ({ stats }) => {
  return (
    <ul className={style.statList}>
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
