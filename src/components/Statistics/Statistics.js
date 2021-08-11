import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ id, lable, percentage }) => {
  const color = () =>
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  return (
    <li className={style.item} key={id} style={{ backgroundColor: color() }}>
      <span className={style.label}>{lable}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

Statistics.propType = {
  id: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
