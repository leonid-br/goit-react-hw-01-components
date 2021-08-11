import PropTypes from 'prop-types';

const Statistics = ({id, lable, percentage}) => {
  return (
    <li className="item" key={id}>
        <span className="label">{lable}</span>
        <span className="percentage">{percentage}</span>
    </li>
  );
};

Statistics.propType = {
    id:PropTypes.string.isRequired,
    lable:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
};


export default Statistics;